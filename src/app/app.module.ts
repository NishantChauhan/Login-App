import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UnavailableValidatorDirective } from './shared/unavailable-validator.directive';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, UnavailableValidatorDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService, UnavailableValidatorDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
