import { Routes } from '@angular/router';
import { EventList } from './features/events/components/event-list/event-list';
import { EventForm } from './features/events/components/event-form/event-form';
import { EventDetail } from './features/events/components/event-detail/event-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'events/new', component: EventForm },
  { path: 'events/:id/edit', component: EventForm },
  { path: 'events/:id', component: EventDetail },
];
