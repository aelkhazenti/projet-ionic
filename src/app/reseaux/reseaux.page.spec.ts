import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauxPage } from './reseaux.page';

describe('ReseauxPage', () => {
  let component: ReseauxPage;
  let fixture: ComponentFixture<ReseauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
