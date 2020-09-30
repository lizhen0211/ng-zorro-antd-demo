import { TestBed } from '@angular/core/testing';

import { DemoReqService } from './demo-req.service';

describe('DemoReqService', () => {
  let service: DemoReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
