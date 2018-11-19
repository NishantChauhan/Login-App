import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserFormComponent, UserDetailsComponent, UserReactiveFormComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class UserModule {}
