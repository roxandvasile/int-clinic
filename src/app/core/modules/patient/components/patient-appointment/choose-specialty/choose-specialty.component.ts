import { Component, EventEmitter, Output } from '@angular/core';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { Specialty } from 'src/app/core/interfaces/specialty.interface';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-choose-specialty',
  templateUrl: './choose-specialty.component.html',
  styleUrls: ['./choose-specialty.component.scss'],
})
export class ChooseSpecialtyComponent {
  specialties: Specialty[] = [];
  selected!: Specialty;
  searchedInput = '';
  receivedAppointment!: Appointment;
  @Output() hasSelection = new EventEmitter<boolean>();

  constructor(
    private specialtyService: SpecialtiesService,
    private dataStoreService: DataStoreService
  ) {}

  getSpecialties() {
    this.specialtyService.getSpecialties().subscribe(specialties => (this.specialties = specialties as Specialty[]));
    this.dataStoreService.appointmentDetails.subscribe(data => {
      this.receivedAppointment = data;
    });
  }

  isActive(item: Specialty) {
    return this.selected === item;
  }

  pickedSpecialty(specialty: Specialty) {
    this.selected = specialty;
    this.hasSelection.emit(false);
    this.sendPickedSpecialty();
  }

  sendPickedSpecialty() {
    const data: Appointment = { ...this.receivedAppointment, specialty: this.selected };
    this.dataStoreService.addData(data);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
