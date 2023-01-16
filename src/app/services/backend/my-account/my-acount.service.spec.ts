import { TestBed } from '@angular/core/testing';

import { MyAcountService } from './my-acount.service';

describe('MyAcountService', () => {
  let service: MyAcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
