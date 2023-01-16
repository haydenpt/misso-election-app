import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyAccount} from "./my-account.model";

@Injectable({
  providedIn: 'root'
})
export class MyAcountService {
  static myAccount: MyAccount;

  constructor(private http: HttpClient) {
  }

  // Get candidate list for each position
  getMyAccountInfo(psid: number) {
    return this.http.get<MyAccount[]>(`http://localhost:8080/my-account/${psid}`);
  }
}
