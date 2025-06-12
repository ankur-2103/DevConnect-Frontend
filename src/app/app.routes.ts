import { ApplicationConfig } from '@angular/core';
import { Routes, withInMemoryScrolling } from '@angular/router';
import { provideRouter } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      AppRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
  ]
};
