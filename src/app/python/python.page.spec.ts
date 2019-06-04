import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonPage } from './python.page';

describe('PythonPage', () => {
  let component: PythonPage;
  let fixture: ComponentFixture<PythonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
