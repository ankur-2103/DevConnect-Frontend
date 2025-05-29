import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogoutAction, LoginActions, AuthUserActions } from './auth.actions';
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
  readonly hasLoginError$ = this.store.select(AuthSelectors.selectLoginError);

  checkLogin() {
    this.store.dispatch(LoginActions.checkLogin());
  }

  login(username: string, password: string) {
    this.store
      .select((state) => state.auth)
      .subscribe((authState) => {
        console.log('Auth State:', authState);
      });
    console.log('Login action dispatched:', username, password);
    this.store.dispatch(LoginActions.login({ username, password }));
  }

  register(username: string, email: string, password: string) {
    this.store
      .select((state) => state.auth)
      .subscribe((authState) => {
        console.log('Auth State:', authState);
      });
    console.log('Login action dispatched:', username, password);
    this.store.dispatch(LoginActions.register({ username, email, password }));
  }

  logout() {
    this.store.dispatch(LogoutAction());
  }

  getAuthUser() {
    this.store.dispatch(AuthUserActions.request());
  }
}
