import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  @Input() accountInfo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
