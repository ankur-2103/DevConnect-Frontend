import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../store'; // Adjust path if needed

const STORAGE_KEY = 'appState';

export function localStorageMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state, action) {
    const nextState = reducer(state, action);

    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      auth: nextState.auth
    }));

    return nextState;
  };
}

export function getInitialState(): Partial<AppState> {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}

export const metaReducers: MetaReducer<AppState>[] = [localStorageMetaReducer];
