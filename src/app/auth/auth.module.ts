import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ButtonModule } from 'primeng/button';
import { InputWrapperComponent } from '../shared/input-wrapper/input-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE_KEY, authReducer } from './store';
import { AuthFacade } from './store/auth.facade';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputWrapperComponent,
    AuthRoutingModule,
    ButtonModule,
  ],
  providers:[AuthFacade]
})
export class AuthModule { }
