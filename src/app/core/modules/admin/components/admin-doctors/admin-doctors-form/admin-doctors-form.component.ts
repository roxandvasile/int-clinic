import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

enum FormSubmitState {
  ADD = 'Adauga doctor',
  EDIT = 'Salveaza modificarile',
}

@Component({
  selector: 'app-admin-doctors-form',
  templateUrl: './admin-doctors-form.component.html',
  styleUrls: ['./admin-doctors-form.component.scss'],
})
export class AdminDoctorsFormComponent implements OnInit {
  doctorId!: string;
  specialties!: Specialty[];
  buttonText: string = FormSubmitState.ADD;
  doctorImage = '';

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private dialogService: ConfirmationDialogService,
    private imageUploadService: ImageUploadService,
    private specialtyService: SpecialtiesService
  ) {
    this.getSpecialties();
  }
  doctorForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    lastName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$')],
    }),
    adress: new FormControl('', { nonNullable: true, validators: Validators.required }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    }),
    gender: new FormControl('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required }),
    specialtyIds: new FormControl([''], { nonNullable: true, validators: Validators.required }),
    description: new FormControl('', { nonNullable: true, validators: Validators.required }),
    imageUrl: new FormControl('', { nonNullable: true }),
  });

  email = this.doctorForm.controls.email;
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['id'];
    if (this.doctorId) {
      this.doctorService
        .getDoctor(this.doctorId)
        .pipe(
          tap(result => {
            this.buttonText = FormSubmitState.EDIT;
            const doctor = result['data']() as Doctor;
            this.doctorImage = doctor.imageUrl;

            this.doctorForm.patchValue({
              firstName: doctor.firstName,
              lastName: doctor.lastName,
              phone: doctor.phone,
              adress: doctor.adress,
              email: doctor.email,
              password: doctor.password,
              gender: doctor.gender,
              specialtyIds: doctor.specialtyIds,
              description: doctor.description,
            });
          })
        )
        .subscribe();
    }
  }

  onFormSubmit() {
    if (this.doctorId) {
      const options = {
        title: 'Salvează modificările',
        message: `Doriți să modificați informațiile acestui doctor?`,
        cancelText: 'Nu',
        confirmText: 'Da',
      };
      this.dialogService.open(options);

      this.dialogService.confirmed().subscribe(confirmed => {
        if (!confirmed) {
          return;
        }
        this.doctorService.updateDoctor(this.doctorId, this.doctorForm.value);
        this.doctorService.updateImage(this.doctorId, this.doctorImage);
        this.router.navigate(['admin/doctors']);
      });
    } else {
      this.doctorService.addDoctor(this.doctorForm.controls.password.value, {
        ...this.doctorForm.getRawValue(),
        imageUrl: this.doctorImage,
      });
      this.doctorForm.reset();
      this.router.navigate(['admin/doctors']);
    }

    if (event) {
      this.uploadImage(event);
    }
  }

  getSpecialties() {
    return this.specialtyService
      .getSpecialties()
      .pipe(
        tap(data => {
          this.specialties = data as Specialty[];
        })
      )
      .subscribe();
  }

  onCloseForm() {
    this.router.navigate(['admin/doctors']);
  }

  getErrorMessage() {
    return this.email.hasError('pattern') ? 'Email Invalid' : '';
  }

  uploadImage(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    this.imageUploadService.uploadImage(file, 'doctors').subscribe(downloadURL => {
      this.doctorImage = downloadURL;
    });
  }

  confirmCancelDialog() {
    const options = {
      title: 'închidere Formular',
      message: `Ești sigur că vrei să închizi formularul?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.router.navigate(['admin/doctors']);
      }
    });
  }

  confirmResetDialog() {
    const options = {
      title: 'Resetare Formular',
      message: `Ești sigur că vrei să resetezi formularul?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.doctorForm.reset();
      }
    });
  }
}
