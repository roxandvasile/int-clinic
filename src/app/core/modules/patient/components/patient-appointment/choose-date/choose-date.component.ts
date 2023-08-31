import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.scss'],
})
export class ChooseDateComponent implements OnInit {
  timeSlotsTemplate: string[] = ['9:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  selected: Date | null = new Date();
  timeSlots: string[] = [];
  doctorId!: any;
  timeSelected!: any;
  dateSelected!: any;
  @Output() hasSelection = new EventEmitter<boolean>();

  currentDate = new Date();

  appointment!: Appointment;

  ngOnInit(): void {
    this.dateAdapter.setLocale('en-US');
    this.dateAdapter.getFirstDayOfWeek = () => {
      return 1;
    };
  }

  constructor(
    private dataStoreService: DataStoreService,
    private appointmentService: AppointmentService,
    private dateAdapter: DateAdapter<Date>
  ) {}

  initializeDateComponent() {
    this.dataStoreService.appointmentDetails.subscribe(data => {
      this.appointment = data;
      this.doctorId = data.doctor.id;
    });
    this.onAddDate();
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  isActive(item: any) {
    return this.timeSelected === item;
  }

  onAddDate() {
    this.timeSelected = '';
    console.log(this.selected);
    this.dateSelected = this.selected
      ?.toString()
      .slice(4)
      .substring(11, this.timeSelected.length - 1);

    const localDate = this.selected?.toLocaleDateString('ro-Ro', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    this.appointmentService.queryAppointments(this.doctorId, localDate).subscribe(data => {
      this.timeSlots = JSON.parse(JSON.stringify(this.timeSlotsTemplate));
      data.forEach(appointment => {
        const index = this.timeSlots.indexOf(appointment['timeSlot']);
        this.timeSlots.splice(index, 1);
      });
    });
  }

  onAddTime(time: string) {
    this.hasSelection.emit(false);
    this.timeSelected = time;
    const data = { ...this.appointment, timeSlot: this.timeSelected, date: this.selected };
    this.dataStoreService.addData(data);
  }
}
