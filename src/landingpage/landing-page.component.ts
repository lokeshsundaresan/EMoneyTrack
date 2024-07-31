import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { SvgIconComponent } from '../common/component/svgIcon.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [RouterOutlet, DividerModule, SvgIconComponent],
})
export class LandingPage {
  constructor(private router: Router) {}
}
