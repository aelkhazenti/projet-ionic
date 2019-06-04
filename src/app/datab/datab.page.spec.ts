import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabPage } from './datab.page';

describe('DatabPage', () => {
  let component: DatabPage;
  let fixture: ComponentFixture<DatabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
