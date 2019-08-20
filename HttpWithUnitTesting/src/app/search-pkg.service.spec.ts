//import { TestBed, inject } from '@angular/core/testing';

import { SearchPkgService, NpmPackageInfo } from './search-pkg.service';

import {  HttpClientTestingModule,  HttpTestingController} from "@angular/common/http/testing";
import { TestBed, fakeAsync, tick, inject } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

describe("Service: Search", () => {
  let service: SearchPkgService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchPkgService]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(SearchPkgService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it(
    "search should return SearchItems",
    fakeAsync(() => {
      let response = {results: [
          {
            name: ["Typescript@2.9"],
            version: ["2.9.2"],
            description: ["Fake NPM repository"]
          }
        ]};

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.search("Typescript",false).subscribe(data => {
        expect(data.length).toBe(1);
        expect(data[0].name).toEqual(response.results[0].name[0]);
      });

      // Expect a call to this URL
      const req = httpTestingController.expectOne(
        "https://npmsearch.com/query?q=Typescript"
      );
      
      // Assert that the request is a GET.
      expect(req.request.method).toEqual("GET");
      // Respond with this data when called
      req.flush(response);

      // Call tick which actually processes the response
      tick();

      // Run our tests
      expect(service.search('Typescript')).toBeTruthy();
     
    })
  );
});

xdescribe('SearchPkgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchPkgService]
    });
  });

  xit('should be created', inject([SearchPkgService], (service: SearchPkgService) => {
    expect(service).toBeTruthy();
  }));
});
