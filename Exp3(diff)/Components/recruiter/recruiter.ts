import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recruiter',
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter.html',
  styleUrl: './recruiter.css'
})
export class Recruiter {
 @Output() goBack = new EventEmitter<void>();
  submitted = false;

  jobTitle = '';
  department = '';
  location = '';

  postJob() {
    this.submitted = true;
  }
}
