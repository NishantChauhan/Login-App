import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { regexValidator } from '../regex-validator.directive';
import { UnavailableValidator } from '../unavailable-validator.directive';
import { Gender, UserType } from '../user';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css'],
})
export class UserReactiveFormComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private unavailableValidator: UnavailableValidator
  ) {}
  submitted;
  userTypes = Object.values(UserType); // Work Around to user options for dropdown
  genders = Object.values(Gender); // Work Around to user options
  genderType: any = Gender; // Work Around to gender options
  enableOtherGender = false;

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.buildForm();
  }
  buildForm() {
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
          // updateOn: 'blur', // Not Required for now
        },
      ],
      password: ['', Validators.required],
      type: ['', Validators.required],
      gender: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onGenderClick(gender) {
    if (gender === this.genderType.OTHER) {
      this.addOtherGenderText();
      this.enableOtherGender = true;
    } else {
      this.removeOtherGenderText();
      this.enableOtherGender = false;
    }
  }
  removeOtherGenderText() {
    this.loginForm.removeControl('otherGenderText');
  }
  addOtherGenderText() {
    this.loginForm.addControl(
      'otherGenderText',
      new FormControl('', Validators.required)
    );
  }
  onReset() {
    this.loginForm = this.buildForm();
    this.submitted = false;
  }
  onSubmit() {
    this.patchGender();
    this.submitted = true;
  }

  private patchGender() {
    if (this.loginForm.get('otherGenderText') && this.loginForm.value.otherGenderText) {
      this.loginForm.patchValue({
        gender: this.loginForm.value.otherGenderText,
      });
      this.removeOtherGenderText();
    }
  }
}
