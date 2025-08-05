import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog-component/dialog-component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

interface Student {
  name: string;
  rollNo: number;
  age: number;
  department: string;
}

@Component({
  selector: 'app-root',
  standalone: true,                      // <== Important: make component standalone
  imports: [CommonModule, MatButtonModule], // import Angular modules here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  students: Student[] = [
    { name: 'Alice', rollNo: 1, age: 20, department: 'Computer Science' },
    { name: 'Bob', rollNo: 2, age: 21, department: 'Mechanical' },
    { name: 'Charlie', rollNo: 3, age: 19, department: 'Electrical' }
  ];

  constructor(private dialog: MatDialog) {}

  openStudentDialog(student: Student) {
    this.dialog.open(DialogComponent, {
      data: student
    });
  }
}
