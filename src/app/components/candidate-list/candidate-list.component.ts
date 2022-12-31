import {Component, Input, OnInit} from '@angular/core';
import {Candidate} from "../../services/backend/position/candidate.model";

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates: Candidate[] = [];
  @Input() positionId: any;

  constructor() { }

  ngOnInit(): void {

  }

}
