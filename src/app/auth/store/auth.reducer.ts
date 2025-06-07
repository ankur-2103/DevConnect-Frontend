import { Action, createReducer, on } from '@ngrx/store';
import {
  AuthUserActions,
  HandleErrors,
  LoginActions,
  LogoutAction,
  RefreshTokenActions,
} from './auth.actions';
import { AuthStateModel, TokenStatus } from '../models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthStateModel;
}

export const initialState: AuthStateModel = {
  isLoggedIn: false,
  user: undefined,
  accessTokenStatus: TokenStatus.PENDING,
  refreshTokenStatus: TokenStatus.PENDING,
  isLoadingLogin: false,
  hasLoginError: false,
  errorMessage: '',
};

export const authReducer = createReducer(
  initialState,

  // Login
  on(
    LoginActions.login,
    (state): AuthStateModel => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
      errorMessage: '',
    })
  ),

  // Register
  on(
    LoginActions.register,
    (state): AuthStateModel => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
      errorMessage: '',
    })
  ),

  //clear error
  on(
    HandleErrors.clear,
    (state, action): AuthStateModel => ({
      ...state,
      hasLoginError: false,
      errorMessage: '',
    })
  ),

  // Refresh token
  on(
    RefreshTokenActions.request,
    (state): AuthStateModel => ({
      ...state,
      refreshTokenStatus: TokenStatus.VALIDATING,
    })
  ),

  // Login & Refresh token
  on(
    LoginActions.success,
    RefreshTokenActions.success,
    (state): AuthStateModel => ({
      ...state,
      isLoggedIn: true,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.VALID,
      refreshTokenStatus: TokenStatus.VALID,
    })
  ),

  on(
    LoginActions.failure,
    RefreshTokenActions.failure,
    (state, action): AuthStateModel => ({
      ...state,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.INVALID,
      refreshTokenStatus: TokenStatus.INVALID,
      hasLoginError:
        action.type === LoginActions.failure.type && !!(action as any).error,
      errorMessage:
        action.type === LoginActions.failure.type
          ? (action as any).error?.error?.message || "Something wen't wrong"
          : "Something wen't wrong",
    })
  ),

  // Logout
  on(
    LogoutAction,
    (): AuthStateModel => ({
      ...initialState,
    })
  ),

  // Auth user
  on(
    AuthUserActions.success,
    (state, action): AuthStateModel => ({
      ...state,
      user: action.user,
    })
  ),

  on(
    AuthUserActions.failure,
    (): AuthStateModel => ({
      ...initialState,
    })
  )
);
