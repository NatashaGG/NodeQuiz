/*
=====================================
  ; Title: quiz-presentations.component.spec.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: quiz-presentations.component.spec.ts
======================================
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPresentationsComponent } from './quiz-presentations.component';

describe('QuizPresentationsComponent', () => {
  let component: QuizPresentationsComponent;
  let fixture: ComponentFixture<QuizPresentationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPresentationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
