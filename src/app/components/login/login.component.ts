import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService, AlertType} from "../../services/alert/alert.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = new FormControl('test@test', [Validators.required, Validators.email]);
  password = new FormControl('123', [Validators.required]);

  authorized: boolean = false;

  loginMessage: string = '';
  messageType: AlertType = '';
  showMessage: boolean = false;

  constructor(private router: Router,
              private alertService: AlertService,
              private authService: AuthenticationService) {
  }

  onLogin() {
    console.log('in onLogin()');
    this.showMessage = true;
    if (this.isAuthorized()) {
      this.loginMessage = 'successful';
      setTimeout(() => {
        this.router.navigate(['home']);
        this.authService.loggedIn.emit(true);
        this.showMessage = false;
      }, 1000)
    } else {
      this.loginMessage = 'failed';
    }
    console.log(this.loginMessage)
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
    return this.email.hasError('email') ? 'Please enter a valid email' : '';
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'Please enter your password' : '';
  }

  isValid(): boolean {
    // Validate form to enable login button
    return !(this.email.invalid || this.password.invalid);
  }

  isAuthorized() {
    // TODO Make call to database to validate user credentials
    this.authorized = this.isValid() && this.email.value === 'test@test' && this.password.value === '123';
    if (this.authorized) {
      this.loginMessage = 'Login successful'
      this.messageType = 'success';
    } else {
      this.loginMessage = 'Login failed';
      this.messageType = 'error';
    }
    this.showMessage = true;
    this.alertService.alert(this.authorized ? 'success' : 'error', this.loginMessage)
    return this.authorized;
  }

  onInputClick() {
    // Clear login message when user click on the text box
    this.loginMessage = '';
    this.showMessage = false;
  }


}
