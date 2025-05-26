import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { provideStore } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthEffects, authReducer } from './auth/store';
import { AppRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ auth: authReducer }),
    provideEffects(AuthEffects),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(AppRoutes),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-theme',
        },
      },
      ripple: true,
    }),
  ],
};
