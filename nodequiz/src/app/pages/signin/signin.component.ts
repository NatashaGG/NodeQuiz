/*
=====================================
  ; Title: signin.component.ts
  ; Author: Natasha Whitmer, W3Schools.com
  ; Updated Date: October 7 2019
  ; Description: signin.component.ts
======================================
*/

import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookie: CookieService, private fb: FormBuilder, private http: HttpClient) {  }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])]
    });
  }

  submit() {
    const employeeId = this.form.controls['employeeId'].value;

    this.http.get('/api/employees/' + employeeId).subscribe(res => {
      if (res) {
        this.cookie.set('isAuthenticated', 'true', 7);
        this.cookie.set('employeeId', employeeId, 7);
        this.router.navigate(['/quiz-selection']);
      } else {
        this.errorMessage = "Please try again";
      }
    })
  }
}
