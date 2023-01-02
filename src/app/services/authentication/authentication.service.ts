import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AlertService} from "../alert/alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginSession: string = 'loggedIn';
  userData: any;

  sessionUser: string = 'user'

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertService: AlertService
  ) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  sessionLoggedIn() {
    return sessionStorage.getItem(this.loginSession) !== null;

  }

  login(email: string, password: string) {
    this.alertService.hide();
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        sessionStorage.setItem(this.sessionUser, <string>result.user?.email)
        sessionStorage.setItem(this.loginSession, <string>result.user?.uid);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.alertService.alert('success', 'success')
            setTimeout(() => this.router.navigate(['home']),1000)
          }
        });
      })
      .catch(() => {
        this.alertService.alert('error', 'User not found.')
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      sessionStorage.clear();
    });

  }


}
