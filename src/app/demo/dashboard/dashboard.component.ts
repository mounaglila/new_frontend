// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // public props
  users = [
    {
      firstName: 'Mark',
      lastName: 'Otto',
      username: '@mdo'
    },
    {
      firstName: 'Jacob',
      lastName: 'Thornton',
      username: '@fat'
    },
    {
      firstName: 'Larry',
      lastName: 'the Bird',
      username: '@twitter'
    }
  ];

  // life cycle event
}
