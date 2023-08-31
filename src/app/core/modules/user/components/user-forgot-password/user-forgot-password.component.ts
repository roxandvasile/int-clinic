import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-forgot-password',
  templateUrl: './user-forgot-password.component.html',
  styleUrls: ['./user-forgot-password.component.scss'],
})
export class UserForgotPasswordComponent {
  email = '';

  constructor(private authService: AuthService) {}

  resetPassword() {
    this.authService
      .sendPasswordResetEmail(this.email)
      .then(() => {
        console.log('Password reset email sent.');
      })
      .catch(error => {
        console.error('Error sending password reset email:', error);
      });
  }
}
