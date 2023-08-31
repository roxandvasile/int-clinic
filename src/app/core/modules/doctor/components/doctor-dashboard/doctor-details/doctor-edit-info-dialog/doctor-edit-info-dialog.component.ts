import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';

@Component({
  selector: 'app-doctor-edit-info-dialog',
  templateUrl: './doctor-edit-info-dialog.component.html',
  styleUrls: ['./doctor-edit-info-dialog.component.scss'],
})
export class DoctorEditInfoDialogComponent {
  doctorImage = '';
  @Output() hasSelection = new EventEmitter<boolean>();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public doctor: any,
    public dialogRef: MatDialogRef<DoctorEditInfoDialogComponent>,
    private authService: AuthService,
    private doctorService: DoctorService,
    private imageUploadService: ImageUploadService
  ) {
    this.authService.user$.subscribe(data => {
      this.doctor = data;
    });
    this.getDoctor();
  }

  getDoctor() {
    this.authService.user$.subscribe(doctor => {
      if (doctor) {
        this.doctor = doctor as Doctor;
        this.autocompleteForm();
      }
    });
  }

  doctorForm = new FormGroup({
    displayName: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    gender: new FormControl('', { nonNullable: true, validators: Validators.required }),
    imageUrl: new FormControl(''),
  });

  autocompleteForm() {
    if (this.doctor) {
      this.doctorImage = this.doctor.imageUrl;
      this.doctorForm.patchValue({
        email: this.doctor.email,
        displayName: this.doctor.displayName,
        phone: this.doctor.phone,
        gender: this.doctor.gender,
      });
    }
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      this.hasSelection.emit(false);
      const doctorData = this.doctorForm.value as Doctor;
      doctorData.uid = this.doctor.uid;
      this.doctorService.updateDoctor(this.doctor.uid, doctorData);
      this.doctorService.updateImage(this.doctor.uid, this.doctorImage);
      this.close(true);
    }
    if (event) {
      this.uploadImage(event);
    }
  }

  public close(value: boolean) {
    this.dialogRef.close(value);
  }

  uploadImage(event: Event) {
    const file = (event?.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    this.imageUploadService.uploadImage(file, 'doctors').subscribe(downloadURL => {
      this.doctorImage = downloadURL;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
