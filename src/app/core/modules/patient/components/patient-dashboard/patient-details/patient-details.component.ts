import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent {
  user!: any;
  constructor(private authUser: AuthService) {
    this.authUser.user$.subscribe(data => {
      this.user = data;
    });
  }
}
