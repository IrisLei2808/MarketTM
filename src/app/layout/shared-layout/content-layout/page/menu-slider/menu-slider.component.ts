import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu-slider',
  templateUrl: './menu-slider.component.html',
  styleUrls: ['./menu-slider.component.scss']
})
export class MenuSliderComponent implements OnInit {

  public selectedindex: number = 0; //Initialized to 0
  public images: string[] = [
    "https://icms-image.slatic.net/images/ims-web/089f59f5-cfdf-49c9-8838-b066519bc69a.jpg",
    "https://icms-image.slatic.net/images/ims-web/0363fda9-2679-4199-9a13-b88a71346eac.jpg",
    "https://icms-image.slatic.net/images/ims-web/400f5904-113b-4953-a7ba-0c726900b46b.jpg",
    "https://icms-image.slatic.net/images/ims-web/402e3c85-6d4f-45ca-b8ff-f1dc23551eb0.jpg",
    "https://icms-image.slatic.net/images/ims-web/944bd03d-d056-40c3-a1e3-d011e3c27b1b.jpg",
    "https://icms-image.slatic.net/images/ims-web/e6301d5b-fb4f-4f01-951a-ddc8941ccf99.jpg",
    "https://icms-image.slatic.net/images/ims-web/f3ab04e7-a850-4217-b92f-8f0b41d63331.jpg"
  ];

  selectImage(index : number) {
      console.log("Index: "+index);
      this.selectedindex = index;
      console.log("Selected Index: "+this.selectedindex);
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}


