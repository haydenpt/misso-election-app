import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prompt-list-page',
  templateUrl: './prompt-list-page.component.html',
  styleUrls: ['./prompt-list-page.component.css']
})
export class PromptListPageComponent implements OnInit {
  title: string = 'Available Positions';

  constructor() { }

  ngOnInit(): void {
  }

}
