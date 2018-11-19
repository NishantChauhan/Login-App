import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiumSubscriberRoutingModule } from './premium-subscriber-routing.module';
import { PremiumContentComponent } from './premium-content/premium-content.component';
import { PremiumAddOnsComponent } from './premium-add-ons/premium-add-ons.component';

@NgModule({
  declarations: [PremiumContentComponent, PremiumAddOnsComponent],
  imports: [
    CommonModule,
    PremiumSubscriberRoutingModule
  ]
})
export class PremiumSubscriberModule { }
