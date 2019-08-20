import { TestBed, inject } from '@angular/core/testing';

import { InterceptService } from './intercept.service';

describe('InterceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptService]
    });
  });

  it('should be created', inject([InterceptService], (service: InterceptService) => {
    expect(service).toBeTruthy();
  }));
});
