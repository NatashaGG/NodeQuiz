/*
=====================================
  ; Title: app.component.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: app.component.ts
======================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'NodeQuiz';
}