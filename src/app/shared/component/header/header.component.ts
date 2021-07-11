import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
