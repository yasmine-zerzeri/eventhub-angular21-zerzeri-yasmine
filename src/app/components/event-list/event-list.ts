import { Component, computed, signal } from '@angular/core';
import { EventCard } from '../event-card/event-card';
import { EVENTS } from '../../data/events';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  events = signal<EventItem[]>(EVENTS);
  categories = ['Tous', 'Atelier', 'Conférence', 'Sport'];
  selectedCategory = signal('Tous');
  favorites = signal<number[]>([]);               // ids des favoris

  favoritesCount = computed(() => this.favorites().length);

  filteredEvents = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'Tous'
      ? this.events()
      : this.events().filter(e => e.category === cat);
  });

  isFavorite(id: number) {
    return this.favorites().includes(id);
  }

  toggleFavorite(id: number) {
    this.favorites.update(list =>
      list.includes(id) ? list.filter(x => x !== id) : [...list, id]
    );
  }
}
