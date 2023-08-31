import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Clinic } from 'src/app/core/interfaces/clinic.interface';
import { Doctor } from 'src/app/core/interfaces/doctor.interface';
import { Services } from 'src/app/core/interfaces/services.interface';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';

@Component({
  selector: 'app-admin-filter',
  templateUrl: './admin-filter.component.html',
  styleUrls: ['./admin-filter.component.scss'],
})
export class AdminFilterComponent {
  @Input() dataSource!:
    | MatTableDataSource<Doctor>
    | MatTableDataSource<Specialty>
    | MatTableDataSource<Services>
    | MatTableDataSource<Clinic>;

  applyFilter(event: Event) {
    this.dataSource.filterPredicate = (data: Doctor | Services | Specialty | Clinic, filter: string): boolean => {
      const dataStr = Object.keys(data)
        .reduce((currentTerm: string, key: string) => {
          return currentTerm + (data as { [key: string]: any })[key] + '◬';
        }, '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      const transformedFilter = filter
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      return dataStr.indexOf(transformedFilter) != -1;
    };

    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
