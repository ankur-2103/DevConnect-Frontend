import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
];
