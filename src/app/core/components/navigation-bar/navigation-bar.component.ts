import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Patient } from '../../interfaces/patient.interface';
import { Router } from '@angular/router';
import { Doctor } from '../../interfaces/doctor.interface';
import { Admin } from '../../interfaces/admin.interface';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  loggedUser!: Doctor | Patient | Admin | null;
  isAdmin!: boolean;
  isPatient!: boolean;
  isDoctor!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.loggedUser = user;
      this.isAdmin = this.loggedUser?.role === 'admin' ? true : false;
      this.isPatient = this.loggedUser?.role === 'patient' ? true : false;
      this.isDoctor = this.loggedUser?.role === 'doctor' ? true : false;
    });
  }

  onLogOut() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }
}
