import { Injectable } from '@angular/core';
import { AuthFacade } from '../../auth/store/auth.facade';
import { RoleEnum } from '../../core/enums/role.enum';
import { AuthUser } from '../../auth/models';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _currentUser: AuthUser | undefined;

  constructor(private _authFacade: AuthFacade) {
    this._authFacade.authUser$.subscribe((user: AuthUser | undefined) => {
      this._currentUser = user;
    });
  }

  get isUser(): boolean {
    return this._currentUser?.roles.includes(RoleEnum.user.enum) || false;
  }

  get isModerator(): boolean {
    return this._currentUser?.roles.includes(RoleEnum.moderator.enum) || false;
  }

  get isAdmin(): boolean {
    return this._currentUser?.roles.includes(RoleEnum.admin.enum) || false;
  }

  get currentUser(): AuthUser | undefined {
    return this._currentUser;
  }

  getHighestRole(): string {
    if (!this._currentUser?.roles || this._currentUser.roles.length === 0) {
      return RoleEnum.user.name;
    }

    if (this._currentUser.roles.includes(RoleEnum.admin.enum)) {
      return RoleEnum.admin.name;
    }

    if (this._currentUser.roles.includes(RoleEnum.moderator.enum)) {
      return RoleEnum.moderator.name;
    }

    return RoleEnum.user.name;
  }

  getHighestRoleFromRoles(roles: number[]): number {
    if (!roles || roles.length === 0) {
      return RoleEnum.user.enum;
    }

    if (roles.includes(RoleEnum.admin.enum)) {
      return RoleEnum.admin.enum;
    }

    if (roles.includes(RoleEnum.moderator.enum)) {
      return RoleEnum.moderator.enum;
    }

    return RoleEnum.user.enum;
  }
}
