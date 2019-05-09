import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonphamLibComponent } from './sonpham-lib.component';

describe('SonphamLibComponent', () => {
  let component: SonphamLibComponent;
  let fixture: ComponentFixture<SonphamLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonphamLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonphamLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
