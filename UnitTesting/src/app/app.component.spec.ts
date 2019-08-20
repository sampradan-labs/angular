import { TestBed, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Todo } from './todo';
import { MaterialModule } from '@angular/material';

/*async will allow the next test not to start until the async finishes all it's tasks. What async does is wrap the callback in a Zone, where all asynchronous tasks (e.g. setTimeout) are tracked. Once all the asynchronous tasks are complete, then the async completes.*/
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
          MaterialModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

      
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a newTodo todo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy();
  }));

  it('should display "Todos" in h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));
    
    it("should add well", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
//    let checkbox = fixture.debugElement.nativeElement.querySelector('md-checkbox'));
        var ins = fixture.debugElement.nativeElement;
        expect(ins.querySelector('h1')).toBeTruthy();
  }));
});
