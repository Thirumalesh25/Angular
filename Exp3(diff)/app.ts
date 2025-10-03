import { Component, signal } from '@angular/core';
import { Home } from './Components/home/home';
import { Recruiter } from './Components/recruiter/recruiter';
import { Applicant } from './Components/applicant/applicant';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ Home, Recruiter, Applicant, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exp3');


  currentView: string = 'home';

  showApplicant() {
    this.currentView = 'applicant';
  }
  showRecruiter() {
    this.currentView = 'recruiter';
  }
  showHome() {
    this.currentView = 'home';
  }
}
