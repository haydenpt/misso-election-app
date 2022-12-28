import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('test@test', [Validators.required, Validators.email]);
  password = new FormControl('123', [Validators.required]);

  authorized : boolean = false;

  loginMessage: string = '';
  showMessage: boolean = false;

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }


  onLogin() {
    console.log(this.email.value + " " + this.password.value);
    if (this.isAuthorized()) {
      this.router.navigate(['home']);

    } else {
      console.log('log in failed');
    }
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
    } else {
      this.loginMessage = 'Login failed';
    }
    this.showMessage = true;
    return this.authorized;
  }

  onInputClick() {
    // Clear login message when user click on the text box
    this.loginMessage = '';
    this.showMessage = false;
  }
}
