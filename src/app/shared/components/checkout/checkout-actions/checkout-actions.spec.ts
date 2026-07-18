import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutActions } from './checkout-actions';

describe('CheckoutActions', () => {
  let component: CheckoutActions;
  let fixture: ComponentFixture<CheckoutActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutActions],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
