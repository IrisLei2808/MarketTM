import { Component, OnInit } from '@angular/core';
import { ProductFlashSale } from 'src/app/data/ProductFlashSale';
import { FLASH_PRODUCTS } from 'src/app/shared/service/mock-products';

@Component({
  selector: 'app-just-for-you',
  templateUrl: './just-for-you.component.html',
  styleUrls: ['./just-for-you.component.scss']
})
export class JustForYouComponent implements OnInit {
  products: ProductFlashSale[] = FLASH_PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
