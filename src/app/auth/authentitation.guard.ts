import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service'
@Injectable({
  providedIn: 'root'
})
export class AuthentitationGuard implements CanActivate {
  isLogin:boolean = false;
  constructor(private service: LoginService,private myRoute: Router) {
    this.isLogin = this.service.isLogin
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isLogin){
      if (state.url.includes('/data')) {
        return true
      } else {
        return false;
      }
    }else {
      this.myRoute.navigate(['/login']);
      return true;
    }
  }
  
}
