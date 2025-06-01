import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../store'; // Adjust path if needed
import { TokenStorageService } from '../../core/services/token-storage.service';
import { TokenStatus } from '../models';

const STORAGE_KEY = 'appState';

export function localStorageMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  const tokenStorage = new TokenStorageService();
  
  return function (state, action) {
    // Get the next state
    const nextState = reducer(state, action);

    // Save auth state and user data
    if (nextState.auth) {
      const hasTokens = tokenStorage.getAccessToken() && tokenStorage.getRefreshToken();
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        auth: {
          isLoggedIn: hasTokens && nextState.auth.isLoggedIn,
          accessTokenStatus: hasTokens ? nextState.auth.accessTokenStatus : TokenStatus.INVALID,
          refreshTokenStatus: hasTokens ? nextState.auth.refreshTokenStatus : TokenStatus.INVALID,
          user: nextState.auth.user // Store user data
        }
      }));
    }

    return nextState;
  };
}

export function hydrationMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  const tokenStorage = new TokenStorageService();
  
  return function (state, action) {
    if (action.type === '@ngrx/store/init') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const hasTokens = tokenStorage.getAccessToken() && tokenStorage.getRefreshToken();
          
          return {
            ...state,
            auth: {
              ...parsed.auth,
              isLoggedIn: hasTokens && parsed.auth.isLoggedIn,
              accessTokenStatus: hasTokens ? parsed.auth.accessTokenStatus : TokenStatus.INVALID,
              refreshTokenStatus: hasTokens ? parsed.auth.refreshTokenStatus : TokenStatus.INVALID,
              user: parsed.auth.user // Restore user data
            }
          };
        } catch {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [
  hydrationMetaReducer,
  localStorageMetaReducer
];
