import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor() { }

  ngOnInit(): void {
  }

  navbarTitle: Array<any> = [
      {
        savemore : 'save more on app'
      },
      {
        trader: 'trade market'
      },
      {
        customer: 'customer care'
      },
      {
        tracking: 'tracking order'
      },
      {
        login: 'login'
      },
      {
        signup: 'signup'
      }
  ]

}
