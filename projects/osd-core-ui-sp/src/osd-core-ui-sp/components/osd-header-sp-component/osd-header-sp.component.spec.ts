import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsdHeaderSPComponent } from './osd-header-sp.component';

describe('OsdHeaderSPComponent', () => {
  let component: OsdHeaderSPComponent;
  let fixture: ComponentFixture<OsdHeaderSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsdHeaderSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsdHeaderSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
