/*
=====================================
  ; Title: signin.component.ts
  ; Author: Natasha Whitmer
  ; Updated Date: October 7 2019
  ; Description: signin.component.ts
======================================
*/

import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userId: string;

  constructor(route: ActivatedRoute) {
    this.userId = route.snapshot.paramMap.get('employeeId');
  }

  ngOnInit() {
  }

}
