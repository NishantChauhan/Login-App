import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class UnavailableValidator implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.isNameAvailable(control.value).pipe(
      map(isAvailable => (isAvailable ? { unavailableValidation: true } : null)),
      catchError(() => null)
    );
  }
  constructor(private userService: UserService) {}
}

@Directive({
  selector: '[appUnavailableValidaton]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UnavailableValidator),
      multi: true,
    },
  ],
})
export class UnavailableValidatorDirective {
  constructor(private validator: UnavailableValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
