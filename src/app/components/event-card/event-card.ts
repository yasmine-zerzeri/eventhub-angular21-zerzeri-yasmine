import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe, RouterLink],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<EventItem>();   // reçu du parent
  isFavorite = input(false);             // reçu du parent
  toggle = output<void>();               // prévient le parent d'un clic
}
