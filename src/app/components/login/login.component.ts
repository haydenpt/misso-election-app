import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AlertService, AlertType} from "../../services/alert/alert.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = new FormControl('test@test', [Validators.required, Validators.email]);
  password = new FormControl('123', [Validators.required]);

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


  onLogin() {
    console.log('in onLogin()');
    this.alertService.show();

    if (this.authService.authenticate(<string>this.email.value, <string>this.password.value)) {
      this.alertService.alert('success', 'successful');

      setTimeout(() => {
        this.router.navigate(['home']);
      }, 1000)

    } else {
      this.alertService.alert('error', 'failed');
    }
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
