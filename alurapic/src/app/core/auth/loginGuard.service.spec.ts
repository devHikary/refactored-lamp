import { TestBed, inject } from '@angular/core/testing';

import { LoginGuardService } from './loginGuard.service';

describe('LoginGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuardService]
    });
  });

  it('should be created', inject([LoginGuardService], (service: LoginGuardService) => {
    expect(service).toBeTruthy();
  }));
});
