import { Component } from '@angular/core';
import { NavLogoComponent } from './nav-logo/nav-logo.component';
import { NavContentComponent } from './nav-content/nav-content.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavLogoComponent, NavContentComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {}
