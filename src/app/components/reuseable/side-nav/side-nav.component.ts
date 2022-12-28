import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  navList = [
    {name: 'Home', icon: 'home', destination: 'home'},
    {name: 'Prompts', icon: 'assignment', destination: 'prompts'},
    {name: 'Candidates', icon: 'groups', destination: 'candidates'},
    {name: 'My Account', icon: 'edit', destination: 'myaccount'},
    {name: 'Log Out', icon: 'exit_to_app', destination: 'login'},
  ]

  constructor(private router : Router) {
  }

  ngOnInit(): void {
  }

  onNavigate(destination : string) {
    this.router.navigate([destination]);
  }
}
