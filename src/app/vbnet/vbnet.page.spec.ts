import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbnetPage } from './vbnet.page';

describe('VbnetPage', () => {
  let component: VbnetPage;
  let fixture: ComponentFixture<VbnetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbnetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbnetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
