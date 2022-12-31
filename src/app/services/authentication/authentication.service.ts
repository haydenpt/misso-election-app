import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginSession: string = 'loggedIn';

  constructor() {
  }

  authenticate(username: string, password: string) {
    // TODO Make call to database to validate user credentials or use Firebase
    if (username === 'test@test' && password === '123') {
      this.login(username);
      return true;
    }
    return false;
  }

  sessionLoggedIn() {
    return sessionStorage.getItem(this.loginSession) !== null;

  }

  login(username: string) {
    sessionStorage.setItem(this.loginSession, username);
  }

  logout() {
    sessionStorage.clear();
  }


}
