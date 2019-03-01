import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintainanceStaffComponent } from './add-maintainance-staff.component';

describe('AddMaintainanceStaffComponent', () => {
  let component: AddMaintainanceStaffComponent;
  let fixture: ComponentFixture<AddMaintainanceStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaintainanceStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaintainanceStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
