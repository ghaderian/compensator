import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authService: AuthService;
  constructor(_authService : AuthService) { 
    this.authService = _authService;
  }

  ngOnInit(): void {
  }


  googleLogin() {
    this.authService.signInWithGoogle();

  }

}
