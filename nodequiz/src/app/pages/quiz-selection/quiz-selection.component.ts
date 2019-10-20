/*
=====================================
  ; Title: quiz-selection.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: quiz-selection.component.ts
======================================
*/
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz-selection',
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.css']
})
export class QuizSelectionComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  errorMessage: string;
  quizzes: any;

  ngOnInit() {
  
  this.http.get('/api/quizzes/all').subscribe(res => {
    if (res) {
      return this.quizzes = res;
    } else {
      return this.errorMessage = "You have traveled to the realm of no quizzes";
    }
  })
  }

  presentationPage(id) {
    this.router.navigateByUrl('/dashboard/presentation/' + id);
  }

}
