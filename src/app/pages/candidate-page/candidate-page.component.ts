import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-candidate-page',
  templateUrl: './candidate-page.component.html',
  styleUrls: ['./candidate-page.component.css']
})
export class CandidatePageComponent implements OnInit {
  title: string = '';
  position: string = '';

  constructor(private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.position = this.activeRoute.snapshot.params['position'].replace('-', ' ');
    this.title = `Candidates - ${this.position}`;
  }

  onBack() {
    this.router.navigate(['positions']);
  }
}
