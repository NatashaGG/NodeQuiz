/*
=====================================
  ; Title: four-zero-four.component.spec.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: four-zero-four.component.spec.ts
======================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourZeroFourComponent } from './four-zero-four.component';

describe('FourZeroFourComponent', () => {
  let component: FourZeroFourComponent;
  let fixture: ComponentFixture<FourZeroFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourZeroFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourZeroFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
