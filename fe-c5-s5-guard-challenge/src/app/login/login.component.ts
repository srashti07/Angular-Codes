import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ="";
  password: string ="";
  constructor(private authService: AuthService, private routeService: RouterService) { }

  ngOnInit(): void {
  }

  validateUser(){
    this.authService.login(this.email, this.password);
    const isValidUser = this.authService.isLoggedIn();
    if(isValidUser){
      this.routeService.navigateToNotesView();
    }
  }

}
