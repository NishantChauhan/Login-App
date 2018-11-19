import { async, TestBed } from '@angular/core/testing';
import { UserService } from '../user/user.service';
import {
  UnavailableValidator,
  UnavailableValidatorDirective,
} from './unavailable-validator.directive';
describe('UnavailableValidatorDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnavailableValidatorDirective],
    }).compileComponents();
  }));
  it('should create an instance', () => {
    const userService = new UserService();
    const validator = new UnavailableValidator(userService);
    const directive = new UnavailableValidatorDirective(validator);
    expect(directive).toBeTruthy();
  });
});
