import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDoctorsComponent } from './components/admin-doctors/admin-doctors.component';
import { AdminClinicsComponent } from './components/admin-clinics/admin-clinics.component';
import { AdminSpecialtiesComponent } from './components/admin-specialties/admin-specialties.component';
import { AdminSpecialtiesFormComponent } from './components/admin-specialties/admin-specialties-form/admin-specialties-form.component';
import { SpecialtiesService } from '../../services/specialties.service';
import { AdminServicesComponent } from './components/admin-services/admin-services.component';
import { AdminServicesFormComponent } from './components/admin-services/admin-services-form/admin-services-form.component';
import { ServicesService } from '../../services/services.service';
import { AdminDoctorsFormComponent } from './components/admin-doctors/admin-doctors-form/admin-doctors-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminClinicsFormComponent } from './components/admin-clinics/admin-clinics-form/admin-clinics-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminFilterComponent } from './components/admin-filter/admin-filter.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';

const COMPONENTS = [AdminComponent];

@NgModule({
  declarations: [
    ...COMPONENTS,
    AdminDoctorsComponent,
    AdminSpecialtiesComponent,
    AdminSpecialtiesFormComponent,
    AdminServicesComponent,
    AdminServicesFormComponent,
    AdminDoctorsFormComponent,
    AdminClinicsComponent,
    AdminClinicsFormComponent,
    AdminFilterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatRadioModule,
  ],
  providers: [SpecialtiesService, ServicesService],
})
export class AdminModule {}
