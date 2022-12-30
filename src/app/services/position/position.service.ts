import {Injectable} from '@angular/core';
import {Position} from "./position.model";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private positions: Position[] = [
    {
      id: 'TECH',
      title: 'Technology',
      team: 'Education',
      rank: 'Team Lead',
      icon: 'settings',
      promptUrl: 'https://misso.org'
    },
    {
      id: 'JAVA',
      title: 'Java',
      team: 'Education',
      rank: 'Officer',
      icon: 'local_cafe',
      promptUrl: 'https://misso.org'
    },
    {
      id: 'DATA',
      title: 'Database',
      team: 'Education',
      rank: 'Team Lead',
      icon: 'settings',
      promptUrl: 'https://misso.org'
    },
    {
      id: 'TRAN',
      title: 'Transaction Processing',
      team: 'Education',
      rank: 'Officer',
      icon: 'local_cafe',
      promptUrl: 'https://misso.org'
    }
  ];

  getAllPositions() {
    return this.positions.slice();
  }
}
