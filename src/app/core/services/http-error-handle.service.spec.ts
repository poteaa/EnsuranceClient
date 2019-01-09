import { TestBed } from '@angular/core/testing';

import { HttpErrorHandleService } from './http-error-handle.service';

describe('HttpErrorHandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrorHandleService = TestBed.get(HttpErrorHandleService);
    expect(service).toBeTruthy();
  });
});
