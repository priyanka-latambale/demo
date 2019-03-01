import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialComponent1Component } from './trial-component1.component';

describe('TrialComponent1Component', () => {
  let component: TrialComponent1Component;
  let fixture: ComponentFixture<TrialComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
