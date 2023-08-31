import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-verify-email',
  templateUrl: './user-verify-email.component.html',
  styleUrls: ['./user-verify-email.component.scss'],
})
export class UserVerifyEmailComponent {
  constructor(private router: Router) {}

  onRouteLogin() {
    this.router.navigate(['login']);
  }
}
