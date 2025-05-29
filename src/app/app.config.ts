import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { provideStore } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthEffects, authReducer } from './auth/store';
import { AppRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { definePreset } from '@primeng/themes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { metaReducers } from './auth/store/auth.meta-reducers';

const MyPreset = definePreset(Aura, {
  // semantic: {
  //   // light: {
  //   //   primary: {
  //   //     50: '{yellow.50}',
  //   //     100: '{yellow.100}',
  //   //     200: '{yellow.200}',
  //   //     300: '{yellow.300}',
  //   //     400: '{yellow.400}',
  //   //     500: '{yellow.500}',
  //   //     600: '{yellow.600}',
  //   //     700: '{yellow.700}',
  //   //     800: '{yellow.800}',
  //   //     900: '{yellow.900}',
  //   //     950: '{yellow.950}',
  //   //   }
  //   // },
  //   // dark: {
  //   //   primary: {
  //   //     50: '{pink.50}',
  //   //     100: '{pink.100}',
  //   //     200: '{pink.200}',
  //   //     300: '{pink.300}',
  //   //     400: '{pink.400}',
  //   //     500: '{pink.500}',
  //   //     600: '{pink.600}',
  //   //     700: '{pink.700}',
  //   //     800: '{pink.800}',
  //   //     900: '{pink.900}',
  //   //     950: '{pink.950}',
  //   //   }
  //   // },
  //   colorScheme: {
  //     light: {
  //       primary: {
  //         color: '{yellow.500}',
  //         hoverColor: '{yellow.600}',
  //         activeColor: '{yellow.700}',
  //         inverseColor: '{surface.0}',
  //         hoverBorderColor: '{blue.700}',
  //       },
  //       surface: '{surface.0}',
  //       highlight: {
  //         background: '{yellow.400}',
  //         focusBackground: '{yellow.500}',
  //         color: '{gray.900}',
  //         focusColor: '{gray.900}',
  //       },
  //       formField: {
  //         color: '{yellow.500}',
  //         hoverBorderColor: '{yellow.600}',
  //       },
  //     },
  //     dark: {
  //       primary: {
  //         color: '{pink.300}',
  //         hoverColor: '{pink.200}',
  //         activeColor: '{pink.100}',
  //         inverseColor: '{surface.0}',
  //       },
  //       highlight: {
  //         background: 'rgba(250, 250, 250, 0.16)',
  //         focusBackground: 'rgba(250, 250, 250, 0.24)',
  //         color: 'rgba(255, 255, 255, 0.87)',
  //         focusColor: 'rgba(255, 255, 255, 0.87)',
  //       },
  //     },
  //   },
  // },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ auth: authReducer }, { metaReducers: metaReducers }),
    provideEffects(AuthEffects),
    provideHttpClient(),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(AppRoutes),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-theme',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
      ripple: true,
    }),
    MessageService,
  ],
};
