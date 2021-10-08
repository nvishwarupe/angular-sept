import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  isLoggedIn : boolean = false;
  constructor() { }

  login(username: string, password: string){
    if((username === 'admin') &&( password === 'admin'))
    {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout(){
    this.isLoggedIn = false;
  }

  canActivate() : boolean{
    return this.isLoggedIn;
  }

   getIsLoggedIn (): boolean {
    return this.isLoggedIn;
  }
   

}
