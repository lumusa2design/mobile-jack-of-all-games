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
    path: 'cover',
    loadComponent: () =>
      import('./components/cover-card/cover-card.component').then((m) => m.CoverCardComponent),
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./pages/game-page/game-page.component').then((m) => m.GamePageComponent),
  },
  {
    path: 'game/:id',
    loadComponent: () => import('./pages/game-page/game-page.component').then((m) => m.GamePageComponent),
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
