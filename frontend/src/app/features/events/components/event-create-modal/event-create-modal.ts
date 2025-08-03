import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import {EventModel, EventService} from '../../../../core/services/event';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-create-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatProgressSpinner,
  ],
  templateUrl: './event-create-modal.html',
  styleUrl: './event-create-modal.scss'
})
export class EventCreateModal {
  event: EventModel = {
    id: 0,
    title: '',
    location: '',
    description: '',
    eventDate: '',
  };
  isSaving = false;
  tomorrow: Date;
  validationErrors: any = {};

  constructor(
    private dialogRef: MatDialogRef<EventCreateModal>,
    private eventService: EventService,
    private snackBar: MatSnackBar
  ) {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

  isFormValid(): boolean {
    return !!this.event.title && !!this.event.location && !!this.event.eventDate;
  }

  save() {
    if (!this.isFormValid()) {
      this.snackBar.open('Preencha todos os campos obrigatórios.', 'Fechar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
      return;
    }

    this.isSaving = true;
    this.eventService.create(this.event).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.isSaving = false;
          this.dialogRef.close(response);
          this.snackBar.open('Evento criado com sucesso!', 'Fechar', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }, 900);
      },
      error: (error) => {
        this.isSaving = false;
        if (error.error) {
          this.validationErrors = error.error;
        }
      }
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
