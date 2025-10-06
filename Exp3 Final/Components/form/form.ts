import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  title = 'User Registration Form';

  user = {
    fname: '',
    lname: '',
    email: '',
    password: ''
  };

  submitted = false;

  users: any[] = [];

  submit() {
    if (this.user.fname && this.user.email) {
      this.users.push({ ...this.user });
      this.submitted = true;
      alert('Form Submitted!');
      this.user = { fname: '', lname: '', email: '', password: '' };
    }
  }
}
