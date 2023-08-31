import { Component, EventEmitter, Output } from '@angular/core';
import { combineLatest, filter } from 'rxjs';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { Clinic } from 'src/app/core/interfaces/clinic.interface';
import { ClinicService } from 'src/app/core/services/clinic.service';
import { DataStoreService } from 'src/app/core/services/data-store.service';

@Component({
  selector: 'app-choose-clinic',
  templateUrl: './choose-clinic.component.html',
  styleUrls: ['./choose-clinic.component.scss'],
})
export class ChooseClinicComponent {
  clinics: Clinic[] = [];
  appointmentData!: Appointment;
  selectedClinic!: Clinic;
  searchedInput = '';
  @Output() hasSelection = new EventEmitter<boolean>();

  constructor(
    private clinicService: ClinicService,
    private dataStoreService: DataStoreService
  ) {}

  getClinics() {
    combineLatest([this.dataStoreService.appointmentDetails])
      .pipe(filter(([data]) => !!data))
      .subscribe(([data]) => {
        this.appointmentData = data;

        this.clinicService.queryClinics(this.appointmentData.specialty.id).subscribe(data => {
          this.clinics = data as Clinic[];
        });
      });
  }

  pickClinic(clinic: Clinic) {
    this.selectedClinic = clinic;
    this.hasSelection.emit(false);
    this.sendPickedClinic();
  }

  sendPickedClinic() {
    const newData = { ...this.appointmentData, clinic: this.selectedClinic };
    this.dataStoreService.addData(newData);
  }

  isActive(item: Clinic) {
    return this.selectedClinic && this.selectedClinic.id === item.id;
  }
}
