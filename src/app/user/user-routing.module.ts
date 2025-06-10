import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './pages/search/search.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from '../auth/guards';

export const route = {
  profile: { path: 'profile', url: 'profile' },
  profileById: { path: 'profile/:id', url: 'profile' },
  feed: { path: 'feed', url: 'feed' },
  search: { path: 'search', url: 'search' },
  admin: { path: 'admin', url: 'admin' },
};

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: route.feed.path,
        component: FeedComponent,
      },
      {
        path: route.profile.path,
        component: ProfileComponent,
      },
      {
        path: route.profileById.path,
        component: ProfileComponent,
      },
      {
        path: route.search.path,
        component: SearchComponent,
      },
      {
        path: route.admin.path,
        component: AdminDashboardComponent,
        canActivate: [AdminGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
