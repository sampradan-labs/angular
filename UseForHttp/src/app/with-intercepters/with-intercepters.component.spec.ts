import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithInterceptersComponent } from './with-intercepters.component';

describe('WithInterceptersComponent', () => {
  let component: WithInterceptersComponent;
  let fixture: ComponentFixture<WithInterceptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithInterceptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithInterceptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
