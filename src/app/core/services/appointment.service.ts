import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AppointmentIds } from '../interfaces/appointment-ids.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(
    private dataBase: Firestore,
    private afs: AngularFirestore
  ) {}

  addAppointment(appointment: AppointmentIds): Observable<DocumentData> {
    const appointmentCollection = collection(this.dataBase, 'appointments');
    return from(addDoc(appointmentCollection, appointment));
  }

  getAppointments(): Observable<DocumentData[]> {
    const appointmentsCollection = collection(this.dataBase, 'appointments');
    return collectionData(appointmentsCollection, { idField: 'id' });
  }

  queryAppointments(doctorID: string, localDate: string | undefined) {
    const appointmentsRef = collection(this.dataBase, 'appointments');

    const q = query(appointmentsRef, where('doctorId', '==', `${doctorID}`), where('localDate', '==', `${localDate}`));

    return collectionData(q);
  }

  dashboardQueryPatient(patientId: string) {
    const appointmentsRef = collection(this.dataBase, 'appointments');

    const q = query(appointmentsRef, where('patient.uid', '==', `${patientId}`));
    return collectionData(q);
  }

  dashboardQueryDoctor(doctorId: string) {
    const appointmentsRef = collection(this.dataBase, 'appointments');

    const q = query(appointmentsRef, where('doctorId', '==', `${doctorId}`));
    return collectionData(q);
  }

  updatePatient(patientObject: any, id: string) {
    const patientInstance = doc(this.dataBase, 'patients', id);

    updateDoc(patientInstance, patientObject).catch(err => {
      console.log(err);
    });
  }

  queryAppointmentsDoctor(doctorID: string): Observable<DocumentData[]> {
    const appointmentsRef = collection(this.dataBase, 'appointments');

    let queryRef: any = appointmentsRef;

    if (doctorID) {
      queryRef = query(appointmentsRef, where('doctorId', '==', `${doctorID}`));
    }

    return collectionData(queryRef);
  }
}
