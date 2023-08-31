import { Component, OnInit } from '@angular/core';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { Location } from '@angular/common';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { ServicesService } from 'src/app/core/services/services.service';
import { Services } from 'src/app/core/interfaces/services.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-admin-specialties-form',
  templateUrl: './admin-specialties-form.component.html',
  styleUrls: ['./admin-specialties-form.component.scss'],
})
export class AdminSpecialtiesFormComponent implements OnInit {
  specialtyForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(10)],
    }),
    serviceIds: new FormControl([''], { nonNullable: true, validators: Validators.required }),
  });
  specialtyRef!: Specialty;
  editRoute = false;
  id!: string;
  services!: Services[];
  doctors!: Doctor[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private databBase: SpecialtiesService,
    private location: Location,
    private dialogService: ConfirmationDialogService,
    private serviceService: ServicesService,
    private doctorService: DoctorService
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(route => {
      if (route.has('id')) {
        return this.editState(route);
      }
    });
    this.serviceService.getServices().subscribe(result => (this.services = result as Services[]));
    this.doctorService
      .getDoctors()
      .pipe(
        tap(data => {
          this.doctors = data as Doctor[];
        })
      )
      .subscribe();
  }

  addSpecialty() {
    const newSpecialty = {
      name: this.specialtyForm.controls.name.value,
      description: this.specialtyForm.controls.description.value,
      serviceIds: this.specialtyForm.controls.serviceIds.value,
    };
    this.databBase.addSpecialty(newSpecialty);
    this.location.back();
  }
  updateSpecialty() {
    const idforFilter = this.specialtyRef.id as string;
    const doctorIdsFilter = this.doctors.filter(res => {
      return res.specialtyIds.includes(idforFilter);
    });

    const doctorIds: any[] = [];
    doctorIdsFilter.forEach(res => {
      doctorIds.push(res.id);
    });

    const options = {
      title: 'Salvează modificările',
      message: `Doriți să modificați informațiile acestei specializări?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };
    this.dialogService.open(options);
    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.databBase.updateSpecialty(this.specialtyForm.getRawValue(), this.id);

        this.location.back();
      }
    });
  }

  editState(route: ParamMap) {
    this.editRoute = true;
    this.id = route.get('id') as string;
    this.databBase.getSpecialty(this.id).subscribe(dbResponse => {
      this.specialtyRef = dbResponse['data']();
      this.specialtyForm.patchValue({
        name: this.specialtyRef.name,
        description: this.specialtyRef.description,
        serviceIds: this.specialtyRef.serviceIds,
      });
    });
  }

  back() {
    this.location.back();
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
        this.location.back();
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
        this.specialtyForm.reset();
      }
    });
  }
}
