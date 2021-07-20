import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layout/shared-layout/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '../app/shared/shared.module';
import {CountdownModule} from 'ngx-countdown';
import { ContentLayoutModule } from './layout/shared-layout/content-layout/content-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CountdownModule,
    ContentLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
