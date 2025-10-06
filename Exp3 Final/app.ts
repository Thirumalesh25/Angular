import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form } from './Components/form/form';

@Component({
  selector: 'app-root',
  imports: [Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp3');
}
