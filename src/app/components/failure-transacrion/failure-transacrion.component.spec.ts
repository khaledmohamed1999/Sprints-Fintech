import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureTransacrionComponent } from './failure-transacrion.component';

describe('FailureTransacrionComponent', () => {
  let component: FailureTransacrionComponent;
  let fixture: ComponentFixture<FailureTransacrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailureTransacrionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailureTransacrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
