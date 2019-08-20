import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1HttpObservableComponent } from './l1-http-observable.component';

describe('L1HttpObservableComponent', () => {
  let component: L1HttpObservableComponent;
  let fixture: ComponentFixture<L1HttpObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1HttpObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1HttpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
