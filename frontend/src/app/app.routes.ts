import { Routes } from '@angular/router';
import { EventList } from './features/events/components/event-list/event-list';
import { EventCreateModal } from './features/events/components/event-create-modal/event-create-modal';
import { EventDetailModal } from './features/events/components/event-detail-modal/event-detail-modal';
import {EventEditModal} from './features/events/components/event-edit-modal/event-edit-modal';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'events/new', component: EventCreateModal },
  { path: 'events/:id/edit', component: EventEditModal },
  { path: 'events/:id', component: EventDetailModal },
];
