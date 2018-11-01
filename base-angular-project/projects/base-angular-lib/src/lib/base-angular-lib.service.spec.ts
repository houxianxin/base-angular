import { TestBed } from '@angular/core/testing';

import { BaseAngularLibService } from './base-angular-lib.service';

describe('BaseAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseAngularLibService = TestBed.get(BaseAngularLibService);
    expect(service).toBeTruthy();
  });
});
