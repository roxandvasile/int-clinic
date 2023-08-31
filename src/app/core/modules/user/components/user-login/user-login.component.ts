import { Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  hide = true;

  users: User[] = [];

  email = '';
  password = '';

  error: { message: string } = { message: '' };

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', { validators: Validators.required }),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    const email = this.loginForm.controls.email.value as string;
    const password = this.loginForm.controls.password.value as string;

    this.authService
      .signIn(email, password)
      .then(() => {
        return this.authService.getCurrentUserUid().then(data => {
          this.authService.getUserRole(data).subscribe(role => {
            if (role === 'patient') {
              this.router.navigate(['patient/dashboard/current']);
            }
            if (role === 'doctor') {
              this.router.navigate(['doctor/dashboard/current']);
            }
            if (role === 'admin') {
              this.router.navigate(['admin']);
            }
          });
        });
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          this.error.message = 'User-ul nu a fost găsit.';
        } else if (error.code === 'auth/invalid-email') {
          this.error.message = 'Email obligatoriu';
        } else if (error.code === 'auth/invalid-password') {
          this.error.message = 'Parolă obligatorie';
        } else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
          this.error.message = 'Email sau parolă incorecte. Te rog să încerci din nou';
        } else if (error.code === 'auth/missing-password') {
          this.error.message = 'Parolă obligatorie';
        } else if (error.code === 'auth/too-many-requests') {
          this.error.message = 'Cont blocat, numărul de cereri depășite';
        } else {
          this.error.message = 'Eroare internă, te rog să încerci mai târziu';
        }
      });
  }

  onLoginWithGoogle() {
    this.authService.patientGoogleSignIn().then(() => {
      this.router.navigate(['patient/dashboard/current']);
    });
  }

  onRouterSignUp() {
    this.router.navigate(['sign-up']);
  }
}
