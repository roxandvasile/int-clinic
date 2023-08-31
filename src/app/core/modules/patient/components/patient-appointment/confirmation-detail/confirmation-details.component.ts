import { Component } from '@angular/core';
import { combineLatest, filter } from 'rxjs';
import { AppointmentIds } from 'src/app/core/interfaces/appointment-ids.interface';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { DataStoreService } from 'src/app/core/services/data-store.service';

@Component({
  selector: 'app-confirmation-details',
  templateUrl: './confirmation-details.component.html',
  styleUrls: ['./confirmation-details.component.scss'],
})
export class ConfirmationDetailComponent {
  appointment: Appointment = {} as Appointment;
  dateSelected!: any;
  testSelected = '';
  constructor(
    private dataStoreService: DataStoreService,
    private appointmentService: AppointmentService
  ) {}

  initializeConfirmationComponent(): void {
    combineLatest([this.dataStoreService.appointmentDetails])
      .pipe(filter(([data]) => !!data))
      .subscribe(([data]) => {
        this.appointment = data;
        this.dateSelected = data.date
          ?.toString()
          .slice(4)
          .substring(11, this.testSelected.length - 1);
      });
  }

  onPostAppointment() {
    if (this.appointment.doctor.id && this.appointment.clinic.id) {
      const appointmentConfirmed: AppointmentIds = {
        specialtyId: this.appointment.specialty.id,
        serviceId: this.appointment.service.id,
        doctorId: this.appointment.doctor.id,
        clinicId: this.appointment.clinic.id,
        date: this.appointment.date,
        timeSlot: this.appointment.timeSlot,
        extraDetails: this.appointment.extraDetails,
        patient: this.appointment.patientData,
        localDate: this.appointment.date?.toLocaleDateString('ro-Ro', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
      };
      this.appointmentService.addAppointment(appointmentConfirmed);
    }
  }
}
