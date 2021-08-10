import { Component, OnInit } from '@angular/core';
import { ProductFlashSale } from 'src/app/data/ProductFlashSale';
import { FLASH_PRODUCTS } from 'src/app/shared/service/mock-products';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {
  products: ProductFlashSale[] = FLASH_PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
