import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  LogoutAction,
  LoginActions,
  AuthUserActions,
  HandleErrors,
} from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { IAuthFacade } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthFacade implements IAuthFacade {
  private readonly store = inject(Store);

  readonly authUser$ = this.store.select(AuthSelectors.selectAuthUser);
  readonly isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
  readonly errorMessage$ = this.store.select(AuthSelectors.selectErrorMessage);
  readonly isLoadingLogin$ = this.store.select(
    AuthSelectors.selectIsLoadingLogin
  );
  readonly isRegistered$ = this.store.select(AuthSelectors.selectIsRegistered);
  readonly hasLoginError$ = this.store.select(AuthSelectors.selectLoginError);

  login(usernameOrEmail: string, password: string) {
    this.store.select((state) => state.auth).subscribe((authState) => {});
    this.store.dispatch(LoginActions.login({ usernameOrEmail, password }));
  }

  register(username: string, email: string, password: string) {
    this.store.select((state) => state.auth).subscribe((authState) => {});
    this.store.dispatch(LoginActions.register({ username, email, password }));
  }

  logout() {
    this.store.dispatch(LogoutAction());
  }

  getAuthUser() {
    this.store.dispatch(AuthUserActions.request());
  }

  clearError() {
    this.store.dispatch(HandleErrors.clear());
  }

  clearIsRegistered() {
    this.store.dispatch(LoginActions.clearIsRegister());
  }
}
