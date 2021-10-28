import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  brandName: string;
  samsungName: string;
  dellName: string;
  asusName: string;
  showTitle = 'Show More For Iphone'
  firstItemIphone: any
  secondItemIphone: any
  firstItemSamsung: any
  secondItemSamsung: any
  firstItemDell: any
  secondItemDell: any
  firstItemAsus: any
  secondItemAsus: any
  dataIphone: any;
  firstImageIphone: any;
  secondImageIphone: any;
  thirdImageIphone: any;
  firstSecondImageIphone: any;
  secondSecondImageIphone: any;
  thirdSecondImageIphone: any;
  a: any;

  constructor(
    private router: Router,
    private dataService: ValidationService
  ) { }

  ngOnInit(): void {
    this.initIphoneData()
    this.initSamsungData()
    this.initDellData()
    this.initAsusData()
   // this.initImg()
  }


  navigateDetail() {
    this.router.navigate(['detail']);
  }

  navigateMore(id) {
     this.dataService.showMoreProduct(id).subscribe(data => {
      this.router.navigate(['more'], { state: { example: data } });
    })
  }

  initIphoneData = () => {
   return this.dataService.getAllIphone().subscribe(data => {
      this.brandName = data[0].brandname
      this.firstItemIphone = data[0].Categories[0].Products.slice(0,4)
      this.secondItemIphone = data[0].Categories[0].Products.slice(-4)
      this.firstImageIphone = data[0].Categories[0].Products.map(i => i.Images[0].address)[0]
      this.secondImageIphone = data[0].Categories[0].Products.map(i => i.Images[0].address)[1]
      this.thirdImageIphone = data[0].Categories[0].Products.map(i => i.Images[0].address)[2]
      this.firstSecondImageIphone = data[0].Categories[0].Products.map(i => i.Images[0].address)[3]
      this.secondSecondImageIphone = data[0].Categories[0].Products.map(i => i.Images[0].address)[4]
      this.thirdSecondImageIphone = data[0].Categories[0].Products.map(i => i.Images[0].address)[0]
      console.log(this.firstItemIphone)
    })
  }

  initImg = () => {
     return this.dataService.getAllProduct().subscribe(data => {
        this.firstItemIphone = data[0].Categories[0].Products.slice(0,4)
        this.a = data[0].Categories.map(i => i.Products[0])[0].Images.map(i => i)
        console.log(this.firstItemIphone)
     })
  }
  initSamsungData = () => {
    return this.dataService.getAllSamsung().subscribe(data => {
       this.samsungName = data[0].brandname
       this.firstItemSamsung = data[0].Categories[0].Products.slice(0,4)
       this.secondItemSamsung = data[0].Categories[0].Products
 
     })
   }

   initDellData = () => {
    return this.dataService.getAllDell().subscribe(data => {
       this.dellName = data[0].brandname
       this.firstItemDell = data[0].Categories[0].Products.slice(0,4)
       this.secondItemDell = data[0].Categories[0].Products
 
     })
   }

   initAsusData = () => {
    return this.dataService.getAllAsus().subscribe(data => {
       this.asusName = data[0].brandname
       this.firstItemAsus = data[0].Categories[0].Products.slice(0,4)
       this.secondItemAsus = data[0].Categories[0].Products
 
     })
   }

}
