import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  naviageTo() {
    this.router.navigate(['../appointment'], { relativeTo: this.route });
  }
}
