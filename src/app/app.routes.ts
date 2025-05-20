import { Routes } from '@angular/router';
import { CoverCardComponent } from './components/cover-card/cover-card.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
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
    path: 'library',
    loadComponent: () => import('./pages/library/library.component').then((m) => m.LibraryPageComponent),
  },
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full',
  },
];

