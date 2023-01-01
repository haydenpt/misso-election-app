import {Injectable} from '@angular/core';
import {Position} from "./position.model";
import {HttpClient} from "@angular/common/http";
import {Candidate} from "./candidate.model";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  static candidates: Candidate[] = [];

  constructor(private http: HttpClient) {
  }

  getAllPositions() {
    return this.http.get<Position[]>('http://localhost:8080/positions/get-all');
  }

  // Get candidates from all positions
  getAllCandidates() {
    this.http.get<Candidate[]>(`http://localhost:8080/candidates`).subscribe(data => {
      PositionService.candidates = data.slice();
    });
  }

  // Get candidate list for each position
  getPositionCandidates(positionId: string) {
    return this.http.get<Candidate[]>(`http://localhost:8080/candidates/${positionId}`);
  }
}
