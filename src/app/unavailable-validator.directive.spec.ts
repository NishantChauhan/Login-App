import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from './app.module';
import {
  UnavailableValidator,
  UnavailableValidatorDirective,
} from './unavailable-validator.directive';
import { UserService } from './user.service';
beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [],
    imports: [AppModule, FormsModule],
  }).compileComponents();
}));
describe('UnavailableValidatorDirective', () => {
  it('should create an instance', () => {
    const userService = new UserService();
    const validator = new UnavailableValidator(userService);
    const directive = new UnavailableValidatorDirective(validator);
    expect(directive).toBeTruthy();
  });
});
