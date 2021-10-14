import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ContentLayoutModule } from 'src/app/layout/shared-layout/content-layout/content-layout.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ContentLayoutModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
