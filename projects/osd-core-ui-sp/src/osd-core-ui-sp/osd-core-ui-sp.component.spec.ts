import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsdCoreUISPComponent } from './osd-core-ui-sp..component';

describe('OsdCoreUISPComponent', () => {
  let component: OsdCoreUISPComponent;
  let fixture: ComponentFixture<OsdCoreUISPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsdCoreUISPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsdCoreUISPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
