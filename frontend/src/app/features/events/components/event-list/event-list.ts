import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { EventService } from '../../../../core/services/event';
import type { EventModel } from '../../../../core/services/event';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.scss'
})
export class EventList {
  events: EventModel[] = [];

  constructor(private eventService: EventService) {
    this.eventService.list().subscribe((data) => {
      console.log('Eventos retornados:', data.content);
      this.events = data.content;
    });
  }
}
