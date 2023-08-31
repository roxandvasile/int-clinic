import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss'],
})
export class UserSignUpComponent {
  patientImage = '';

  hide = true;

  error: { message: string } = { message: '' };

  constructor(
    private authService: AuthService,
    private imageUploadService: ImageUploadService,
    private router: Router
  ) {}

  signUpForm = new FormGroup({
    lastName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    firstName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    gender: new FormControl('', { nonNullable: true, validators: Validators.required }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$')],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
    imageUrl: new FormControl('', { nonNullable: true }),
  });

  onSignUp() {
    this.authService
      .pacientSignUp(this.signUpForm.controls.password.value, {
        ...this.signUpForm.getRawValue(),
        imageUrl: this.patientImage,
      })
      .then(() => {
        this.router.navigate(['patient/dashboard/details']);
        this.signUpForm.reset();
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          this.error.message = 'Adresă de email deja înregistrată în baza noastra de date. Te rog încearcă cu alta.';
        } else if (error.code === 'auth/invalid-email') {
          this.error.message = 'Adresă de email invalidă.';
        } else if (error.code === 'auth/weak-password') {
          this.error.message = 'Parolă prea scurtă. Parola trebuie să aibă minim 6 caractere.';
        } else if (error.code === 'auth/invalid-photo-url') {
          this.error.message = 'URL-ul pozei este invalid. Încearcă alta te rog.';
        } else if (error.code === 'auth/invalid-phone-number') {
          this.error.message = 'Numarul de telefon intrudus este invalid. Formatul trebuie sa fie 07xx xxx xxx';
        } else if (error.code === 'auth/phone-number-already-exists') {
          this.error.message = 'Numărul de telefon este deja înregistrat. Te rog încearcă cu altul.';
        } else {
          this.error.message = 'Eroare internă, te rog sa încerci mai târziu';
        }
      });
  }

  uploadImage(event: Event) {
    const file = (event?.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    this.imageUploadService.uploadImage(file, 'doctors').subscribe(downloadURL => {
      this.patientImage = downloadURL;
    });
  }
}
