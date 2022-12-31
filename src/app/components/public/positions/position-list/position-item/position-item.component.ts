import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-position-item',
  templateUrl: './position-item.component.html',
  styleUrls: ['./position-item.component.css']
})
export class PositionItemComponent implements OnInit {
  @Input() position: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onViewPrompt(promptUrl: string) {
    window.open(promptUrl);
  }

  onApply(title: string) {
    console.log('Applied to ' + title);
  }

  onViewCandidate(position: string) {
    console.log(position)
    this.router.navigate([this.router.url, this.formatUrlParam(position)])
  }

  formatUrlParam(param: string) {
    return param.toLowerCase().replace(' ', '-');
  }
}
