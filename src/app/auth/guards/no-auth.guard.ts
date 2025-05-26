import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthFacade } from '../store/auth.facade'; // Adjust path as needed

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private authFacade: AuthFacade, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.authFacade.isLoggedIn$.pipe(
      // take(1),
      map((isLoggedIn) => {
        return !isLoggedIn ? true : this.router.createUrlTree(['/']); // Redirect if logged in
      })
    );
  }
}
