import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  standalone: true,
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent {
  // public props
  searchInterval;
  searchWidth: number;
  searchWidthString: string;

  // constructor
  constructor() {
    this.searchWidth = 0;
  }

  // public method
  searchOn() {
    document.querySelector('#main-search').classList.add('open');
    this.searchInterval = setInterval(() => {
      if (this.searchWidth >= 170) {
        clearInterval(this.searchInterval);
      }
      this.searchWidth = this.searchWidth + 30;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }

  searchOff() {
    this.searchInterval = setInterval(() => {
      if (this.searchWidth <= 0) {
        document.querySelector('#main-search').classList.remove('open');
        clearInterval(this.searchInterval);
      }
      this.searchWidth = this.searchWidth - 30;
      this.searchWidthString = this.searchWidth + 'px';
    }, 35);
  }
}
