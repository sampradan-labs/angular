import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmSearchComponent } from './npm-search.component';

describe('NpmSearchComponent', () => {
  let component: NpmSearchComponent;
  let fixture: ComponentFixture<NpmSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
