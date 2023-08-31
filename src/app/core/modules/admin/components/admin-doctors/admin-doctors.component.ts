import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { tap } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminDoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  specialties: Specialty[] = [];
  searchInput = '';

  columnsToDisplay = ['lastName', 'firstName', 'phone', 'email', 'specialtyIds'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Doctor;

  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20, 30];
  sortField = 'lastName';
  sortDirection: 'asc' | 'desc' = 'asc';
  showFirstLastButtons = true;

  @Output() dataSource!: MatTableDataSource<Doctor>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  loading = true;
  color: ThemePalette = 'primary';
  diameter = 50;

  constructor(
    private doctorService: DoctorService,
    private dialogService: ConfirmationDialogService,
    private specialtyService: SpecialtiesService
  ) {
    this.getSpecialties();
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors() {
    this.loading = true;
    return this.doctorService
      .getDoctors()
      .pipe(
        tap(data => {
          this.doctors = data as Doctor[];
          this.doctors.forEach(doctor => (doctor.assignedSpecialties = this.getSpecialtyNames(doctor.specialtyIds)));
          this.dataSource = new MatTableDataSource(this.doctors);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loading = false;
        })
      )
      .subscribe();
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

  getSpecialtyNames(specialtyIds: string[]): string[] {
    const specialtyNames = specialtyIds.map(specialtyId => {
      const specialty = this.specialties.find(spec => spec.id === specialtyId);
      return specialty ? specialty.name : '';
    });
    return specialtyNames;
  }

  confirmDeleteDialog(id: string, name: string) {
    const options = {
      title: 'Ștergere doctor',
      message: `Ești sigur că vrei să ștergi doctorul ${name}?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (id) {
          this.doctorService.deleteDoctor(id);
        }
      }
    });
  }
}
