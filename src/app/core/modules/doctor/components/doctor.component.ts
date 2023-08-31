import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent {
  currentDate = new Date();
  doctor!: Doctor;

  constructor(
    private autService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}
}
