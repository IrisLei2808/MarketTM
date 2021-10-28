import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-detail-layout',
  templateUrl: './detail-layout.component.html',
  styleUrls: ['./detail-layout.component.scss']
})
export class DetailLayoutComponent implements OnInit {
  itemProduct: any
  isSticky: boolean = false;
  productCount: number 
  items = [];
  myData

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  constructor(private dataService: ValidationService, private router: Router) {
    this.dataService.set('KEY',    [{
      "idProduct": 2,
      "name": "iPhone 12 Pro Max 128GB Pacific Blue",
      "description": "Theo chu kỳ cứ mỗi 3 năm thì iPhone lại thay đổi thiết kế và 2020 là năm đánh dấu cột mốc quan trong này, vì thế rất có thể đây là thời điểm các mẫu iPhone 12 sẽ có một sự thay đổi mạnh mẽ về thiết kế.",
      "quantity": 3,
      "price": 24940000,
      "status": "1",
      "own": 5,
      "categoryID": 1,
      "Images": [
        {
          "address": "https://cdn.tgdd.vn/may-cu/Desktop/2021-06/1_33596685_dien-thoai-iphone-12-pro-max-256gb-pacific-blue26062021175745.png"
        },
        {
          "address": "https://cdn.tgdd.vn/may-cu/Desktop/2021-06-20/3_34720034_dien-thoai-iphone-12-pro-max-128gb-gold20062021142841.png"
        },
        {
          "address": "https://cdn.tgdd.vn/may-cu/Desktop/2021-06/1_33596685_dien-thoai-iphone-12-pro-max-256gb-pacific-blue26062021175745.png"
        }
      ]
    }],)
    console.log(this.dataService.get('KEY'));
  
   }

  ngOnInit(): void {
  //  console.log(history.state.example)
  this.initData()
  }
  
  initData() {
    this.productCount = this.dataService.productCount
    return this.dataService.getDetailProduct(history.state.example).subscribe(data => {
       this.itemProduct = data
    }, err => console.log(err))
  }

  addToCart() {
     this.productCount = this.dataService.productCount + 1
     this.items.push(this.itemProduct)
 //   this.dataService.set('KEY', this.itemProduct)
  //   this.itemProduct = this.dataService.get('KEY');
 //    console.log(this.itemProduct)
  }

  navigateCheckout() {
    this.router.navigate(['checkout'], { state: { example: this.itemProduct } });
 }

}
