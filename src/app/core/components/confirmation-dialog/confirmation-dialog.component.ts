import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cancelText: string;
      confirmText: string;
      message: string;
      title: string;
    },
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}

  public cancel() {
    this.close(false);
  }
  public close(value: boolean) {
    this.dialogRef.close(value);
  }
  public confirm() {
    this.close(true);
  }
}
