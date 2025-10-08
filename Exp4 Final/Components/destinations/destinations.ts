import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  imports: [],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css'
})
export class Destinations {
  places = [
    { name: 'Delhi', detail: 'Capital City' },
    { name: 'Kerala', detail: 'Known for its backwaters and culture' },
    { name: 'Karnataka', detail: 'Famous for its classical dance and heritage' },
    { name: 'Gujarat', detail: 'Popular for its traditions and fashion' }
  ];

  a = '';
  showDetails(place: string){
    const pl = this.places.find( p => p.name === place);
    this.a = pl? pl.detail: "";
  }
}
