import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientAppointmentComponent } from './components/patient-appointment/patient-appointment.component';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './components/patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ChooseClinicComponent } from './components/patient-appointment/choose-clinic/choose-clinic.component';
import { ChooseSpecialtyComponent } from './components/patient-appointment/choose-specialty/choose-specialty.component';
import { ChooseDoctorComponent } from './components/patient-appointment/choose-doctor/choose-doctor.component';
import { ChooseServiceComponent } from './components/patient-appointment/choose-service/choose-service.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChooseExtraComponent } from './components/patient-appointment/choose-extra/choose-extra.component';
import { ChooseDateComponent } from './components/patient-appointment/choose-date/choose-date.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FilterByPipe } from '../../services/filter-by.pipe';
import { ConfirmationDetailComponent } from './components/patient-appointment/confirmation-detail/confirmation-details.component';
import { ScrollButtonComponent } from '../../components/scroll-button/scroll-button.component';
import { SuccessfulAppointmentComponent } from './components/patient-appointment/successful-appointment/successful-appointment.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { PatientDetailsComponent } from './components/patient-dashboard/patient-details/patient-details.component';
import { PatientCurrentComponent } from './components/patient-dashboard/patient-current/patient-current.component';
import { PatientHistoryComponent } from './components/patient-dashboard/patient-history/patient-history.component';
import { CompleteDetailsComponent } from './components/patient-appointment/complete-details/complete-details.component';
import { MatRadioModule } from '@angular/material/radio';
import { PatientDetailsFormComponent } from './components/patient-dashboard/patient-details/patient-details-form/patient-details-form.component';

@NgModule({
  declarations: [
    PatientAppointmentComponent,
    PatientComponent,
    ChooseClinicComponent,
    ChooseSpecialtyComponent,
    ChooseDoctorComponent,
    ChooseServiceComponent,
    ChooseExtraComponent,
    ChooseDateComponent,
    FilterByPipe,
    ConfirmationDetailComponent,
    ScrollButtonComponent,
    SuccessfulAppointmentComponent,
    PatientDashboardComponent,
    PatientDetailsComponent,
    PatientCurrentComponent,
    PatientHistoryComponent,
    CompleteDetailsComponent,
    PatientDetailsFormComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [],
})
export class PatientModule {}
