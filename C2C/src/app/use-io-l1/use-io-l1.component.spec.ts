import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseIoL1Component } from './use-io-l1.component';

describe('UseIoL1Component', () => {
  let component: UseIoL1Component;
  let fixture: ComponentFixture<UseIoL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseIoL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseIoL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
