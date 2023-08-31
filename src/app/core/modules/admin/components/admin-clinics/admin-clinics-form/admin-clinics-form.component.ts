import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Clinic } from 'src/app/core/interfaces/clinic.interface';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { ClinicService } from 'src/app/core/services/clinic.service';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { ImageUploadService } from 'src/app/core/services/image-upload.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

enum FormSubmitState {
  ADD = 'Adauga Clinică',
  EDIT = 'Actualizează Clinică',
}
@Component({
  selector: 'app-admin-clinics-form',
  templateUrl: './admin-clinics-form.component.html',
  styleUrls: ['./admin-clinics-form.component.scss'],
})
export class AdminClinicsFormComponent implements OnInit {
  clinicId!: string;
  buttonText: string = FormSubmitState.ADD;
  defaultFormValues!: object;
  doctors: Doctor[] = [];
  clinicDoctors: Doctor[] = [];
  specialties!: Specialty[];
  isSpecialtiesCompleted!: boolean;
  clinicImage!: string;

  constructor(
    private clinicService: ClinicService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: ConfirmationDialogService,
    private imageUploadService: ImageUploadService,
    private doctorService: DoctorService,
    private specialtyService: SpecialtiesService
  ) {}

  clinicForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{3}( ?)[0-9]{3}( ?)[0-9]{4}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    specialtyIds: new FormControl([''], Validators.required),
    doctorIds: new FormControl([''], Validators.required),
    address: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
  });

  ngOnInit(): void {
    this.clinicId = this.route.snapshot.params['id'];
    this.autocompleteClinic(this.clinicId);
    this.fetchDoctorsAndSpecialties();
  }

  onSubmit() {
    if (this.clinicId) {
      const options = {
        title: 'Salvează Modificările',
        message: `Doriți să modificați informațiile acestei clinici?`,
        cancelText: 'Nu',
        confirmText: 'Da',
      };
      this.dialogService.open(options);

      this.dialogService.confirmed().subscribe(confirmed => {
        if (!confirmed) {
          return;
        }
        this.clinicService.updateData(this.clinicId, this.clinicForm);
        this.clinicService.updateImage(this.clinicId, this.clinicImage);
        this.router.navigate(['admin/clinics']);
      });
    } else {
      this.clinicService.addData({ ...(this.clinicForm.value as unknown as Clinic), imageUrl: this.clinicImage });
      this.clinicForm.reset();
      this.router.navigate(['admin/clinics']);
    }

    if (event) {
      this.uploadImage(event);
    }
  }

  autocompleteClinic(id: string) {
    if (id) {
      this.clinicService
        .getClinic(id)
        .pipe(
          tap(result => {
            this.buttonText = FormSubmitState.EDIT;
            const clinic = result['data']();
            this.clinicImage = clinic.imageUrl;

            this.clinicForm.patchValue({
              name: clinic.name,
              phone: clinic.phone,
              email: clinic.email,
              specialtyIds: clinic.specialtyIds,
              doctorIds: clinic.doctorIds,
              address: clinic.address,
              description: clinic.description,
            });

            this.defaultFormValues = JSON.parse(JSON.stringify(this.clinicForm.value));
          })
        )
        .subscribe();
    }
  }

  confirmCancelDialog() {
    const options = {
      title: 'Închidere Formular',
      message: `Ești sigur că vrei să închizi formularul?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.router.navigate(['admin/clinics']);
      }
    });
  }

  confirmResetDialog() {
    const options = {
      title: 'Resetare Formular',
      message: `Ești sigur ca vrei să resetezi formularul?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (this.clinicId) {
          this.autocompleteClinic(this.clinicId);
        }
        this.clinicForm.reset();
      }
    });
  }

  uploadImage(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    this.imageUploadService.uploadImage(file, 'clinics').subscribe(downloadURL => {
      this.clinicImage = downloadURL;
    });
  }

  onSpecialtiesSelectionChange(selectedSpecialtyIds: string[]) {
    if (!selectedSpecialtyIds) {
      this.clinicDoctors = this.doctors;
      this.isSpecialtiesCompleted = false;
    } else {
      this.clinicDoctors = this.doctors.filter(doctor => {
        this.isSpecialtiesCompleted = true;
        return doctor.specialtyIds?.some(id => selectedSpecialtyIds.includes(id));
      });
    }
  }

  fetchDoctorsAndSpecialties() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors as Doctor[];
      this.clinicDoctors = doctors as Doctor[];
    });

    this.specialtyService.getSpecialties().subscribe(specialties => {
      this.specialties = specialties as Specialty[];
    });
  }
}
