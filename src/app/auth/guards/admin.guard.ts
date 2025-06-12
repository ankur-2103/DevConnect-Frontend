import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthFacade } from '../store/auth.facade';
import { RoleEnum } from '../../core/enums/role.enum';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private _authFacade: AuthFacade,
    private _router: Router
  ) {}

  canActivate() {
    return this._authFacade.authUser$.pipe(
      take(1),
      map(user => {
        if (user && user.roles.includes(RoleEnum.admin.enum)) {
          return true;
        }
        
        // Redirect to home if not admin
        this._router.navigate(['/']);
        return false;
      })
    );
  }
} 