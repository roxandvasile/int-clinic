import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { DoctorEditInfoDialogComponent } from './doctor-edit-info-dialog/doctor-edit-info-dialog.component';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent {
  doctor!: any;

  constructor(
    private authDoct: AuthService,
    private dialog: MatDialog
  ) {
    this.authDoct.user$.subscribe(data => {
      this.doctor = data;
    });
  }

  openDialog() {
    this.dialog.open(DoctorEditInfoDialogComponent, {
      data: this.doctor,
    });
  }
}
