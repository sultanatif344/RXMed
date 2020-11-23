/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RxConfigService } from './rxconfig.service';

describe('Service: Rxconfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RxConfigService]
    });
  });

  it('should ...', inject([RxConfigService], (service: RxConfigService) => {
    expect(service).toBeTruthy();
  }));
});
