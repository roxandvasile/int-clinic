import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserRoutingModule } from './user-routing.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserForgotPasswordComponent } from './components/user-forgot-password/user-forgot-password.component';
import { UserVerifyEmailComponent } from './components/user-verify-email/user-verify-email.component';

@NgModule({
  declarations: [
    UserComponent,
    UserLoginComponent,
    UserSignUpComponent,
    UserForgotPasswordComponent,
    UserVerifyEmailComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    UserRoutingModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
})
export class UserModule {}
