import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  @Input('appPasswordValidation') passwordStrength: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    let validationOutput = null;

    if (this.passwordStrength) {
      const regularExpression = new RegExp(this.passwordStrength, 'i');
      validationOutput = passwordValidator(regularExpression)(control);
    }
    return validationOutput;
  }
}
export function passwordValidator(nameRe: RegExp): ValidatorFn {
  // Validator Funtion
  // Input: Control - Any HTML Text input
  // Output: if password passed, Object else null
  const valControl = (control: AbstractControl): { [key: string]: any } | null => {
    // Object

    let funcOutput: any;

    // Check if control value matches the regular expression
    const passwordOutput = !nameRe.test(control.value);

    if (passwordOutput) {
      // const val = ['1', '1', '1'];
      const controlValue = control.value; // control Value
      const val = { value: controlValue }; // Object to store control value
      funcOutput = { passwordValidation: val }; // Object to store control validation
    }

    return funcOutput;
  };
  return valControl;
}
