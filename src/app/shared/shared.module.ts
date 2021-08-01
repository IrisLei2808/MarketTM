import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageErrorComponent } from './component/message-error/message-error.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MessageErrorComponent, SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
