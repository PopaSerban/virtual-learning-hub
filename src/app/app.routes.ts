import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./landing-page/landingPage.router').then(m => m.route),
    }
];
