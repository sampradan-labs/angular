import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncObservableComponent } from './async-observable.component';

describe('AsyncObservableComponent', () => {
  let component: AsyncObservableComponent;
  let fixture: ComponentFixture<AsyncObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
