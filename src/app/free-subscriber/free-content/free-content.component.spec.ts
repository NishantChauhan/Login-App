import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FreeContentComponent } from './free-content.component';

describe('FreeContentComponent', () => {
  let component: FreeContentComponent;
  let fixture: ComponentFixture<FreeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FreeContentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
