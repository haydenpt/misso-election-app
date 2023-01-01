import {Component, OnInit} from '@angular/core';
import {Position} from "../../../../services/backend/position/position.model";
import {PositionService} from "../../../../services/backend/position/position.service";

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
    this.positionService.getAllPositions().subscribe((positions) => {
      this.positions = positions.slice();
    });
    this.positionService.getAllCandidates();

  }

}
