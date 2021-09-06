import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialog } from './dialog';

@Component({
  selector: 'fmea-confirm-dialog',
  template: `
    <h1 mat-dialog-title>確認視窗</h1>
    <div mat-dialog-content>
      <p>{{ data.content }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button>
        {{ data.confirmText }}
      </button>
      <button mat-raised-button (click)="onNoClick()">取消</button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
