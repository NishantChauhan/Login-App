import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumAddOnsComponent } from './premium-add-ons/premium-add-ons.component';
import { PremiumContentComponent } from './premium-content/premium-content.component';

const routes: Routes = [
  { path: '', component: PremiumContentComponent },
  { path: 'add-ons', component: PremiumAddOnsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiumSubscriberRoutingModule {}
