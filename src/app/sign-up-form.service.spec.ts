import { TestBed, inject } from '@angular/core/testing';

import { SignUpFormService } from './sign-up-form.service';

describe('SignUpFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpFormService]
    });
  });

  it('should be created', inject([SignUpFormService], (service: SignUpFormService) => {
    expect(service).toBeTruthy();
  }));
});
