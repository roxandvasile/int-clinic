import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { doctorAuthGuardChild, patientAuthGuardChild, adminAuthGuardChild } from './core/shared/auth.guard';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomePageComponent,
  },
  {
    path: 'admin',
    canActivateChild: [adminAuthGuardChild, patientAuthGuardChild, doctorAuthGuardChild],
    loadChildren: () => import('./core/modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'patient',
    canActivateChild: [patientAuthGuardChild],
    loadChildren: () => import('./core/modules/patient/patient.module').then(m => m.PatientModule),
  },
  {
    path: 'doctor',
    canActivateChild: [doctorAuthGuardChild],
    loadChildren: () => import('./core/modules/doctor/doctor.module').then(m => m.DoctorModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./core/modules/user/user.module').then(m => m.UserModule),
  },
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
