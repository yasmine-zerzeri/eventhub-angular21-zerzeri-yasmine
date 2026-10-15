import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  imports: [DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<EventItem>();   // received from the parent
  isFavorite = input(false);             // received from the parent
  toggle = output<void>();               // tells the parent "button clicked"
}
