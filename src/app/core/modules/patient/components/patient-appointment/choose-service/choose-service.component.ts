import { Component, EventEmitter, Output } from '@angular/core';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { Services } from 'src/app/core/interfaces/services.interface';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { SpecialtiesService } from 'src/app/core/services/specialties.service';

@Component({
  selector: 'app-choose-service',
  templateUrl: './choose-service.component.html',
  styleUrls: ['./choose-service.component.scss'],
})
export class ChooseServiceComponent {
  services: Services[] = [];
  selected!: Services;
  searchedInput = '';
  receivedAppointment!: Appointment;
  @Output() hasSelection = new EventEmitter<boolean>();

  constructor(
    private servicesService: ServicesService,
    private specialtyService: SpecialtiesService,
    private dataStoreService: DataStoreService
  ) {}

  getServices() {
    this.dataStoreService.appointmentDetails.subscribe(data => {
      this.receivedAppointment = data;

      this.servicesService
        .queryServices(data.specialty.serviceIds)
        .subscribe(result => (this.services = result as Services[]));
    });
  }
  pickedService(service: Services) {
    this.selected = service;
    this.hasSelection.emit(false);
    this.sendPickedService();
  }

  sendPickedService() {
    const data: Appointment = { ...this.receivedAppointment, service: this.selected };
    this.dataStoreService.addData(data);
  }

  isActive(item: Services) {
    return this.selected && this.selected.id === item.id;
  }
}
