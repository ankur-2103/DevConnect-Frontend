import { Component, EventEmitter, Output } from '@angular/core';
import { AuthFacade } from '../../../auth/store/auth.facade';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuClick = new EventEmitter<void>();

  constructor(private _authFacade: AuthFacade) {}

  onLogout() {
    this._authFacade.logout();
  }

  onMenuClick() {
    this.menuClick.emit();
  }
}
