import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaPage } from './java.page';

describe('JavaPage', () => {
  let component: JavaPage;
  let fixture: ComponentFixture<JavaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
