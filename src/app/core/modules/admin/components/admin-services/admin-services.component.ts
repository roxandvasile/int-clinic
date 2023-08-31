import { Component, ViewChild, Output } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Services } from 'src/app/core/interfaces/services.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ThemePalette } from '@angular/material/core';
import { tap } from 'rxjs';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminServicesComponent {
  services: Services[] = [];
  specialties: Specialty[] = [];
  searchInput = '';

  columnsToDisplay = ['name', 'price', 'id'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Services;

  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 15, 20, 30];
  sortField = 'lastName';
  sortDirection: 'asc' | 'desc' = 'asc';
  showFirstLastButtons = true;

  @Output() dataSource!: MatTableDataSource<Services>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  loading = true;
  color: ThemePalette = 'primary';
  diameter = 50;

  constructor(
    private dataBase: ServicesService,
    private dialogService: ConfirmationDialogService,
    private specialtyService: SpecialtiesService
  ) {
    this.getSpecialties();
    this.dataBase
      .getServices()
      .pipe(
        tap(data => {
          this.services = data as Services[];
          this.services.forEach(service => (service.assignedSpecialties = this.getSpecialtyNames(service.id)));
          this.dataSource = new MatTableDataSource(this.services);
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

  getSpecialtyNames(serviceId: string) {
    const assignedSpecialties: string[] = [];

    const filteredSpecialties = this.specialties.filter(specialty => {
      return specialty.serviceIds.includes(serviceId);
    });
    filteredSpecialties.forEach(specialty => assignedSpecialties.push(specialty.name));

    return assignedSpecialties;
  }

  confirmDeleteDialog(id: string, name: string) {
    const options = {
      title: 'Ștergere serviciu',
      message: `Ești sigur că vrei să ștergi serviciul ${name}?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (id) {
          this.dataBase.deleteService(id);
        }
      }
    });
  }
}
