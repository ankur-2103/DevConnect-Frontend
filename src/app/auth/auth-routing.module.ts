import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NoAuthGuard } from './guards';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

export const route = {
  login: { path: 'login', url: '/auth/login' },
  register: { path: 'register', url: '/auth/register' },
  forgotPassword: { path: 'forgot-password', url: '/auth/forgot-password' },
  resetPassword: { path: 'reset-password', url: '/auth/reset-password' },
};

const routes: Routes = [
  {
    path: route.login.path,
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: route.register.path,
    component: RegisterComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: route.forgotPassword.path,
    component: ForgetPasswordComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: route.resetPassword.path,
    component: ResetPasswordComponent,
    canActivate: [NoAuthGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
