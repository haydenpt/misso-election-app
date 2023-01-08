import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem(this.authService.localStorageUser) != null) {
      console.log(localStorage.getItem(this.authService.localStorageUser))
      return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }

  }
}
