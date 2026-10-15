import { EventItem } from '../models/event.model';

export const EVENTS: EventItem[] = [
  { id: 1, title: 'Atelier TypeScript', category: 'Atelier', date: '2026-11-15', place: 'Campus', price: 0,
    imageUrl: 'https://picsum.photos/seed/ts/400/250', description: 'Découverte de TypeScript' },
  { id: 2, title: 'Conférence IA', category: 'Conférence', date: '2026-11-20', place: 'Amphi A', price: 15,
    imageUrl: 'https://picsum.photos/seed/ia/400/250', description: "L'IA dans la vie étudiante" },
  { id: 3, title: 'Tournoi de foot', category: 'Sport', date: '2026-12-01', place: 'Stade', price: 5,
    imageUrl: 'https://picsum.photos/seed/foot/400/250', description: 'Tournoi inter-classes' },
  { id: 4, title: 'Atelier Angular', category: 'Atelier', date: '2026-12-05', place: 'Salle 12', price: 10,
    imageUrl: 'https://picsum.photos/seed/ng/400/250', description: 'Créer une app avec Angular 21' },
  { id: 5, title: 'Conférence Cybersécurité', category: 'Conférence', date: '2026-12-10', place: 'Amphi B', price: 0,
    imageUrl: 'https://picsum.photos/seed/cyber/400/250', description: 'Bonnes pratiques de sécurité' },
  { id: 6, title: 'Course solidaire', category: 'Sport', date: '2026-12-20', place: 'Parc', price: 8,
    imageUrl: 'https://picsum.photos/seed/run/400/250', description: 'Course au profit des associations' },
];
