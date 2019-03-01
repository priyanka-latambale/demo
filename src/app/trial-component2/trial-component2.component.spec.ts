import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialComponent2Component } from './trial-component2.component';

describe('TrialComponent2Component', () => {
  let component: TrialComponent2Component;
  let fixture: ComponentFixture<TrialComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
