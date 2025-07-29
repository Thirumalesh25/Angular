import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComponent } from './components/about-component/about-component';
import { ContactComponent } from './components/contact-component/contact-component';

export const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
