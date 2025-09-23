import { Routes } from '@angular/router';
import { AboutComponent } from './Components/about-component/about-component';
import { PersonComponent } from './Components/person-component/person-component';
import { ContactComponent } from './Components/contact-component/contact-component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'profile', component: PersonComponent },
    {path : 'contact', component: ContactComponent},
];
