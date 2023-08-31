import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { Patient } from 'src/app/core/interfaces/patient.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-complete-details',
  templateUrl: './complete-details.component.html',
  styleUrls: ['./complete-details.component.scss'],
})
export class CompleteDetailsComponent {
  constructor(
    private dataStoreService: DataStoreService,
    private authService: AuthService,
    private patientService: PatientService
  ) {}
  appointmentData!: Appointment;
  patient!: Patient;
  @Output() hasSelection = new EventEmitter<boolean>();

  initializeComponent() {
    this.getAppointment();
    this.getPatient();
  }

  getAppointment() {
    this.dataStoreService.appointmentDetails.subscribe(data => {
      this.appointmentData = data;
    });
  }

  getPatient() {
    this.authService.user$.subscribe(patient => {
      if (patient) {
        this.patient = patient as Patient;
        this.autocompleteForm();
      }
    });
  }

  patientForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    gender: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  autocompleteForm() {
    if (this.patient) {
      this.patientForm.patchValue({
        email: this.patient.email,
        displayName: this.patient.displayName,
        phone: this.patient.phone,
        gender: this.patient.gender,
      });
    }
  }

  onSubmit() {
    if (this.patientForm.valid) {
      this.hasSelection.emit(false);
      const patientData = this.patientForm.value as Patient;
      patientData.uid = this.patient.uid;
      this.dataStoreService.addData({ ...this.appointmentData, patientData });
    }
  }
}
