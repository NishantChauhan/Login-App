import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
  {
    path: 'premium',
    loadChildren:
      './premium-subscriber/premium-subscriber.module#PremiumSubscriberModule',
  },
  {
    path: 'free',
    loadChildren: './free-subscriber/free-subscriber.module#FreeSubscriberModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
