import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject (err));
    });
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),  /* Devuelve la promesa con los datos del usuario*/
      err => reject (err));
    });
  }

  getAuth() { /*Funcion que devuelve los datos del usuario logeado*/
    return this.afAuth.authState.map(auth => auth);
  }


  logouth() {
    return this.afAuth.auth.signOut();
  }


}