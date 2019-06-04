import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CppPage } from './cpp.page';

describe('CppPage', () => {
  let component: CppPage;
  let fixture: ComponentFixture<CppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
