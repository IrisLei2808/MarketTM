import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { ContentLayoutComponent } from './layout/shared-layout/content-layout/content-layout.component';

const routes: Routes = [
    {
      path: '',
      component: ContentLayoutComponent,
    //  canActivate: [NoAuthGuard],
      pathMatch: 'full',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
