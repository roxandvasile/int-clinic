import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, DocumentData } from '@angular/fire/compat/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Doctor } from '../interfaces/doctor.interface';
import { Admin } from '../interfaces/admin.interface';
import { Patient } from '../interfaces/patient.interface';
import { Router } from '@angular/router';
import { initializeApp, deleteApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<Patient | Doctor | Admin | null>;

  secondaryApp = initializeApp(environment.firebase, 'SecondaryApp');
  secondaryAppAuth = getAuth(this.secondaryApp);

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          const patientDoc = this.afs.doc<Patient>(`patients/${user.uid}`).valueChanges();
          const doctorDoc = this.afs.doc<Doctor>(`doctors/${user.uid}`).valueChanges();
          const adminDoc = this.afs.doc<Admin>(`admin/${user.uid}`).valueChanges();

          return combineLatest([patientDoc, doctorDoc, adminDoc]).pipe(
            map(([patientData, doctorData, adminData]) => {
              if (patientData) {
                return patientData;
              } else if (doctorData) {
                return doctorData;
              } else {
                return adminData || null;
              }
            })
          );
        } else {
          return of(null);
        }
      })
    );
  }

  getUserRole(userId: string | null): Observable<string | null> {
    const patientDoc = this.afs.doc<Patient>(`patients/${userId}`).valueChanges();
    const doctorDoc = this.afs.doc<Doctor>(`doctors/${userId}`).valueChanges();
    const adminDoc = this.afs.doc<Admin>(`admin/${userId}`).valueChanges();

    return combineLatest([patientDoc, doctorDoc, adminDoc]).pipe(
      map(([patientData, doctorData, adminData]) => {
        if (patientData && patientData.role === 'patient') {
          return 'patient';
        } else if (doctorData && doctorData.role === 'doctor') {
          return 'doctor';
        } else if (adminData && adminData.role === 'admin') {
          return 'admin';
        } else {
          return null;
        }
      })
    );
  }

  getCurrentUserUid(): Promise<string | null> {
    return this.afAuth.currentUser
      .then(user => {
        return user ? user.uid : null;
      })
      .catch(() => null);
  }

  pacientSignUp(pass: string, patient: Patient) {
    return this.afAuth
      .createUserWithEmailAndPassword(patient.email, pass)
      .then(result => {
        if (!result.user) {
          return;
        }
        const userRef: AngularFirestoreDocument<DocumentData> = this.afs.doc(`patients/${result.user.uid}`);

        const patientData = {
          uid: result.user.uid,
          email: patient.email,
          imageUrl: patient.imageUrl,
          displayName: patient.lastName + ' ' + patient.firstName,
          gender: patient.gender,
          phone: patient.phone,
          role: 'patient',
        };

        return userRef.set(patientData, {
          merge: true,
        });
      })
      .catch(err => Promise.reject(err));
  }

  doctorSignUp(pass: string, doctor: Doctor) {
    return createUserWithEmailAndPassword(this.secondaryAppAuth, doctor.email, pass)
      .then(result => {
        if (!result.user) {
          return;
        }
        const userRef: AngularFirestoreDocument<DocumentData> = this.afs.doc(`doctors/${result.user.uid}`);

        const doctorData = {
          uid: result.user.uid,
          email: doctor.email,
          password: doctor.password,
          imageUrl: doctor.imageUrl,
          lastName: doctor.lastName,
          firstName: doctor.firstName,
          displayName: doctor.firstName + ' ' + doctor.lastName,
          phone: doctor.phone,
          adress: doctor.adress,
          gender: doctor.gender,
          description: doctor.description,
          specialtyIds: doctor.specialtyIds,
          role: 'doctor',
        };

        return userRef.set(doctorData, {
          merge: true,
        });
      })
      .catch(err => Promise.reject(err))
      .finally(() => {
        this.secondaryAppAuth.signOut();
      });
  }

  signIn(email: string, pass: string) {
    return this.afAuth.signInWithEmailAndPassword(email, pass).catch(err => Promise.reject(err));
  }

  patientGoogleSignIn() {
    return this.afAuth
      .signInWithPopup(new GoogleAuthProvider())
      .then(result => {
        if (!result.user) {
          return;
        }
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`patients/${result.user.uid}`);

        const patientData = {
          uid: result.user.uid,
          email: result.user.email,
          imageUrl: result.user.photoURL,
          displayName: result.user.displayName,
          gender: null,
          phone: result.user.phoneNumber,
          role: 'patient',
        };

        return userRef.set(patientData, {
          merge: true,
        });
      })
      .catch(err => Promise.reject(err));
  }

  signOut() {
    return this.afAuth.signOut();
  }

  sendPasswordResetEmail(email: string) {
    return this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.router.navigate(['verify-email']);
      })
      .catch(error => {
        console.error('Error sending password reset email:', error);
      });
  }
}
