import { Routes } from '@angular/router';
import { About } from './Components/about/about';
import { Person } from './Components/person/person';
import { Contact } from './Components/contact/contact';

export const routes: Routes = [  
  { path: '', redirectTo: 'about', pathMatch: 'full' },  
  { path: 'about', component: About },  
  { path: 'profile', component: Person },  
  { path: 'contact', component: Contact }  
];
