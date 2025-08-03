import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-modal-confirm',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogTitle
  ],
  templateUrl: './modal-confirm.html',
  styleUrl: './modal-confirm.scss'
})
export class ModalConfirm {
  constructor(
    public dialogRef: MatDialogRef<ModalConfirm>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}
}
