import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthGuard } from '../auth/guards';
import { AUTH_FACADE } from '../auth/tokens';
import { AuthFacade } from '../auth/store/auth.facade';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [
    AuthGuard,
    {
      provide: AUTH_FACADE,
      useClass: AuthFacade
    }
  ]
})
export class CoreModule { }
