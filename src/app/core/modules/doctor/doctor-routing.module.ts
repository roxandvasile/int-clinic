import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { DoctorDetailsComponent } from './components/doctor-dashboard/doctor-details/doctor-details.component';
import { DoctorCurrentComponent } from './components/doctor-dashboard/doctor-current/doctor-current.component';
import { DoctorHistoryComponent } from './components/doctor-dashboard/doctor-history/doctor-history.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DoctorDashboardComponent,
    children: [
      {
        path: 'details',
        component: DoctorDetailsComponent,
      },
      {
        path: 'current',
        component: DoctorCurrentComponent,
      },
      {
        path: 'history',
        component: DoctorHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
