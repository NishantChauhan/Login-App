import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Directive({
  selector: '[appRegexValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RegexValidatorDirective,
      multi: true
    }
  ]
})
export class RegexValidatorDirective implements Validator {
  @Input('appRegexValidation')
  appRegexValidation: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    let validationOutput = null;

    if (this.appRegexValidation) {
      const regularExpression = new RegExp(this.appRegexValidation, 'i');
      validationOutput = regexValidator(regularExpression)(control);
      console.log(validationOutput);
    }
    return validationOutput;
  }
}
export function regexValidator(nameRe: RegExp): ValidatorFn {

  // Validator Funtion
  // Input: Control - Any HTML Text input
  // Output: if regex passed, Object else null
  const valControl = (
    control: AbstractControl
  ): { [key: string]: any } | null => { // Object

    let funcOutput: any;

    // Check if control value matches the regular expression
    const regexOutput = nameRe.test(control.value);


    if (regexOutput) {
      // const val = ['1', '1', '1'];
      const controlValue = control.value; // control Value
      const val = { 'value': controlValue}; // Object to store control value
      funcOutput = { 'appRegexValidation': val}; // Object to store control validation
    }

    return funcOutput;
  };
  return valControl;
}
