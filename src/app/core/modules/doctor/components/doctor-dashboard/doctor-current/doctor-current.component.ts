import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AppointmentIds } from 'src/app/core/interfaces/appointment-ids.interface';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ClinicService } from 'src/app/core/services/clinic.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-doctor-current',
  templateUrl: './doctor-current.component.html',
  styleUrls: ['./doctor-current.component.scss'],
})
export class DoctorCurrentComponent implements OnInit {
  constructor(
    private dateAdapter: DateAdapter<Date>,
    private appointmentService: AppointmentService,
    private authService: AuthService,
    private clinicService: ClinicService,
    private specialtyService: SpecialtiesService,
    private servicesService: ServicesService
  ) {}

  doctorId!: string;
  appointments: AppointmentIds[] = [];
  appointmentsText: any[] = [];
  currentDate = new Date();
  currentLocalDate = this.formatDate(this.currentDate);

  selected: Date | null = new Date();
  dateSelected: Date | null = null;
  localDateSelected: string | undefined;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  private formatDate(date: Date): string {
    return date.toLocaleDateString('ro-Ro', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  sortAppointmentsByTime(appointments: any[]): any[] {
    return appointments.sort((a, b) => {
      const timeA = a.timeSlot.split(':')[0];
      const timeB = b.timeSlot.split(':')[0];
      return a.date - b.date || timeA - timeB;
    });
  }

  ngOnInit(): void {
    this.dateAdapter.setLocale('ro-RO');
    this.dateAdapter.getFirstDayOfWeek = () => 1;

    this.authService.user$.subscribe(data => {
      if (data !== null && data.uid !== undefined) {
        this.doctorId = data.uid;

        this.getAppointmentsByDate(this.currentLocalDate);
      }
    });
  }

  onClickDate() {
    this.dateSelected = this.selected;

    if (this.dateSelected) {
      this.localDateSelected = this.formatDate(this.dateSelected);
      this.getAppointmentsByDate(this.localDateSelected);
    }
  }

  getAppointmentsByDate(date: string | undefined) {
    this.appointments = [];
    this.appointmentService
      .queryAppointments(this.doctorId, date)
      .pipe(
        switchMap(appointmentData => {
          this.appointments = appointmentData as AppointmentIds[];
          const observables = this.appointments.map(appointment => {
            return combineLatest({
              clinic: this.clinicService.getClinic(appointment.clinicId),
              specialty: this.specialtyService.getSpecialty(appointment.specialtyId),
              service: this.servicesService.getService(appointment.serviceId),
            }).pipe(
              map(result => ({
                clinic: result.clinic['data'](),
                specialty: result.specialty['data'](),
                service: result.service['data'](),
                localDate: appointment.localDate,
                timeSlot: appointment.timeSlot,
                extraDetails: appointment.extraDetails,
                patient: appointment.patient,
              }))
            );
          });

          return combineLatest(observables);
        })
      )
      .subscribe(appointmentDetails => {
        this.appointmentsText = this.sortAppointmentsByTime(appointmentDetails);
        if (this.appointmentsText.length === 0) {
          this.appointments = [];
        }
      });
  }
}
