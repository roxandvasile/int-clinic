import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Appointment } from 'src/app/core/interfaces/appointment.interface';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { FileUploadService } from 'src/app/core/services/file-upload.service';

@Component({
  selector: 'app-choose-extra',
  templateUrl: './choose-extra.component.html',
  styleUrls: ['./choose-extra.component.scss'],
})
export class ChooseExtraComponent {
  fileUrl = '';
  fileName = '';
  appointmentData!: Appointment;
  @Output() hasSelection = new EventEmitter<boolean>();

  constructor(
    private fileUploadService: FileUploadService,
    private dataStoreService: DataStoreService,
    private matStepper: MatStepper
  ) {}

  extraDetailsForm = new FormGroup({
    comment: new FormControl(''),
  });

  getAppointment() {
    this.dataStoreService.appointmentDetails.subscribe(data => {
      this.appointmentData = data;
    });
    this.sendPickedSelection();
  }

  uploadFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) {
      return;
    }

    this.fileUploadService.uploadFile(file, 'extraFiles').subscribe(downloadURL => {
      this.fileUrl = downloadURL;
      this.fileName = file.name;
    });
  }

  sendPickedSelection(): void {
    this.hasSelection.emit(false);
    this.matStepper.selectionChange.subscribe(() => {
      const formValue = this.extraDetailsForm.value;
      const newData = {
        ...this.appointmentData,
        extraDetails: { comment: formValue.comment || '', file: { name: this.fileName, url: this.fileUrl } },
      };
      this.dataStoreService.addData(newData);
    });
  }
}
