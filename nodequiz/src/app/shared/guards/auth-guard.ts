  /*
=====================================
  ; Title: auth-guards.ts
  ; Author: Natasha Whitmer
  ; Date: October9 2019
  ; Description: auth-guards.ts
======================================
*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private router: Router, private cookieService: CookieService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const isAuthenticated = this.cookieService.get('isAuthenticated');

        if (isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/session/signin']);
            return false;
        }
    }
}
