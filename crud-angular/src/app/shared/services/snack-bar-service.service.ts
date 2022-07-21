import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarServiceService {

  constructor(private snackBar: MatSnackBar) { }

  onError(message: string) {
    this.snackBar.open(message, 'ok', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  onSuccess(message: string) {
    this.snackBar.open(message, 'ok', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
