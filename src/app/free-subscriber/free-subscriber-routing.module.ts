import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeContentComponent } from './free-content/free-content.component';

const routes: Routes = [{ path: '', component: FreeContentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeSubscriberRoutingModule {}
