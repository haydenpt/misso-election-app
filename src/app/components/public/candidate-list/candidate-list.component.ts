import {Component, OnInit} from '@angular/core';
import {Candidate} from "../../../services/backend/position/candidate.model";
import {PositionService} from "../../../services/backend/position/position.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];
  positionId: string = '';

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.positionId = params['id'];
    })
    this.candidates = PositionService.candidates.slice().filter(candidate =>
      candidate.positionId === this.positionId
    );
    console.log(this.candidates.length)
  }

  ngOnInit(): void {

  }

}
