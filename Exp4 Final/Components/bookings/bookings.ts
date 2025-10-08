import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  imports: [FormsModule],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css'
})
export class Bookings {
  dest="";
  count=0;
  name="";

  res="";
  submit(){
    this.res = "Thank You "+this.name+" your trip for "+this.count+" has been booked";
  }
}
