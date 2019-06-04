import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoPage } from './algo.page';

describe('AlgoPage', () => {
  let component: AlgoPage;
  let fixture: ComponentFixture<AlgoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
