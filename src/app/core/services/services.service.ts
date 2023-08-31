import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  updateDoc,
  where,
  query,
} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Services } from '../interfaces/services.interface';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  services!: DocumentData[];

  constructor(private dataBase: Firestore) {}

  addService(newService: Omit<Services, 'id'>) {
    const serviceCollection = collection(this.dataBase, 'services');

    addDoc(serviceCollection, newService);
  }

  getServices() {
    const servicesCollection = collection(this.dataBase, 'services');

    return collectionData(servicesCollection, { idField: 'id' });
  }

  getService(id: string): Observable<DocumentData> {
    const serviceReference = doc(this.dataBase, 'services', id);
    return from(getDoc(serviceReference));
  }

  updateService(editedService: Services) {
    const serviceReference = doc(this.dataBase, 'services', editedService.id);
    const updatedService = {
      name: editedService.name,
      price: editedService.price,
      description: editedService.description,
    };

    updateDoc(serviceReference, updatedService)
      .then(() => {
        console.log('Serviciul a fost editat cu succes');
      })
      .catch(err => {
        console.log(err);
      });
  }

  queryServices(ids: string[]) {
    const servicesRef = collection(this.dataBase, 'services');
    const queryResponse = query(servicesRef, where('__name__', 'in', ids));

    return collectionData(queryResponse, { idField: 'id' });
  }

  deleteService(id: string) {
    const serviceReference = doc(this.dataBase, 'services', id);

    deleteDoc(serviceReference).then(() => {
      console.log('Serviciul a fost sters cu succes');
    });
  }
}
