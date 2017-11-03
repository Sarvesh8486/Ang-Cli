import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsPopupComponent } from './params-popup.component';

describe('ParamsPopupComponent', () => {
  let component: ParamsPopupComponent;
  let fixture: ComponentFixture<ParamsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
