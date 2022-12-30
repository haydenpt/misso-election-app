import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authorized: boolean = false;
  loggedIn = new EventEmitter<boolean>();

  constructor() { }

}
