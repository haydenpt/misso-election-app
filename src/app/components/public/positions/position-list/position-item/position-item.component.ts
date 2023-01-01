import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Position} from "../../../../../services/backend/position/position.model";

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

  onViewCandidate(position: Position) {
    this.router.navigate([this.router.url, this.formatUrlParam(position.title)], {queryParams: {id: position.positionId.toLowerCase()}});
  }

  formatUrlParam(param: string) {
    return param.toLowerCase().replace(' ', '-');
  }
}
