import { TestBed } from '@angular/core/testing';

import { LineItemServiceService } from './line-item-service.service';

describe('LineItemServiceService', () => {
  let service: LineItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
