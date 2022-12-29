import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-position-item',
  templateUrl: './position-item.component.html',
  styleUrls: ['./position-item.component.css']
})
export class PositionItemComponent implements OnInit {
  @Input() position: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onViewPrompt(promptUrl: string) {
    window.open(promptUrl);
  }

  onApply(title: string) {
    console.log('Applied to ' + title);
  }
}
