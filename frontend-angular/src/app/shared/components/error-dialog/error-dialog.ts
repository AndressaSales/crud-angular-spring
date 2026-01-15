import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle} from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  imports: [
    MatDialogModule,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule
  ],
  templateUrl: './error-dialog.html',
  styleUrl: './error-dialog.scss',
})
export class ErrorDialog {
  data = inject(MAT_DIALOG_DATA);
}
