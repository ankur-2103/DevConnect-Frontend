import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AuthFacade } from '../auth/store/auth.facade';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule {
  constructor(private _authFacade: AuthFacade) {
    // this._authFacade.checkLogin();
  }
 }
