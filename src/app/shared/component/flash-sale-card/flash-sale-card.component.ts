import { Component, Input, OnInit } from '@angular/core';
import { ProductFlashSale } from 'src/app/data/ProductFlashSale';

@Component({
  selector: 'app-flash-sale-card',
  templateUrl: './flash-sale-card.component.html',
  styleUrls: ['./flash-sale-card.component.scss'],
})
export class FlashSaleCardComponent implements OnInit {
  @Input() product!: ProductFlashSale;

  truncateChar(text: string): string {
    let charlimit = 2;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }

  constructor() {}

  ngOnInit(): void {}
}
