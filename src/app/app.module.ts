import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RegexValidatorDirective } from './regex-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserFormComponent,
    RegexValidatorDirective
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
