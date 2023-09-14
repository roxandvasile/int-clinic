import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserForgotPasswordComponent } from './components/user-forgot-password/user-forgot-password.component';
import { UserVerifyEmailComponent } from './components/user-verify-email/user-verify-email.component';

const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'sign-up',
    component: UserSignUpComponent,
  },
  {
    path: 'forgot-password',
    component: UserForgotPasswordComponent,
  },
  {
    path: 'verify-email',
    component: UserVerifyEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
