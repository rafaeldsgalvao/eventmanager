import {Component, Inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {EventModel} from '../../../../core/services/event';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-event-detail-modal',
  imports: [CommonModule, MatDialogModule, MatCardModule, MatButton],
  templateUrl: './event-detail-modal.html',
  styleUrl: './event-detail-modal.scss'
})
export class EventDetailModal {
  constructor(@Inject(MAT_DIALOG_DATA) public event: EventModel) {}
}
