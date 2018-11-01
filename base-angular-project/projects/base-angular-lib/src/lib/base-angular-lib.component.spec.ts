import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAngularLibComponent } from './base-angular-lib.component';

describe('BaseAngularLibComponent', () => {
  let component: BaseAngularLibComponent;
  let fixture: ComponentFixture<BaseAngularLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseAngularLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
