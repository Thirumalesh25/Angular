import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './app.html', 
})
export class App {
  users: Observable<any[]>;  

  constructor(private http: HttpClient) {
    this.users = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
