import { Injectable } from '@angular/core';

import {
  Firestore,
  collectionData,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  DocumentData,
  getDoc,
  query,
  where,
} from '@angular/fire/firestore';

import { Doctor } from '../interfaces/doctor.interface';
import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) {}

  addDoctor(pass: string, doctor: Doctor) {
    this.authService.doctorSignUp(pass, doctor);
  }

  queryDoctors(id: string) {
    const doctorsRef = collection(this.firestore, 'doctors');
    const queryResponse = query(doctorsRef, where('specialtyIds', 'array-contains', id));

    return collectionData(queryResponse, { idField: 'id' });
  }

  getDoctors(): Observable<DocumentData[]> {
    const doctorCollection = collection(this.firestore, 'doctors');
    return collectionData(doctorCollection, { idField: 'id' });
  }

  getDoctor(id: string): Observable<DocumentData> {
    const selectedDoctor = doc(this.firestore, 'doctors', id);

    return from(getDoc(selectedDoctor));
  }

  updateDoctor(id: string, updatedData: DocumentData): Observable<void> {
    const selectedDoctor = doc(this.firestore, 'doctors', id);

    if (!updatedData['imageUrl']) {
      delete updatedData['imageUrl'];
    }

    return from(updateDoc(selectedDoctor, updatedData));
  }

  deleteDoctor(id: string): Observable<void> {
    const selectedDoctor = doc(this.firestore, 'doctors', id);
    return from(deleteDoc(selectedDoctor));
  }

  updateImage(id: string, imageUrl: string) {
    if (!imageUrl) {
      console.error('Image URL is undefined or empty');
      return;
    }

    const docInstance = doc(this.firestore, 'doctors', id);
    updateDoc(docInstance, {
      imageUrl: imageUrl,
    });
  }
}
