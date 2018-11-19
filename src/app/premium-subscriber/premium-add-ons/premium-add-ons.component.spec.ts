import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumAddOnsComponent } from './premium-add-ons.component';

describe('PremiumAddOnsComponent', () => {
  let component: PremiumAddOnsComponent;
  let fixture: ComponentFixture<PremiumAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiumAddOnsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
