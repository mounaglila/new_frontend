import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-logo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-logo.component.html',
  styleUrls: ['./nav-logo.component.scss']
})
export class NavLogoComponent {
  windowWidth = window.innerWidth;

  navCollapse() {
    if (this.windowWidth >= 992) {
      // collapse logic
    }
  }
}
