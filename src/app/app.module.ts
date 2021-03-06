import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//FORMULARIO
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterMenuComponent } from './components/register-menu/register-menu.component';
import { DesayunoComponent } from './components/desayuno/desayuno.component';
import { ComidaComponent } from './components/comida/comida.component';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

//CONEXION CON FIREBASE
import { environment} from '../environments/environment';

//SERVICIOS
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';

import { AuthGuard } from './security-guards/auth.guard';
import { ServiceWorkerModule } from '@angular/service-worker';

//ANIMACION
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PedidosComponent,
    PasswordResetComponent,
    RegisterMenuComponent,
    DesayunoComponent,
    ComidaComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AuthService, AuthGuard, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
