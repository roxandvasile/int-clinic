import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { AdminDoctorsComponent } from './components/admin-doctors/admin-doctors.component';
import { AdminClinicsComponent } from './components/admin-clinics/admin-clinics.component';
import { AdminSpecialtiesComponent } from './components/admin-specialties/admin-specialties.component';
import { AdminSpecialtiesFormComponent } from './components/admin-specialties/admin-specialties-form/admin-specialties-form.component';
import { AdminServicesComponent } from './components/admin-services/admin-services.component';
import { AdminServicesFormComponent } from './components/admin-services/admin-services-form/admin-services-form.component';
import { AdminDoctorsFormComponent } from './components/admin-doctors/admin-doctors-form/admin-doctors-form.component';
import { AdminClinicsFormComponent } from './components/admin-clinics/admin-clinics-form/admin-clinics-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'doctors',
        component: AdminDoctorsComponent,
      },
      {
        path: 'clinics',
        component: AdminClinicsComponent,
      },
      {
        path: 'clinics/create',
        component: AdminClinicsFormComponent,
      },
      {
        path: 'clinics/:id/edit',
        component: AdminClinicsFormComponent,
      },
      {
        path: 'specialties',
        component: AdminSpecialtiesComponent,
      },
      {
        path: 'services',
        component: AdminServicesComponent,
      },
      {
        path: 'specialties/create',
        component: AdminSpecialtiesFormComponent,
      },
      {
        path: 'specialties/:id/edit',
        component: AdminSpecialtiesFormComponent,
      },
      {
        path: 'services/create',
        component: AdminServicesFormComponent,
      },
      {
        path: 'services/:id/edit',
        component: AdminServicesFormComponent,
      },
      {
        path: 'doctors/create',
        component: AdminDoctorsFormComponent,
      },
      {
        path: 'doctors/:id/edit',
        component: AdminDoctorsFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
