import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app-frontend';
  loggedIn : boolean = true;
  path: string = '';

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.loggedIn = this.authService.isLoggedIn();
    // this.authService.loggedInState.subscribe((loginStatus) => {
    //   this.loggedIn = loginStatus;
    // })
  }

  loginPath() {
    return ('/login' === this.router.url);
  }

}
