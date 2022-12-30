import {Injectable} from '@angular/core';
import {Position} from "./position.model";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private positions: Position[] = [
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

  getPositions() {
    return this.positions.slice();
  }
}
