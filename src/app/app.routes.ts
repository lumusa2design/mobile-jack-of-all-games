import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/identifier-page/identifier-page.component').then((m) => m.IdentifierPageComponent),
  },
  {
    path: 'game/:id',
    loadComponent: () => import('./pages/game-page/game-page.component').then((m) => m.GamePageComponent),
  },
  {
    path: 'library',
    loadComponent: () => import('./pages/library/library.component').then((m) => m.LibraryPageComponent),
  },
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
