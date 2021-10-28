import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductFlashSale } from 'src/app/data/ProductFlashSale';
import { FLASH_PRODUCTS } from 'src/app/shared/service/mock-products';

@Component({
  selector: 'app-more-layout',
  templateUrl: './more-layout.component.html',
  styleUrls: ['./more-layout.component.scss']
})
export class MoreLayoutComponent implements OnInit {
  products: ProductFlashSale[] = FLASH_PRODUCTS;
  itemProduct: any
  secondItemProduct: any

  constructor(    
    private router: Router,
    ) { }

  ngOnInit(): void {
     if(history.state) {
     this.initData()
     }
     else {
       console.log('cc')
     }
  }

  initData() {
     this.itemProduct = history.state.example[0].Categories[0].Products
   //  this.secondItemProduct = history.state.example[0].Categories[1].Products
  }

  navigateDetail(id) {
    this.router.navigate(['detail'], { state: { example: id } });
   // console.log(id)
  }

 


}
