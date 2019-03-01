import { TestBed, inject } from '@angular/core/testing';

import { AddMaintainanceServiceService } from './add-maintainance-service.service';

describe('AddMaintainanceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddMaintainanceServiceService]
    });
  });

  it('should be created', inject([AddMaintainanceServiceService], (service: AddMaintainanceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
