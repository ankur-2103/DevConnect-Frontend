import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './pages/search/search.component';

export const route = {
  profile: { path: 'profile', url: 'profile' },
  profileById: { path: 'profile/:id', url: 'profile' },
  feed: { path: 'feed', url: 'feed' },
  search: { path: 'search', url: 'search' },
};

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: route.feed.path,
        component: FeedComponent
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
