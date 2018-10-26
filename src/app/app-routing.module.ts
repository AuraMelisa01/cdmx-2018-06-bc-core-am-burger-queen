import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterMenuComponent } from './components/register-menu/register-menu.component';


import { AuthGuard } from './security-guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'password-reset', component: PasswordResetComponent},
  {path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard]},
  {path: 'register-menu', component: RegisterMenuComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
