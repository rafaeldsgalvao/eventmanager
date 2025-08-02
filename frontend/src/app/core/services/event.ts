import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface EventModel {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  location: string;
}

export interface CreateEventDTO extends Omit<EventModel, 'id'> {}
export interface UpdateEventDTO extends Omit<EventModel, 'id'> {}

@Injectable({
  providedIn: 'root',
})

export class EventService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api/events';

  list(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateEventDTO): Observable<EventModel> {
    return this.http.post<EventModel>(this.baseUrl, dto);
  }

  update(id: number, dto: UpdateEventDTO): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
