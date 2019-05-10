import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsdLeftSideBarSPComponent } from './osd-left-side-bar-sp.component';

describe('OsdLeftSideBarSPComponent', () => {
  let component: OsdLeftSideBarSPComponent;
  let fixture: ComponentFixture<OsdLeftSideBarSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsdLeftSideBarSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsdLeftSideBarSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
