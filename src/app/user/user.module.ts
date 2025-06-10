import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AuthFacade } from '../auth/store/auth.facade';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelMenu } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './pages/search/search.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ProfileUpdateComponent } from './pages/profile/components/profile-update/profile-update.component';
import { DialogModule } from 'primeng/dialog';
import { InputWrapperComponent } from '../shared/input-wrapper/input-wrapper.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { PostHandlerComponent } from './post/post-handler/post-handler.component';
import { EditorModule } from 'primeng/editor';
import { PostCardComponent } from './post/post-card/post-card.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InfiniteScrollComponent } from '../shared/infinite-scroll/infinite-scroll.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DrawerModule } from 'primeng/drawer';
import { CommentsComponent } from './post/comments/comments.component';
import { TimeAgoPipe } from '../shared/pipes/time-ago.pipe';
import { ScrollerModule } from 'primeng/scroller';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { ImageModule } from 'primeng/image';
import { RippleModule } from 'primeng/ripple';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    FeedComponent,
    SearchComponent,
    ProfileUpdateComponent,
    PostHandlerComponent,
    PostCardComponent,
    PostViewComponent,
    CommentsComponent,
    AdminDashboardComponent,
  ],
  imports: [
    ImageCropperComponent,
    CommonModule,
    UserRoutingModule,
    PanelMenu,
    RouterModule,
    AvatarModule,
    AvatarGroupModule,
    ChipModule,
    ButtonModule,
    DialogModule,
    InputWrapperComponent,
    InputTextModule,
    ReactiveFormsModule,
    EditorModule,
    SkeletonModule,
    ProgressSpinnerModule,
    InfiniteScrollComponent,
    IconFieldModule,
    InputIconModule,
    DrawerModule,
    TimeAgoPipe,
    ScrollerModule,
    FileUploadModule,
    ImageModule,
    RippleModule
  ],
})
export class UserModule {
  constructor(private _authFacade: AuthFacade) {
    // this._authFacade.checkLogin();
  }
}
