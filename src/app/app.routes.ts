import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'identify',
    loadComponent: () => import('./pages/identifier-page/identifier-page.component').then((m) => m.IdentifierPageComponent),
  },
  {
    path: '',
    redirectTo: 'identify',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'identify',
  }
];
