import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegexValidatorDirective } from './regex-validator.directive';
import { ConfirmPasswordValidatorDirective } from './confirm-password-validator.directive';
import { PasswordValidatorDirective } from './password-validator.directive';

@NgModule({
  declarations: [RegexValidatorDirective, ConfirmPasswordValidatorDirective, PasswordValidatorDirective],
  imports: [CommonModule],
  exports: [RegexValidatorDirective],
})
export class SharedModule {}
