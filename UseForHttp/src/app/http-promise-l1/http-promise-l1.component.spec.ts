import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HttpPromiseL1Component } from './http-promise-l1.component';
import {  HttpClientTestingModule,  HttpTestingController} from "@angular/common/http/testing";


describe('HttpPromiseL1Component', () => {
  let component: HttpPromiseL1Component;
  let fixture: ComponentFixture<HttpPromiseL1Component>;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPromiseL1Component ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPromiseL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should be called", ()=>{
    spyOn(component, 'GetCall');
    component.GetCall();
    expect(component.GetCall).toHaveBeenCalled();  
    httpTestingController.expectOne("http://127.0.0.1:3000/customers");
    httpTestingController.expectOne("http://jsonplaceholder.typicode.com/posts");
    
  })

  
});
