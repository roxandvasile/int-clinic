import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Appointment } from '../interfaces/appointment.interface';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  appointmentDetails = new ReplaySubject<Appointment>(1);

  addData(data: Appointment) {
    return this.appointmentDetails.next(data);
  }
}
