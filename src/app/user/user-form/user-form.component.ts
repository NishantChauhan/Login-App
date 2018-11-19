import { Component, OnInit } from '@angular/core';
import { Gender, User, UserType } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user = new User();

  userType = UserType; // Work Around to user options
  genderType: any = Gender; // Work Around to gender options
  otherGenderText = ''; // Work Around to save gender text for other genders
  userTypes = Object.values(UserType); // Work Around to user options for dropdown
  genders = Object.values(Gender); // Work Around to user options
  submitted = false;
  timeToReset = 10;

  constructor() {}
  ngOnInit() {}

  onSubmit() {
    if (this.user.gender === this.genderType.OTHER) {
      this.user.gender = this.otherGenderText;
    }
    this.submitted = true;
  }

  onReset() {
    this.user = new User();
    this.submitted = false;
  }
}
