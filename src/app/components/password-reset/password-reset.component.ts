import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {


  constructor(
    public auth: AuthService,
    public router: Router) {
     }

  ngOnInit() {
  }


  resetPassword(email: string) {
    this.auth.resetPassword(email);
    this.router.navigate(['/']);
  }


}
