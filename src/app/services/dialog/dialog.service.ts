import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from './dialog.component';
import { ConfirmDialog } from './dialog';

@Injectable({
  providedIn: 'root',
})
export class PopupDialogService {
  constructor(private matDialog: MatDialog) {}

  openDialog(dialogConfig: ConfirmDialog): Observable<boolean> {
    return this.matDialog
      .open(ConfirmDialogComponent, {
        id: 'confirm-dialog',
        maxWidth: '50vw',
        data: dialogConfig,
      })
      .afterClosed()
      .pipe(
        map((result) => {
          if (result) {
            return result;
          } else {
            return false;
          }
        })
      );
  }
}
