import {Component, OnInit} from '@angular/core';
import {Position} from "../../../../services/position/position.model";
import {PositionService} from "../../../../services/position/position.service";

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css'],
  providers: [PositionService]
})
export class PositionListComponent implements OnInit {
  positions: Position[] = [];
  constructor(private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.positions = this.positionService.getPositions();
  }

}
