import {Component, OnInit} from '@angular/core';
import {Position} from "../position.model";

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
  positions: Position[] = [
    {
      title: 'Technology',
      team: 'Education',
      rank: 'Team Lead',
      icon: 'settings',
      promptUrl: 'https://misso.org'
    },
    {
      title: 'Java',
      team: 'Education',
      rank: 'Officer',
      icon: 'local_cafe',
      promptUrl: 'https://misso.org'
    },
    {
      title: 'Database',
      team: 'Education',
      rank: 'Team Lead',
      icon: 'settings',
      promptUrl: 'https://misso.org'
    },
    {
      title: 'Transaction Processing',
      team: 'Education',
      rank: 'Officer',
      icon: 'local_cafe',
      promptUrl: 'https://misso.org'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
