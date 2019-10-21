/*
=====================================
  ; Title: quiz-presentations.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 20 2019
  ; Description: quiz-presentations.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quiz-presentations',
  templateUrl: './quiz-presentations.component.html',
  styleUrls: ['./quiz-presentations.component.css']
})
export class QuizPresentationsComponent implements OnInit {

  quiz: any;
  urlParamId: string;
  errorMessage: string;
  presentationImages = [
    {name: '1', image: '1.jpg'},
    {name: '2', image: '2.jpg'},
    {name: '3', image: '3.jpg'},
    {name: '4', image: '4.jpg'},
    {name: '5', image: '5.jpg'},
    {name: '6', image: '6.jpg'},
    {name: '7', image: '7.jpg'},
    {name: '8', image: '8.jpg'},
    {name: '9', image: '9.jpg'},
    {name: '10', image: '10.jpg'},
    {name: '11', image: '11.jpg'},
    {name: '12', image: '12.jpg'},
  ]

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.urlParamId = route.snapshot.paramMap.get('quizId');

    this.http.get('/api/quizzes/' + this.urlParamId).subscribe(res => {
      if (res) {
        return this.quiz = res;
      } else {
        return this.errorMessage = "WELCOME TO THE LAND OF NO QUIZZES";
      }
    })
  }

  goToQuizPage(id) {
    this.router.navigateByUrl('/quiz-selection/quiz/' + id);
  }

  ngOnInit() {
  }
}