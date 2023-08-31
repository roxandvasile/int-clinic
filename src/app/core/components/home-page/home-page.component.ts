import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../interfaces/doctor.interface';
import { Patient } from '../../interfaces/patient.interface';
import { Admin } from '../../interfaces/admin.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  loggedUser!: Doctor | Patient | Admin | null;
  isAdmin!: boolean;
  isPatient!: boolean;
  isDoctor!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.loggedUser = user;
      this.isAdmin = this.loggedUser?.role === 'admin' ? true : false;
      this.isPatient = this.loggedUser?.role === 'patient' ? true : false;
      this.isDoctor = this.loggedUser?.role === 'doctor' ? true : false;
    });
  }

  onClickGetAppoinment(): void {
    this.router.navigate(['patient/appointment']);
  }

  onClickManageSite(): void {
    this.router.navigate(['doctor']);
  }
}
