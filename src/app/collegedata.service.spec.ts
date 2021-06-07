import { TestBed } from '@angular/core/testing';

import { CollegedataService } from './collegedata.service';

describe('CollegedataService', () => {
  let service: CollegedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
