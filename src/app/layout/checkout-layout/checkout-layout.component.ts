import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-checkout-layout',
  templateUrl: './checkout-layout.component.html',
  styleUrls: ['./checkout-layout.component.scss']
})
export class CheckoutLayoutComponent implements OnInit {
  value = '1';
  itemProduct: any
  isSticky: boolean = false;
  productCount: number 
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  constructor(private dataService: ValidationService, private router: Router) { }

  ngOnInit(): void {
 
  this.initData()
  }
  
  initData() {
     this.itemProduct = history.state.example
  }

  addToCart() {
    console.log('aaaaaaa')
  }

 



}
