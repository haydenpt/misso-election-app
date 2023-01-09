import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AlertService} from "../alert/alert.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginStateInLocalStorage: string = 'logged_in';
  userData: any;

  localStorageUser: string = 'user'
  localStorageUserType: string = 'user_type'

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
        localStorage.setItem(this.localStorageUser, JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem(this.localStorageUser)!);
      } else {
        // When logout
        // localStorage.setItem(this.localStorageUser, 'null');
        // JSON.parse(localStorage.getItem(this.localStorageUser)!);
        localStorage.clear();
      }
    });
  }

  isLoggedIn() {
    return localStorage.getItem(this.localStorageUser) !== null;
  }

  login(email: string, password: string) {
    this.alertService.hide();
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // set user type to determine basic auth credentials
        localStorage.setItem(this.localStorageUserType, environment.apiAdmin.email.includes(<string>result.user?.email) ? 'admin' : 'member');
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
      this.alertService.alert('info', 'You have been logged out.')
    });

  }


}
