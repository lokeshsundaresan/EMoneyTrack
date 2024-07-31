import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login-screen.component.html',
  imports: [RouterOutlet, ButtonModule],
})
export class LoginScreenComponent {
  constructor(private router: Router) {}
}
