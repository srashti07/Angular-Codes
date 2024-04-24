import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(tourGuideCode: string){
    this.isLoggedIn = tourGuideCode === 'TG@2022';
  }

  logout(){
    this.isLoggedIn = false;
  }
}
