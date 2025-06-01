import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { route } from '../../user-routing.module';
import { AuthUser } from '../../../auth/models';
import { AuthFacade } from '../../../auth/store/auth.facade';
import { RoleEnum } from '../../../core/enums/role.enum';

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
      label: 'Feed',
      icon: 'pi pi-home',
      routerLink: route.feed.url,
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      routerLink: route.search.url,
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Account',
      icon: 'pi pi-user',
      routerLink: route.profile.url,
      routerLinkActiveOptions: { exact: true },
    },
  ];

  constructor(private _authFacade: AuthFacade) {}

  ngOnInit() {
    this._authFacade.authUser$.subscribe(user => {
      this.user = user;
    });
  }

  get formattedRoles(): string {
    if (!this.user?.roles?.length) return 'User';
    return this.user.roles
      .map(role => Object.values(RoleEnum).find(r => r.enum === role)?.name || role)
      .join(', ');
  }

  toggle(item: MenuItem) {
    if (item.items?.length) {
      item.expanded = !item.expanded;
    }
  }

  get menuItems(): MenuItem[] {
    return [
      {
        label: 'Feed',
        icon: 'pi pi-home',
        routerLink: [route.feed.url],
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        routerLink: [route.profile.url],
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        routerLink: [route.search.url],
      },
    ];
  }
}
