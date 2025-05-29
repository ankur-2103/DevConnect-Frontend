import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  items: MenuItem[] = [
    {
      label: 'Feed',
      icon: 'pi pi-home',
      routerLink: '/',
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Feed',
          icon: 'pi pi-home',
          routerLink: '/',
          routerLinkActiveOptions: { exact: true },
        },
      ],
    },
    {
      label: 'Account',
      icon: 'pi pi-user',
    },
  ];

  

  toggle(item: MenuItem) {
    if (item.items?.length) {
      item.expanded = !item.expanded;
    }
  }
}
