import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {
  itemProduct: any
  constructor(private validationService: ValidationService) { }

  ngOnInit(): void {
    this.initData()
  }

  ok() {
    console.log('aaaa')
  }

  initData() {
    return this.validationService.getAllProduct().subscribe(data => {
      this.itemProduct = data
    //  console.log(data)
    }, err => console.log(err))
  }

}
