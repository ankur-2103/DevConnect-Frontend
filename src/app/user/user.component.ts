import { Component } from '@angular/core';
import { AuthFacade } from '../auth/store/auth.facade';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  showProfileUpdate: boolean = false;
  isProfileUpdateClosable: boolean = true;
  sidebarVisible: boolean = false;

  constructor(private _authFacade: AuthFacade, private _store: Store) {
    this._authFacade.authUser$.subscribe((state) => {
      if (state && (!state.name || state.name.trim() === '')) {
        this.showProfileUpdate = true;
        this.isProfileUpdateClosable = false;
      }
    });
  }

  onProfileUpdateComplete() {
    this.showProfileUpdate = false;
    this.isProfileUpdateClosable = true;
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
