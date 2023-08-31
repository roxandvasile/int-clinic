import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChooseSpecialtyComponent } from './choose-specialty/choose-specialty.component';
import { ChooseClinicComponent } from './choose-clinic/choose-clinic.component';
import { ChooseDoctorComponent } from './choose-doctor/choose-doctor.component';
import { ChooseServiceComponent } from './choose-service/choose-service.component';
import { ChooseExtraComponent } from './choose-extra/choose-extra.component';
import { ChooseDateComponent } from './choose-date/choose-date.component';
import { ConfirmationDetailComponent } from './confirmation-detail/confirmation-details.component';
import { CompleteDetailsComponent } from './complete-details/complete-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.scss'],
})
export class PatientAppointmentComponent implements AfterViewInit {
  @ViewChild(ChooseSpecialtyComponent) specialtyComponent!: ChooseSpecialtyComponent;
  @ViewChild(ChooseClinicComponent) clinicComponent!: ChooseClinicComponent;
  @ViewChild(ChooseDoctorComponent) doctorComponent!: ChooseDoctorComponent;
  @ViewChild(ChooseServiceComponent) serviceComponent!: ChooseServiceComponent;
  @ViewChild(ChooseExtraComponent) extraComponent!: ChooseExtraComponent;
  @ViewChild(ChooseDateComponent) dateComponent!: ChooseDateComponent;
  @ViewChild(ConfirmationDetailComponent) confirmationComponent!: ConfirmationDetailComponent;
  @ViewChild(CompleteDetailsComponent) completeDetailsComponent!: CompleteDetailsComponent;

  specialtyMatDisabled = true;
  extraMatDisabled = true;
  doctorMatDisabled = true;
  clinicMatDisabled = true;
  serviceMatDisabled = true;
  dateMatDisabled = true;
  patientMatDisabled = true;

  constructor(private router: Router) {}

  initializeDateComponent() {
    this.dateComponent.initializeDateComponent();
  }
  initializeExtraComponent() {
    this.extraComponent.getAppointment();
  }

  initializeServiceComponent() {
    this.serviceComponent.getServices();
  }

  initializeClinicComponent() {
    this.clinicComponent.getClinics();
  }

  initializeDoctorComponent() {
    this.doctorComponent.initializeDoctorComponent();
  }

  initializeConfirmationComponent() {
    this.confirmationComponent.initializeConfirmationComponent();
  }

  initializeCompleteDetailsComponent() {
    this.completeDetailsComponent.initializeComponent();
  }

  specialtyPicked(state: boolean) {
    this.specialtyMatDisabled = state;
  }
  servicePicked(state: boolean) {
    this.serviceMatDisabled = state;
  }

  clinicPicked(state: boolean) {
    this.clinicMatDisabled = state;
  }

  doctorPicked(state: boolean) {
    this.doctorMatDisabled = state;
  }

  datePicked(state: boolean) {
    this.dateMatDisabled = state;
  }

  extraPicked(state: boolean) {
    this.extraMatDisabled = state;
  }

  patientDetailsPicked(state: boolean) {
    this.patientMatDisabled = state;
  }

  postAppointment() {
    this.confirmationComponent.onPostAppointment();
  }

  submitDetailsForm() {
    this.completeDetailsComponent.onSubmit();
  }

  resetStates() {
    this.specialtyMatDisabled = true;
    this.extraMatDisabled = true;
    this.doctorMatDisabled = true;
    this.clinicMatDisabled = true;
    this.serviceMatDisabled = true;
    this.dateMatDisabled = true;

    this.router.navigate(['patient/dashboard/current']);
  }

  ngAfterViewInit() {
    this.specialtyComponent.getSpecialties();
  }
}
