import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessTransactionComponent } from './sucess-transaction.component';

describe('SucessTransactionComponent', () => {
  let component: SucessTransactionComponent;
  let fixture: ComponentFixture<SucessTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
