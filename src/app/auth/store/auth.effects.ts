import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';

import {
  AuthUserActions,
  LoginActions,
  LogoutAction,
  RefreshTokenActions,
} from './auth.actions';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../../core/services';
import { MessageService } from 'primeng/api';

@Injectable()
export class AuthEffects {
  private readonly router = inject(Router);
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly tokenStorageService = inject(TokenStorageService);
  private readonly messageService = inject(MessageService);

  readonly checkLoggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.checkLogin), // Triggered action
      map(() => {
        const token = this.tokenStorageService.getAccessToken();
        if (token) {
          return LoginActions.success();
        } else {
          return LoginActions.failure({ error: 'No token found' });
        }
      })
    )
  );

  readonly login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((credentials) => {
        return this.authService
          .login(credentials.username, credentials.password)
          .pipe(
            map((data) => {
              // Save tokens
              this.tokenStorageService.saveTokens(
                data.accessToken,
                data.accessToken
              );
              // Trigger login success action
              return LoginActions.success();
            }),
            catchError((error) => of(LoginActions.failure({ error })))
          );
      })
    )
  );

  readonly register$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.register),
        exhaustMap((credentials) => {
          console.log('Effect triggered with credentials:', credentials);
          return this.authService
            .register(
              credentials.username,
              credentials.email,
              credentials.password
            )
            .pipe(
              map((data) => {
                // Save tokens
                // Trigger login success action
                return LoginActions.success();
              }),
              catchError((error) => {
                this.messageService.add({
                  severity: 'error  ',
                  summary: 'Success',
                  detail: 'Message Content',
                  life: 4000,
                });
                return of(LoginActions.failure({ error }));
              })
            );
        })
      ),
    { dispatch: true }
  );

  readonly onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.success),
      map(() => {
        // redirect to return url or home
        this.router.navigateByUrl(
          this.activatedRoute.snapshot.queryParams['returnUrl'] || '/user/feed'
        );
        return AuthUserActions.request();
      })
    );
  });

  readonly logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LogoutAction),
        exhaustMap(() => {
          this.router.navigateByUrl('/auth/login');
          return of(null);
        })
      );
    },
    { dispatch: false }
  );

  readonly getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RefreshTokenActions.success, AuthUserActions.request),
      exhaustMap(() =>
        this.authService.getAuthUser().pipe(
          map((user) => AuthUserActions.success({ user })),
          catchError(() => of(AuthUserActions.failure()))
        )
      )
    );
  });

  readonly refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RefreshTokenActions.request),
      exhaustMap(() =>
        this.authService.refreshToken().pipe(
          map((data) => {
            // save tokens
            this.tokenStorageService.saveTokens(
              data.accessToken,
              data.refresh_token
            );
            // trigger refresh token success action
            return RefreshTokenActions.success();
          }),
          catchError(() => of(RefreshTokenActions.failure()))
        )
      )
    );
  });

  readonly onLoginOrRefreshTokenFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginActions.failure, RefreshTokenActions.failure),
        tap(() => this.tokenStorageService.removeTokens())
      );
    },
    { dispatch: false }
  );
}
