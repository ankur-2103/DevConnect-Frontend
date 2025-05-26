import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Inject } from '@angular/core';

import { AUTH_FACADE } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AUTH_FACADE) private authFacade: any,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authFacade.isLoggedIn$.pipe(
      take(1),
      map(isLoggedIn =>
        isLoggedIn
          ? true
          : this.router.createUrlTree(['/auth/login'], {
              queryParams: { returnUrl: state.url },
            })
      )
    );
  }
}
