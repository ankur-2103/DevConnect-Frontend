import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AUTH_FEATURE_KEY } from './auth.reducer';
import { AuthStateModel } from '../models';

export const selectAuth =
  createFeatureSelector<AuthStateModel>(AUTH_FEATURE_KEY);

export const selectIsLoggedIn = createSelector(
  selectAuth,
  (state) => state.isLoggedIn
);

export const selectLoginError = createSelector(
  selectAuth,
  (state) => state.hasLoginError
);

export const selectErrorMessage = createSelector(
  selectAuth,
  (state) => state.errorMessage
);

export const selectIsLoadingLogin = createSelector(
  selectAuth,
  (state) => state.isLoadingLogin
);

export const selectAuthUser = createSelector(selectAuth, (state) => state.user);
