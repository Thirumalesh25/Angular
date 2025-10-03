import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-applicant',
  imports: [CommonModule, FormsModule],
  templateUrl: './applicant.html',
  styleUrl: './applicant.css'
})
export class Applicant {
  @Output() goBack = new EventEmitter<void>();
  submitted = false;

  fullName = '';
  position = '';
  contact = '';

  register() {
    this.submitted = true;
  }
}
