import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from 'src/app/shared/password-validator.directive';
import { regexValidator } from 'src/app/shared/regex-validator.directive';
import { UnavailableValidator } from 'src/app/shared/unavailable-validator.directive';
import { Gender, User, UserType } from 'src/app/user/user';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css'],
})
export class UserReactiveFormComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private unavailableValidator: UnavailableValidator,
    private router: Router
  ) {}
  user = new User();
  submitted = false;
  displayOtherGender = false;
  userTypes = Object.values(UserType); // Work Around to user options for dropdown
  genders = Object.values(Gender); // Work Around to user options
  genderType: any = Gender; // Work Around to gender options
  confirmPassword: string;

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.buildForm();
  }
  buildForm(): FormGroup {
    return this.builder.group({
      fullname: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(3),
            regexValidator(/[^A-Z]/i),
          ],
          asyncValidators: [
            this.unavailableValidator.validate.bind(this.unavailableValidator),
          ],
        },
      ],
      password: [
        '',
        {
          validators: [
            Validators.required,
            passwordValidator(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i
            ),
          ],
        },
      ],
      confirmPassword: ['', Validators.required],
      type: ['', Validators.required],
      gender: ['', [Validators.required]],
      otherGenderText: ['', [Validators.required, Validators.minLength(3)]],
    });
    // { validator: confirmPasswordValidationFn(this.confirmPassword) }
  }

  onGenderClick(gender) {
    if (gender === this.genderType.OTHER) {
      this.enableOtherGenderText();
      this.displayOtherGender = true;
    } else {
      this.clearOtherGenterText();
      this.displayOtherGender = false;
    }
  }
  clearOtherGenterText() {
    this.loginForm.get('otherGenderText').clearValidators();
    this.loginForm.get('otherGenderText').setValue('');
  }
  enableOtherGenderText() {
    this.loginForm
      .get('otherGenderText')
      .setValidators([Validators.required, Validators.minLength(3)]);
  }
  onReset() {
    this.loginForm = this.buildForm();
    this.submitted = false;
  }
  OnContinue() {
    try {
      const subscription = this.loginForm.get('type').value;
      this.router.navigate([this.resolveSubscriptionPage(subscription)]);
    } catch (error) {
      this.router.navigate(['']);
    }
  }
  private resolveSubscriptionPage(subscription: any) {
    let subscriptionPage;
    switch (subscription) {
      case UserType.FREE:
        subscriptionPage = '/free';
        break;
      case UserType.PREMIUM:
        subscriptionPage = '/premium';
        break;
      case UserType.STANDARD:
        subscriptionPage = '/premium';
        break;
      default:
        subscriptionPage = '/free';
    }
    return subscriptionPage;
  }

  onSubmit() {
    this.transformFormToUser();
    this.submitted = true;
  }
  transformFormToUser() {
    this.user = this.loginForm.value;
    if (this.loginForm.get('otherGenderText') && this.loginForm.value.otherGenderText) {
      this.user.gender = this.loginForm.value.otherGenderText;
    }
  }
}
