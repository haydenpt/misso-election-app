import { Component, OnInit } from '@angular/core';
import {MyAcountService} from "../../services/backend/my-account/my-acount.service";
import {MyAccount} from "../../services/backend/my-account/my-account.model";


@Component({
  selector: 'app-my-account-page',
  templateUrl: './my-account-page.component.html',
  styleUrls: ['./my-account-page.component.css']
})
export class MyAccountPageComponent implements OnInit {
  title: string = 'My Account';
  accountInfo: MyAccount[] = [];

  constructor(private accountService: MyAcountService) { }

  ngOnInit(): void {
    console.log('in my account page')
    this.accountService.getMyAccountInfo(1992259).subscribe((data) => {
      this.accountInfo = data;
    })
  }

}
