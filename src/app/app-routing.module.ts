import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { PedidosComponent } from '../app/components/pedidos/pedidos.component';
import { PasswordResetComponent } from '../app/components/password-reset/password-reset.component';

import { AuthGuard } from './security-guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'pedidos', component: PedidosComponent, canActivate: [AuthGuard]},
  {path: 'password-reset', component: PasswordResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
