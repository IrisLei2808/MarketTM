import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentLayoutComponent } from './content-layout.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { CollectionsComponent } from './page/collections/collections.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { FlashSaleComponent } from './page/flash-sale/flash-sale.component';
import { JustForYouComponent } from './page/just-for-you/just-for-you.component';
import { MenuSliderComponent } from './page/menu-slider/menu-slider.component';
import { MostPopularComponent } from './page/most-popular/most-popular.component';
import { PaymentMethodComponent } from './page/payment-method/payment-method.component';
import { SearchInputComponent } from './page/search-input/search-input.component';
import { TmMallComponent } from './page/tm-mall/tm-mall.component';
import { VoucherComponent } from './page/voucher/voucher.component';
import { FooterComponent } from 'src/app/shared/component/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';
import { FlashSaleCardComponent } from 'src/app/shared/component/flash-sale-card/flash-sale-card.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CountdownModule } from 'ngx-countdown';
import { TruncatePipe } from 'src/app/shared/component/flash-sale-card/flash-sale-card-pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContentLayoutComponent,
    FlashSaleCardComponent,
    SearchInputComponent,
    MenuSliderComponent,
    FlashSaleComponent,
    MostPopularComponent,
    CollectionsComponent,
    TmMallComponent,
    CategoriesComponent,
    JustForYouComponent,
    VoucherComponent,
    ContactUsComponent,
    PaymentMethodComponent,
    TruncatePipe,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    SearchInputComponent,
    ContactUsComponent
  ],
  imports: [CommonModule, MaterialModule, CountdownModule],
})
export class ContentLayoutModule {}
