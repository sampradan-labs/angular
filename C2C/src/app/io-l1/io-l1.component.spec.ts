import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoL1Component } from './io-l1.component';

describe('IoL1Component', () => {
  let component: IoL1Component;
  let fixture: ComponentFixture<IoL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
