import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/shared/service/validation.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  isSticky: boolean = false;
  productCount: number;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }
  constructor(private dataService: ValidationService) { }

  ngOnInit(): void {
     this.productCount = this.dataService.productCount
  }

}
