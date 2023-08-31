import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ClinicService } from 'src/app/core/services/clinic.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-doctor-history',
  templateUrl: './doctor-history.component.html',
  styleUrls: ['./doctor-history.component.scss'],
})
export class DoctorHistoryComponent {
  doctorAppointments!: any;
  appointmentsText: any = [];
  todayDate: Date = new Date();

  constructor(
    private appointmentService: AppointmentService,
    private authService: AuthService,
    private clinicService: ClinicService,
    private specialtyService: SpecialtiesService,
    private serviceService: ServicesService
  ) {
    this.authService.user$.subscribe(data => {
      if (data !== null && data.uid !== undefined) {
        this.appointmentService.dashboardQueryDoctor(data.uid).subscribe(data => {
          this.doctorAppointments = data as [];
          this.doctorAppointments.sort((a: any, b: any) => {
            const timeA = a.timeSlot.split(':')[0];
            const timeB = b.timeSlot.split(':')[0];
            return b.date - a.date || timeA - timeB;
          });
          this.todayDate.setHours(0, 0, 0, 0);
          this.doctorAppointments.forEach(
            (appointment: {
              date: any;
              localDate: string;
              clinicId: string;
              specialtyId: string;
              patient: object;
              serviceId: string;
              timeSlot: string;
              extraDetails: object;
            }) => {
              const appointmentDate = appointment.date.toDate();
              if (appointmentDate < this.todayDate) {
                const data = {
                  clinic: {},
                  date: new Date(),
                  localDate: '',
                  service: {},
                  specialty: {},
                  patient: appointment.patient,
                  timeSlot: '',
                  extraDetails: {},
                };
                this.clinicService.getClinic(appointment.clinicId).subscribe(res => (data.clinic = res['data']()));
                this.specialtyService
                  .getSpecialty(appointment.specialtyId)
                  .subscribe(res => (data.specialty = res['data']()));
                this.serviceService.getService(appointment.serviceId).subscribe(res => (data.service = res['data']()));
                data.date = appointment.date.toDate().toString().split(' ').slice(0, 4).join(' ') as Date;
                data.timeSlot = appointment.timeSlot;
                data.extraDetails = appointment.extraDetails;
                data.localDate = appointment.localDate;

                this.appointmentsText.push(data);
              }
            }
          );
        });
      }
    });
  }
}
