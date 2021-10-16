import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) {}

  ngOnInit(): void {}

  navigate(){
    //do your any operations
    this.router.navigate(['detail']);
    //also you can pass like this,
   //  this.router.navigateByURL(['path']);
    }
}
