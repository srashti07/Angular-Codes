import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isUserLoggedIn = false;

  login(email:string, password:string){
    this.isUserLoggedIn = true;
  }

  logout(){
    this.isUserLoggedIn = false;
  }

  isLoggedIn(){
    return this.isUserLoggedIn;
  }
}
