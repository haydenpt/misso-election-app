import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  navList = [
    {name: 'Home', icon: 'home', destination: 'home'},
    {name: 'Positions', icon: 'assignment', destination: 'positions'},
    // {name: 'Candidates', icon: 'groups', destination: 'candidates'},
    {name: 'My Account', icon: 'edit', destination: 'my-account'},
    {name: 'Log Out', icon: 'exit_to_app', destination: 'logout'},
  ]

  constructor(private router : Router,
              private authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  onNavigate(destination : string) {
    this.router.navigate([destination]);
    if (destination === 'logout') {
      this.authService.logout();
    }
  }
}
