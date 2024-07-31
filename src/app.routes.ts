import { Routes } from '@angular/router';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LandingPage } from './landingpage/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: LoginScreenComponent },
  { path: 'dashboard', component: DashBoardComponent },
];
