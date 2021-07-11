import { NgModule } from '@angular/core';
import { TradeMarketRoutingModule } from './page/trade-market/trade-market-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TradeMarketComponent } from './trade-market.component';


@NgModule({
  declarations: [TradeMarketComponent],
  imports: [
    SharedModule,
    TradeMarketRoutingModule
  ]
})
export class TradeMarketModule { }
