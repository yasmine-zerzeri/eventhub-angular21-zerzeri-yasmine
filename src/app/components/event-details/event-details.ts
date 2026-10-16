import { Component, computed, input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EVENTS } from '../../data/events';

@Component({
  selector: 'app-event-details',
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  id = input.required<string>();            // reçu depuis l'URL /events/:id
  event = computed(() =>                    // cherche l'événement correspondant
    EVENTS.find(e => e.id === Number(this.id()))
  );
}
