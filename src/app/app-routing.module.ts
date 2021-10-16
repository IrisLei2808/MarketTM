import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { DetailLayoutComponent } from './layout/detail-layout/detail-layout.component';
import { ContentLayoutComponent } from './layout/shared-layout/content-layout/content-layout.component';
import { LoginComponent } from './modules/auth/page/login/login.component';
import { RegisterComponent } from './modules/auth/page/register/register.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: ContentLayoutComponent,
    //  canActivate: [NoAuthGuard],
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'signup',
      component: RegisterComponent,
    },
    {
      path: 'detail',
      component: DetailLayoutComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
