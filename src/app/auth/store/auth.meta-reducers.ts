import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../store'; // Adjust path if needed
import { TokenStorageService } from '../../core/services/token-storage.service';

const STORAGE_KEY = 'appState';

export function localStorageMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  const tokenStorage = new TokenStorageService();
  
  return function (state, action) {
    // Get the next state
    const nextState = reducer(state, action);

    // Only save auth state
    if (nextState.auth) {
      const hasTokens = tokenStorage.getAccessToken() && tokenStorage.getRefreshToken();
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        auth: {
          isLoggedIn: hasTokens && nextState.auth.isLoggedIn,
          accessTokenStatus: hasTokens ? nextState.auth.accessTokenStatus : 'INVALID',
          refreshTokenStatus: hasTokens ? nextState.auth.refreshTokenStatus : 'INVALID'
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
              accessTokenStatus: hasTokens ? parsed.auth.accessTokenStatus : 'INVALID',
              refreshTokenStatus: hasTokens ? parsed.auth.refreshTokenStatus : 'INVALID'
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
