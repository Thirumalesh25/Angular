import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Student Filter Example';

  students = ['thiru', 'ram', 'sam', 'vini'];

  details = [
    { roll: 1, name: 'Thiru', age: 12, marks: 91 },
    { roll: 2, name: 'ABC', age: 13, marks: 86 },
    { roll: 3, name: 'Bhaskar', age: 12, marks: 98 },
    { roll: 4, name: 'Riyaz', age: 13, marks: 99 },
    { roll: 5, name: 'Sam', age: 11, marks: 78 },
    { roll: 6, name: 'Sheela', age: 22, marks: 79 },
  ];

  selectedMarks = 'all';

  getFilteredStudents() {
    switch(this.selectedMarks){
      case '90': return this.details.filter(ob => ob.marks>=90);
      case '80' : return this.details.filter(ob => ob.marks>=80 && ob.marks<90);
      case '70' : return this.details.filter(ob => ob.marks>=70 && ob.marks<80);
      default : return this.details.filter(ob => ob.marks>0);
    }
  }

}
