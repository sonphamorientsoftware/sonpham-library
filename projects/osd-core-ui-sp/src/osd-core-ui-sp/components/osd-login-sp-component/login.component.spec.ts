import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsdLoginSPComponent } from './osd-login-sp.component';

describe('OsdLoginSPComponent', () => {
  let component: OsdLoginSPComponent;
  let fixture: ComponentFixture<OsdLoginSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsdLoginSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsdLoginSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
