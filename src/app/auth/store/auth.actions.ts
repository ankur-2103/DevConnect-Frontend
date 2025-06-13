import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { AuthUser } from '../models';

// Login
export const LoginActions = createActionGroup({
  source: 'Auth: Login',
  events: {
    login: props<{ usernameOrEmail: string; password: string }>(),
    register: props<{ username: string; email: string; password: string }>(),
    success: emptyProps(),
    registerSuccess: emptyProps(),
    clearIsRegister: emptyProps(),
    failure: props<{ error: string }>(),
    checkLogin: emptyProps(),
  },
});

// Logout
export const LogoutAction = createAction('[Auth] Logout');

// Auth User: me
export const AuthUserActions = createActionGroup({
  source: 'Auth: Auth User',
  events: {
    request: emptyProps(),
    success: props<{ user: AuthUser }>(),
    failure: emptyProps(),
  },
});

// Refresh token
export const RefreshTokenActions = createActionGroup({
  source: 'Auth: Refresh Token',
  events: {
    request: emptyProps(),
    success: emptyProps(),
    failure: emptyProps(),
  },
});

export const HandleErrors = createActionGroup({
  source: 'Auth: Error',
  events: {
    clear: emptyProps(),
  },
});
