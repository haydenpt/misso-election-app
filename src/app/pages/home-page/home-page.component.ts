import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string = 'Home'
  homeActions =  [
    {name: 'Vote', path: ''},
    {name: 'Become a MISSO Officer', path: '/positions'},
    {name: 'View Candidates', path: '/positions'},
    {name: 'Check my eligibility', path: '/my-account'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
