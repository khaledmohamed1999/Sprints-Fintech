import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentsComponent } from './home-recents.component';

describe('HomeRecentsComponent', () => {
  let component: HomeRecentsComponent;
  let fixture: ComponentFixture<HomeRecentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
