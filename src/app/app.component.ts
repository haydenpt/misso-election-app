import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app-frontend';
  loggedIn : boolean = false;

  constructor(private authService: AuthenticationService) {
    this.authService.loggedIn.subscribe((loginStatus) => {
      this.loggedIn = loginStatus;
    })
  }

}
