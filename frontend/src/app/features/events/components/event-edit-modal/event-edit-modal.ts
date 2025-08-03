import {Component, Inject} from '@angular/core';
import {EventModel, EventService} from '../../../../core/services/event';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-edit-modal',
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
  templateUrl: './event-edit-modal.html',
  styleUrl: './event-edit-modal.scss'
})
export class EventEditModal {
  event: EventModel;
  isSaving = false;
  today: Date = new Date();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventModel,
    private dialogRef: MatDialogRef<EventEditModal>,
    private eventService: EventService,
    private snackBar: MatSnackBar
  ) {
    this.event = { ...data };
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
    this.eventService.update(this.event.id, this.event).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.isSaving = false;
          this.dialogRef.close(response);
          this.snackBar.open('Evento salvo com sucesso!', 'Fechar', {
            duration: 4000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }, 900);
      },
      error: (error) => {
        this.isSaving = false;
        this.snackBar.open('Erro ao salvar evento: ' + error.eventDate, 'Fechar', {
          duration: 40000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      }
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
