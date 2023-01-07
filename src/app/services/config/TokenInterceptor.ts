import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = environment.apiUser.username;
    const password = environment.apiUser.password;
    const modifiedReq = req.clone({
      headers: req.headers.set(
        'Authorization', `Basic ${window.btoa(username + ':' + password)}`),
    });
    return next.handle(modifiedReq);
  }
}
