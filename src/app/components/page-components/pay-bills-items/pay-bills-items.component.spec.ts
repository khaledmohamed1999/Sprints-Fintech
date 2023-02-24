import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayBillsItemsComponent } from './pay-bills-items.component';

describe('PayBillsItemsComponent', () => {
  let component: PayBillsItemsComponent;
  let fixture: ComponentFixture<PayBillsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayBillsItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayBillsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
