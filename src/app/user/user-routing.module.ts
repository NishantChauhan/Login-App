import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

const routes: Routes = [
  { path: '', component: UserReactiveFormComponent },
  { path: 'reactiveForm', component: UserReactiveFormComponent },
  { path: 'templateDriverForm', component: UserFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
