import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { EventList } from './components/event-list/event-list';

@Component({
  selector: 'app-root',
  imports: [Header, EventList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
