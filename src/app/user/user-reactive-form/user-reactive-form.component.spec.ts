import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { commonTestingModules } from 'src/app/shared/common-testing';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserReactiveFormComponent } from './user-reactive-form.component';

describe('UserReactiveFormComponent', () => {
  let component: UserReactiveFormComponent;
  let fixture: ComponentFixture<UserReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserReactiveFormComponent, UserDetailsComponent],
      imports: commonTestingModules,
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
