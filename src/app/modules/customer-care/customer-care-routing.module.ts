import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCareComponent } from './page/customer-care/customer-care.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerCareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCareRoutingModule { }
