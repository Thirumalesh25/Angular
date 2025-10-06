import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Body } from './Components/body/body';
import { Footer } from './Components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp2');
}
