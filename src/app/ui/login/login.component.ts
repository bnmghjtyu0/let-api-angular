import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  gotoBR() {
    this.authService.setAuthorized('BR');
    sessionStorage.setItem('auth', 'BR');
    this.router.navigate(['/house/agentMember']);
  }

  gotoBK() {
    this.authService.setAuthorized('BK');
    window.sessionStorage.setItem('auth', 'BK');
    this.router.navigate(['/house/agentMember']);
  }
}
