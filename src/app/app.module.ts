import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegexValidatorDirective } from './regex-validator.directive';
import { UnavailableValidatorDirective } from './unavailable-validator.directive';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserFormComponent,
    RegexValidatorDirective,
    UserReactiveFormComponent,
    UnavailableValidatorDirective,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
