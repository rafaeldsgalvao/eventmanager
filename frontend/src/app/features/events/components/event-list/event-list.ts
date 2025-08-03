import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import { EventService } from '../../../../core/services/event';
import type { EventModel } from '../../../../core/services/event';
import {MatCardModule} from '@angular/material/card';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {RouterLink} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {EventDetailModal} from '../event-detail-modal/event-detail-modal';
import {EventEditModal} from '../event-edit-modal/event-edit-modal';

@Component({
  selector: 'app-event-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    MatDialogModule
  ],
  templateUrl: './event-list.html',
  styleUrl: './event-list.scss'
})
export class EventList {
  displayedColumns: string[] = ['title', 'location', 'eventDate', 'actions'];
  dataSource = new MatTableDataSource<EventModel>();
  events: EventModel[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private eventService: EventService,
    private dialog: MatDialog
  ) {
    this.eventService.list().subscribe((data) => {
      this.events = data.content;
      this.dataSource = new MatTableDataSource(this.events);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDetails(event: EventModel) {
    this.dialog.open(EventDetailModal, {
      data: event,
      width: '360px',
    });
  }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.list().subscribe((data) => {
      this.events = data.content;
      this.dataSource = new MatTableDataSource(this.events);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editEvent(event: EventModel) {
    const dialogRef = this.dialog.open(EventEditModal, {
      width: '90vw',
      maxWidth: '745px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventService.update(result.id, result).subscribe(() => {
          this.ngOnInit?.();
        });
      }
    });
  }
}
