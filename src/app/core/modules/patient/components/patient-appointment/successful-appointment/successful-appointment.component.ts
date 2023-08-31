import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PatientAppointmentComponent } from '../patient-appointment.component';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-successful-appointment',
  templateUrl: './successful-appointment.component.html',
  styleUrls: ['./successful-appointment.component.scss'],
})
export class SuccessfulAppointmentComponent implements OnInit {
  appointmentData!: Appointment;

  constructor(
    private dataStoreService: DataStoreService,
    private patientAppointmentComponent: PatientAppointmentComponent
  ) {}

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment() {
    this.dataStoreService.appointmentDetails.subscribe(data => (this.appointmentData = data));
  }

  generatePDF() {
    const appointmentDetails = this.appointmentData;
    const fileUrl = appointmentDetails.extraDetails.file.url;
    const fileName = appointmentDetails.extraDetails.file.name;

    const documentDefinition = {
      content: [
        {
          text: 'Detalii Programare:',
          style: 'header',
        },
        {
          text:
            `Stimate ${appointmentDetails.patientData.displayName},\n\n` +
            `Îți confirmăm programarea realizată în vederea unei consultații medicale în data de ${appointmentDetails.date?.toLocaleDateString(
              'ro-Ro',
              { day: 'numeric', month: 'short', year: 'numeric' }
            )},` +
            ` la ora ${appointmentDetails.timeSlot}, cu medicul ${appointmentDetails.doctor.firstName} ${appointmentDetails.doctor.lastName}.\n` +
            ` Serviciul medical ales este '${appointmentDetails.service.name}' si aparține secției de '${appointmentDetails.specialty.name}'.\n` +
            ` Consultația va avea loc la ${appointmentDetails.clinic.name}, situată în ${appointmentDetails.clinic.address}.\n` +
            ` Prețul total este de ${appointmentDetails.service.price} RON.\n\n` +
            ` Detalii suplimentare adăugate: ${appointmentDetails.extraDetails.comment}\n` +
            ` Fișiere atașate programării: \n`,
          style: 'paragraph',
        },
        {
          text: fileName,
          link: fileUrl,
          style: 'hyperlink',
        },
        {
          text: `\n\nÎți mulțumim pentru încrederea acordată și te așteptăm cu drag!`,
          style: 'paragraph',
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 10,
        },
        paragraph: {
          fontSize: 14,
          marginBottom: 5,
          lineHeight: 1.6,
        },
        hyperlink: {
          color: 'blue',
          decoration: 'underline',
        },
      } as any,
    };

    return documentDefinition;
  }

  generateAndDownloadPDF() {
    const documentDefinition = this.generatePDF();

    pdfMake.createPdf(documentDefinition).download('programare-clinică.pdf');
  }

  resetStepper() {
    this.patientAppointmentComponent.resetStates();
  }
}
