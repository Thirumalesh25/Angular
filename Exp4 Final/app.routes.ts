import { Routes } from '@angular/router';
import { Destinations } from './Components/destinations/destinations';
import { Bookings } from './Components/bookings/bookings';
import { Home } from './Components/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'destinations', component: Destinations},
    {path: 'bookings', component: Bookings}
];
