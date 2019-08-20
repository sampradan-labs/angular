import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPromiseComponent } from './async-promise.component';

describe('AsyncPromiseComponent', () => {
  let component: AsyncPromiseComponent;
  let fixture: ComponentFixture<AsyncPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
