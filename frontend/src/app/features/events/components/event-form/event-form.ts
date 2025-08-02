import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {CreateEventDTO, EventService} from "../../../../core/services/event";


@Component({
  selector: 'app-event-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-form.html',
  styleUrl: './event-form.scss'
})
export class EventForm {

  private fb = inject(FormBuilder);
  private service = inject(EventService);
  private router = inject(Router);

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    eventDate: ['', Validators.required],
    location: ['', Validators.required],
  });

  submit() {
    if (this.form.invalid) return;

    const dto: CreateEventDTO = this.form.value as CreateEventDTO;
    this.service.create(dto).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
