import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private username: string | undefined;
  private password: string | undefined;

  constructor(private authService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.checkUserType();
    const modifiedReq = req.clone({
      headers: req.headers.set(
        'Authorization', `Basic ${window.btoa(this.username + ':' + this.password)}`),
    });
    return next.handle(modifiedReq);
  }

  checkUserType(): void {
    // Check user type to determin basic auth credentials
    if(localStorage.getItem(this.authService.localStorageUserType) === 'admin') {
      this.username = environment.apiAdmin.username;
      this.password = environment.apiAdmin.password;
    }
    else {
      this.username = environment.apiUser.username;
      this.password = environment.apiUser.password;
    }
  }
}
