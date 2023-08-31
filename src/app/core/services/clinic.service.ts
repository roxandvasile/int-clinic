import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { Observable, from, map } from 'rxjs';
import { DocumentData } from '@angular/fire/compat/firestore';
import { Clinic } from '../interfaces/clinic.interface';
@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor(private firestore: Firestore) {}

  addData(formData: Clinic) {
    const clinicsCollection = collection(this.firestore, 'clinics');
    addDoc(clinicsCollection, formData)
      .then(() => {
        console.log('Data saved');
      })
      .catch(err => {
        console.log(err);
      });
  }

  getClinics(): Observable<Clinic[]> {
    const clinicsCollection = collection(this.firestore, 'clinics');
    return collectionData(clinicsCollection, { idField: 'id' }).pipe(map((data: DocumentData[]) => data as Clinic[]));
  }

  getClinic(id: string): Observable<DocumentData> {
    const selectedClinic = doc(this.firestore, 'clinics', id);
    return from(getDoc(selectedClinic));
  }

  updateData(id: string, formData: FormGroup) {
    const docInstance = doc(this.firestore, 'clinics', id);

    updateDoc(docInstance, formData.value).catch(err => {
      console.log(err);
    });
  }

  updateImage(id: string, imageUrl: string) {
    if (!imageUrl) {
      console.error('Image URL is undefined or empty');
      return;
    }

    const docInstance = doc(this.firestore, 'clinics', id);
    updateDoc(docInstance, {
      imageUrl: imageUrl,
    }).catch(err => {
      console.log(err);
    });
  }

  queryClinics(id: string) {
    const clinicsRef = collection(this.firestore, 'clinics');
    const queryResponse = query(clinicsRef, where('specialtyIds', 'array-contains', id));

    return collectionData(queryResponse, { idField: 'id' });
  }

  deleteData(id: string) {
    const docInstance = doc(this.firestore, 'clinics', id);
    deleteDoc(docInstance).then(() => {
      console.log('Data deleted');
    });
  }
}
