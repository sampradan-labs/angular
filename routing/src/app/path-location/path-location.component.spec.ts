import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathLocationComponent } from './path-location.component';

describe('PathLocationComponent', () => {
  let component: PathLocationComponent;
  let fixture: ComponentFixture<PathLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
