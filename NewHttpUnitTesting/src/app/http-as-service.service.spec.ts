import { TestBed, fakeAsync, tick,inject } from '@angular/core/testing';

import { HttpAsServiceService } from './http-as-service.service';
import {  HttpClientTestingModule,  HttpTestingController} from "@angular/common/http/testing";

describe('HttpAsServiceService', () => {
  
//Create the global variables required
  let service: HttpAsServiceService;
  let httpTestingController: HttpTestingController;

  //Create the TestBed, similar to faking an @ngModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [HttpAsServiceService]      
    });

    // Create the fake service in jasmine, by providing reference to the
    // real service
    service = TestBed.get(HttpAsServiceService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it(
    "search should return Customers",
    fakeAsync(() => {
      let response = {results: [
        {
          "name": "FakeCustomer001",
          "email": "newcustomer001@email.com",
          "tel": "0000252525",
          "id": 1
        },
        {
          "id": 2,
          "name": "FakeCustomer002",
          "email": "customer002@email.com",
          "tel": "0527252525"
        }
        ]};

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.GetWithParams().subscribe(data => {
        expect(data.length).toBe(2);  //Confirming it went to fake backend, if the count of data = 2
        expect(data[0].name).toEqual(response.results[0].name[0]);  //Confirming it went to fake backend
                                                                    // by verifying the "name" key
      });
      // Call tick which actually processes the response
      tick();

      const req = httpTestingController.expectOne(
        "localhost:3000/Customers?_page=1&_limit=1"
      );

      // Assert that the request is a GET.
      expect(req.request.method).toEqual("GET");
      // Respond with this data when called
     
     
      // Run our tests
      expect(service.GetWithParams()).toBeTruthy();
      
      
     
    })
  );

  it('should be created using inject()', inject([HttpAsServiceService], (service: HttpAsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
