import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ClinicService } from 'src/app/core/services/clinic.service';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss'],
})
export class PatientHistoryComponent {
  clientAppointments!: any;
  appointmentsText: any = [];
  todayDate: Date = new Date();

  constructor(
    private appointmentQuery: AppointmentService,
    private authUser: AuthService,
    private clinicService: ClinicService,
    private specialtyService: SpecialtiesService,
    private serviceService: ServicesService,
    private doctorService: DoctorService
  ) {
    this.authUser.user$.subscribe(data => {
      if (data !== null && data.uid !== undefined) {
        this.appointmentQuery.dashboardQueryPatient(data.uid).subscribe(data => {
          this.clientAppointments = data as [];
          this.clientAppointments.sort((a: any, b: any) => {
            const timeA = a.timeSlot.split(':')[0];
            const timeB = b.timeSlot.split(':')[0];
            return b.date - a.date || timeA - timeB;
          });
          this.todayDate.setHours(0, 0, 0, 0);
          this.clientAppointments.forEach(
            (appointment: {
              date: any;
              localDate: string;
              clinicId: string;
              specialtyId: string;
              serviceId: string;
              doctorId: string;
              timeSlot: string;
              extraDetails: object;
            }) => {
              const appointmentDate = appointment.date.toDate();
              if (appointmentDate < this.todayDate) {
                const data = {
                  clinic: {},
                  date: new Date(),
                  localDate: '',
                  doctor: {},
                  service: {},
                  specialty: {},
                  timeSlot: '',
                  extraDetails: {},
                };
                this.clinicService.getClinic(appointment.clinicId).subscribe(res => (data.clinic = res['data']()));
                this.specialtyService
                  .getSpecialty(appointment.specialtyId)
                  .subscribe(res => (data.specialty = res['data']()));
                this.serviceService.getService(appointment.serviceId).subscribe(res => (data.service = res['data']()));
                this.doctorService.getDoctor(appointment.doctorId).subscribe(res => (data.doctor = res['data']()));
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
