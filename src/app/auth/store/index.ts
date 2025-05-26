import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { provideState, Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { filter, take } from 'rxjs/operators';


import { RefreshTokenActions } from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { AuthStateModel, TokenStatus } from '../models';
import { AUTH_FEATURE_KEY, authReducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';
import { provideEffects } from '@ngrx/effects';
import { AUTH_FACADE } from '../tokens';
import { AuthFacade } from './auth.facade';

export { AuthEffects } from './auth.effects';
export * from './auth.reducer';

export interface AppState {
  [AUTH_FEATURE_KEY]: AuthStateModel;
}


const initializeAuth = () => {
  const store = inject<Store<AuthStateModel>>(Store);

  store.dispatch(RefreshTokenActions.request());

  const authState$ = store.select(AuthSelectors.selectAuth).pipe(
    filter(
      auth =>
        auth.refreshTokenStatus === TokenStatus.INVALID ||
        (auth.refreshTokenStatus === TokenStatus.VALID && !!auth.user)
    ),
    take(1)
  );

  return lastValueFrom(authState$);
};

export const provideAuthInit = (): EnvironmentProviders => {
  return provideAppInitializer(initializeAuth);
};

export function provideAuthStore(): EnvironmentProviders {
  return makeEnvironmentProviders([
    // Register Auth Store
    provideState(AUTH_FEATURE_KEY, authReducer),
    provideEffects(AuthEffects),
    provideAuthInit(),
    // Register Auth Facade
    {
      provide: AUTH_FACADE,
      useClass: AuthFacade,
    },
  ]);
}
