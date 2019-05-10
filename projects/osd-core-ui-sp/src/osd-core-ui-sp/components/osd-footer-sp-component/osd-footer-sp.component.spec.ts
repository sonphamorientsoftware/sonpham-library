import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsdFooterSPComponent } from './osd-footer-sp.component';

describe('OsdFooterSPComponent', () => {
  let component: OsdFooterSPComponent;
  let fixture: ComponentFixture<OsdFooterSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsdFooterSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsdFooterSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
