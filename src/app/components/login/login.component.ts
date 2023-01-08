import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService, AlertType} from "../../services/alert/alert.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl(environment.testUser.email, [Validators.required, Validators.email]);
  password = new FormControl(environment.testUser.password, [Validators.required]);

  loginForm: FormGroup;

  constructor(private router: Router,
              private alertService: AlertService,
              private authService: AuthenticationService) {
    this.loginForm = new FormGroup({
      'email': this.email,
      'password': this.password
    })
  }

  ngOnInit(): void {
    this.loginForm.statusChanges.subscribe(() => {
      this.alertService.hide();
    })
  }


  async onLogin() {
    console.log('in onLogin()');
    await this.authService.login(<string>this.email.value, <string>this.password.value);
  }

  getEmailError() {
    return this.email.hasError('email') || this.email.hasError('required') ? 'Please enter a valid email' : '';
  }

  getPasswordError() {
    return this.password.hasError('required') ? 'Please enter your password' : '';
  }

  isValid(): boolean {
    // Validate form to enable login button
    return (this.email.valid && this.password.valid);
  }

  getMessage() {
    return this.alertService.message;
  }

  getType(): AlertType {
    return this.alertService.type;
  }

  getHidden() {
    return this.alertService.hidden;
  }


}
