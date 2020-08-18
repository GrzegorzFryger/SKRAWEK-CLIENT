import { TestBed } from '@angular/core/testing';

import { ChildSelectSharedService } from './child-select-shared.service';

describe('ChildSelectSharedService', () => {
  let service: ChildSelectSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildSelectSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
