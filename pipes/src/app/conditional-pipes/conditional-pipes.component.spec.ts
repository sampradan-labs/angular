import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalPipesComponent } from './conditional-pipes.component';

describe('ConditionalPipesComponent', () => {
  let component: ConditionalPipesComponent;
  let fixture: ComponentFixture<ConditionalPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionalPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
