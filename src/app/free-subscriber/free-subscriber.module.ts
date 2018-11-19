import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeSubscriberRoutingModule } from './free-subscriber-routing.module';
import { FreeContentComponent } from './free-content/free-content.component';

@NgModule({
  declarations: [FreeContentComponent],
  imports: [
    CommonModule,
    FreeSubscriberRoutingModule
  ]
})
export class FreeSubscriberModule { }
