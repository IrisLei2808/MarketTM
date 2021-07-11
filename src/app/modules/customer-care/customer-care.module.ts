import { NgModule } from '@angular/core';
import { CustomerCareRoutingModule } from './customer-care-routing.module';
import { CustomerCareComponent } from './page/customer-care/customer-care.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CustomerCareComponent],
  imports: [
    SharedModule,
    CustomerCareRoutingModule
  ]
})
export class CustomerCareModule { }
