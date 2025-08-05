import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Student {
  id: number;
  name: string;
  department: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
 
})
export class App {
  students: Student[] = [];
  currentStudent: Student = this.getEmptyStudent();

  getEmptyStudent(): Student {
    return { id: 0, name: '',  department: '' };
  }

  addOrUpdateStudent() {
    if (this.currentStudent.id) {
      const index = this.students.findIndex((s) => s.id === this.currentStudent.id);
      if (index > -1) {
        this.students[index] = { ...this.currentStudent };
      }
    } else {
      this.currentStudent.id = Date.now();
      this.students.push({ ...this.currentStudent });
    }
    this.resetForm();
  }

  editStudent(student: Student) {
    this.currentStudent = { ...student };
  }

  deleteStudent(id: number) {
    this.students = this.students.filter((s) => s.id !== id);
    if (this.currentStudent.id === id) {
      this.resetForm();
    }
  }

  resetForm() {
    this.currentStudent = this.getEmptyStudent();
  }
}
