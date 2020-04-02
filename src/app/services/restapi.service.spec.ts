/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestapiService } from './restapi.service';

describe('Service: Restapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestapiService]
    });
  });

  it('should ...', inject([RestapiService], (service: RestapiService) => {
    expect(service).toBeTruthy();
  }));
});
