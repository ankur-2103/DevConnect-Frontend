import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { route } from '../../user-routing.module';
import { AuthUser } from '../../../auth/models';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { RoleEnum } from '../../../core/enums/role.enum';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() visible: boolean = false;
  route = route;
  user: AuthUser | undefined;
  items: MenuItem[] = [
    {
      label: 'Admin',
      icon: 'pi pi-cog',
      routerLink: route.admin.url,
      routerLinkActiveOptions: { exact: true },
      visible: false
    },
    {
      label: 'Feed',
      icon: 'pi pi-home',
      routerLink: route.feed.url,
      routerLinkActiveOptions: { exact: true },
      visible: true
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      routerLink: route.search.url,
      routerLinkActiveOptions: { exact: true },
      visible: true
    },
    {
      label: 'Account',
      icon: 'pi pi-user',
      routerLink: route.profile.url,
      routerLinkActiveOptions: { exact: true },
      visible: true
    },
    
  ];

  constructor(private _authFacade: AuthFacade, private _commonService: CommonService) {}

  ngOnInit() {
    this._authFacade.authUser$.subscribe(user => {
      this.user = user;
      this.updateMenuVisibility();
    });
  }

  private updateMenuVisibility() {
    if (!this.user) return;

    // Update visibility based on user roles
    this.items.forEach(item => {
      if (item.label === 'Admin') {
        item.visible = this._commonService.isAdmin;
      }
    });
  }

  get formattedRoles(): string {
    return this._commonService.getHighestRole();
  }

  toggle(item: MenuItem) {
    if (item.items?.length) {
      item.expanded = !item.expanded;
    }
  }
}
