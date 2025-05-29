import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NoAuthGuard } from './guards';

export const route = {
  login: { path: 'login', url: '/auth/login' },
  register: { path: 'register', url: '/auth/register' },
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
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
