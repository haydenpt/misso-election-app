import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {AlertService} from "../alert/alert.service";
import {environment} from "../../../environments/environment";
import {LocalStorageService} from "../storage/local-storage.service";
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  localStorageUserKey: string = environment.key.localStorageUserKey;
  localStorageUserTypeKey: string = environment.key.localStorageUserTypeKey;
  localStorageEmailKey: string = environment.key.localStorageEmailKey;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private alertService: AlertService,
    private localStorageService: LocalStorageService
  ) {

    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.localStorageService.setJsonValue(this.localStorageUserKey, this.userData._delegate.accessToken)
      } else {
        // When logout
        localStorage.clear();
      }
    });
  }

  isLoggedIn(): boolean {
    // Compare email in decoded jwt with local storage email to validate access token
    if (this.localStorageService.getJsonValue(this.localStorageUserKey) !== null) {
      const decodedJwt: any = jwt_decode(this.localStorageService.getJsonValue(this.localStorageUserKey));
      const localStorageEmail: string = this.localStorageService.getJsonValue(this.localStorageEmailKey);
      return decodedJwt.email === localStorageEmail;
    }
    return false;
  }

  login(email: string, password: string) {
    this.alertService.hide();
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {

        // Set user type to determine basic auth credentials
        this.localStorageService.setJsonValue(this.localStorageUserTypeKey, environment.apiAdmin.email.includes(<string>result.user?.email) ? 'admin' : 'member');

        // Store user email in local storage to validate login session
        this.localStorageService.setJsonValue(this.localStorageEmailKey, email);

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
    if (localStorage.length > 0) {
      this.alertService.alert('info', 'You have been logged out.')
    }
    this.afAuth.signOut();
  }
}
