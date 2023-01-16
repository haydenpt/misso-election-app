import {Component, HostListener, OnInit} from '@angular/core';
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
    {name: 'Log Out', icon: 'exit_to_app', destination: 'login'},
  ]

  isMobile: boolean = false;
  navOpen: boolean = true;
  screenBreakpoint: number = 1024;

  screenHeight: number | undefined;
  screenWidth: number | undefined;

  constructor(private router: Router,
              private authService: AuthenticationService) {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.onViewChange(this.screenWidth);
  }

  ngOnInit(): void {
  }

  onViewChange(width: number) {
    if (width <= this.screenBreakpoint) {
      this.isMobile = true;
      this.navOpen = false;
    }
    if (width > this.screenBreakpoint) {
      this.isMobile = false;
      this.navOpen = true;
    }
  }

  onToggleMenu() {
    this.navOpen = !this.navOpen;
  }

  closeMenu() {
    this.navOpen = false;
  }

  onNavigate(destination: string) {
    this.router.navigate([destination]);
    if (destination === 'login') {
      this.authService.logout();
    }
  }
}
