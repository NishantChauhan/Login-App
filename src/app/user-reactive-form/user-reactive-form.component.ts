import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { regexValidator } from '../regex-validator.directive';
import { UnavailableValidator } from '../unavailable-validator.directive';
import { Gender, UserType } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css'],
})
export class UserReactiveFormComponent implements OnInit, AfterViewInit {
  constructor(
    private builder: FormBuilder,
    private unavailableValidator: UnavailableValidator,
    private userService: UserService
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
  ngAfterViewInit() {
    // this.printCharactersToConsole();
    // multicastTestFunction();
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
    this.checkUserAvailability();
    this.submitted = true;
  }

  private checkUserAvailability() {
    this.userService.getUnAvailableNames().subscribe({
      next(value) {
        // console.log('Value is : ' + value);
      },
      complete() {
        // console.log('Completed');
      },
    });
  }
  printCharactersToConsole() {
    const nameBox = document.getElementById('rt_fullname') as HTMLInputElement;
    console.log('registered');
    const tearDownLogic = (target: HTMLInputElement, eventName: string) => {
      return new Observable(observer => {
        const handler = e => {
          observer.next(e);
        };
        target.addEventListener(eventName, handler);
        return () => {
          target.removeEventListener(eventName, handler);
        };
      });
    };
    const subscription = tearDownLogic(nameBox, 'keydown').subscribe(
      (event: KeyboardEvent) => {
        // console.log(event);
      }
    );
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
function multicastSequenceSubscriber() {
  const seq = [1, 2, 3, 4, 5, 6];
  // Keep track of each observer (one for every active subscription)
  const observers = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId;

  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return observer => {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    if (observers.length === 1) {
      timeoutId = doSequence(
        {
          next(val) {
            // Iterate through observers and notify all subscriptions
            observers.forEach(obs => obs.next(val));
          },
          complete() {
            // Notify all complete callbacks
            observers.slice().forEach(obs => obs.complete());
          },
        },
        seq,
        0
      );
    }

    return {
      unsubscribe() {
        // Remove from the observers array so it's no longer notified
        observers.splice(observers.indexOf(observer), 1);
        // If there's no more listeners, do cleanup
        if (observers.length === 0) {
          clearTimeout(timeoutId);
        }
      },
    };
  };
}

// Run through an array of numbers, emitting one value
// per second until it gets to the end of the array.
function doSequence(observer, arr, idx) {
  return setTimeout(() => {
    observer.next(arr[idx]);
    if (idx === arr.length - 1) {
      observer.complete();
    } else {
      doSequence(observer, arr, ++idx);
    }
  }, 1000);
}

function multicastTestFunction() {
  // Create a new Observable that will deliver the above sequence
  const multicastSequence = new Observable(multicastSequenceSubscriber());

  // Subscribe starts the clock, and begins to emit after 1 second
  multicastSequence.subscribe({
    next(num) {
      // console.log('1st subscribe: ' + num);
    },
    complete() {
      // console.log('1st sequence finished.');
    },
  });

  // After 1 1/2 seconds, subscribe again (should "miss" the first value).
  setTimeout(() => {
    multicastSequence.subscribe({
      next(num) {
        // console.log('2nd subscribe: ' + num);
      },
      complete() {
        // console.log('2nd sequence finished.');
      },
    });
  }, 1500);

  // After 1 1/2 seconds, subscribe again (should "miss" the first value).
  setTimeout(() => {
    multicastSequence.subscribe({
      next(num) {
        // console.log('3rd subscribe: ' + num);
      },
      complete() {
        // console.log('3rd sequence finished.');
      },
    });
  }, 3500);

  // Logs:
  // (at 1 second): 1st subscribe: 1
  // (at 2 seconds): 1st subscribe: 2
  // (at 2 seconds): 2nd subscribe: 2
  // (at 3 seconds): 1st subscribe: 3
  // (at 3 seconds): 1st sequence finished
  // (at 3 seconds): 2nd subscribe: 3
  // (at 3 seconds): 2nd sequence finished
}
