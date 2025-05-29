import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AuthFacade } from '../auth/store/auth.facade';
import { UserComponent } from './user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PanelMenu } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PanelMenu,
    RouterModule
  ]
})
export class UserModule {
  constructor(private _authFacade: AuthFacade) {
    // this._authFacade.checkLogin();
  }
 }
