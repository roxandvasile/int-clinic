import { Component, Output, ViewChild, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/core/services/clinic.service';
import { Clinic } from 'src/app/core/interfaces/clinic.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
import { MatSort } from '@angular/material/sort';
import { ThemePalette } from '@angular/material/core';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-admin-clinics',
  templateUrl: './admin-clinics.component.html',
  styleUrls: ['./admin-clinics.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminClinicsComponent implements OnInit {
  clinics!: Clinic[];
  doctors: Doctor[] = [];
  specialties: Specialty[] = [];

  columnsToDisplay = ['name', 'phone', 'email', 'address'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Clinic;
  sortField = 'lastName';
  sortDirection: 'asc' | 'desc' = 'asc';
  showFirstLastButtons = true;

  @Output() dataSource!: MatTableDataSource<Clinic>;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loading = true;
  color: ThemePalette = 'primary';
  diameter = 50;

  constructor(
    private clinicService: ClinicService,
    private dialogService: ConfirmationDialogService,
    private doctorService: DoctorService,
    private specialtyService: SpecialtiesService
  ) {
    this.fetchDoctorsAndSpecialties();
  }

  ngOnInit(): void {
    this.getClinics();
  }

  getClinics() {
    this.clinicService.getClinics().subscribe(clinics => {
      this.clinics = clinics;
      this.clinics.forEach(clinic => (clinic.assignedSpecialties = this.getSpecialtyNames(clinic.specialtyIds)));
      this.clinics.forEach(clinic => (clinic.assignedDoctors = this.getDoctorNames(clinic.doctorIds)));
      this.dataSource = new MatTableDataSource(clinics);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;
    });
  }

  confirmDeleteDialog(id: string, name: string) {
    const options = {
      title: 'Stergere Clinică',
      message: `Ești sigur că vrei să ștergi clinica ${name}?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (id) {
          this.clinicService.deleteData(id);
        }
      }
    });
  }

  fetchDoctorsAndSpecialties() {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors as Doctor[];
    });

    this.specialtyService.getSpecialties().subscribe(specialties => {
      this.specialties = specialties as Specialty[];
    });
  }

  getDoctorNames(doctorIds: string[] | undefined): string[] {
    if (!doctorIds || doctorIds.length === 0) {
      return [''];
    }

    const doctorNames = doctorIds.map(doctorId => {
      const doctor = this.doctors.find(doctor => doctor.id === doctorId);
      return doctor ? doctor.firstName + ' ' + doctor.lastName : '';
    });

    return doctorNames;
  }

  getSpecialtyNames(specialtyIds: string[] | undefined): string[] {
    if (!specialtyIds || specialtyIds.length === 0) {
      return [''];
    }

    const specialtyNames = specialtyIds.map(specialtyId => {
      const specialty = this.specialties.find(specialty => specialty.id === specialtyId);
      return specialty ? specialty.name : '';
    });

    return specialtyNames;
  }
}
