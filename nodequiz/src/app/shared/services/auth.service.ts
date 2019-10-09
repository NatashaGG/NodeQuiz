import { Injectable } from '@angular/core';
import { SigninComponent } from '../../pages/signin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  logout() :void {
    localStorage.setItem('isSignedIn', 'false');
    localStorage.removeItem('token');
  }
}
