import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

constructor(private authservice: AuthService,
            private router: Router) { console.log('test'); }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authservice.loggedin()) {  return true; }
    this.authservice.redirecturl = state.url;
    this.router.navigate([''])  ;
    return false;
  }
}
