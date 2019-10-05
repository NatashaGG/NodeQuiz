import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    });
  }

  login(){
    const employeeId = this.form.controls['employeeId'].value;


   this.http.get('/api/employeeIds/' + employeeId).subscribe(res => {
    if (res) {
      this.cookieService.set('isAuthenticated', 'true', 1);
      this.router.navigate(['/sign']);
    } else {
      this.errorMessage = "Invalid Id.  Please try again.";
    }
  })

  }

}