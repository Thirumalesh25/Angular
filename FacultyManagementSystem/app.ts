import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  teachers = [
    { name: 'Dr.N.Kasiviswanath', dep: 'CSE', gender: 'Male' },
    { name: 'Smt.D.L.N.Prasunna', dep: 'CSE', gender: 'Female' },
    { name: 'Smt.T.Chandana', dep: 'ECS', gender: 'Female' },
    { name: 'Dr.R.Praveen Sam', dep: 'ECS', gender: 'Male' },
    { name: 'Smt. Srilakshmi', dep: 'CSE', gender: 'Female' }
  ];

  selectedDep = '';
  selectedGen = '';

 get filteredFaculty() {
  return this.teachers.filter(f =>(this.selectedDep ? f.dep === this.selectedDep : true) &&
 (this.selectedGen ? f.gender === this.selectedGen : true) );
 }
}
