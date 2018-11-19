import { Directive, Input } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmPasswordValidatorDirective implements Validator {
  constructor() {}
  @Input() confirmPassword;
  validate(loginForm: FormGroup): ValidationErrors {
    return confirmPasswordValidationFn(this.confirmPassword)(loginForm);
  }
}
export function confirmPasswordValidationFn(confirmPassword: string): ValidatorFn {
  return (loginForm: FormGroup): ValidationErrors => {
    const password = loginForm.get('password').value;
    return password === confirmPassword
      ? null
      : { confirmPasswordValidation: { value: password.value } };
  };
}
