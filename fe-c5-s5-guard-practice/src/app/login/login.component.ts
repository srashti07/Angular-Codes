import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tourGuideCode: string = "";
  constructor(private authService: AuthService, private router: RouteService) { }

  validateTourGuideCode(){
    this.authService.login(this.tourGuideCode);
    if(this.authService.isLoggedIn){
      this.router.navigateToTourRequestsView();
    }
  }
  ngOnInit(): void {
  }

}
