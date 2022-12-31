import {Injectable} from '@angular/core';
import {Position} from "./position.model";
import {HttpClient} from "@angular/common/http";
import {Candidate} from "./candidate.model";

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private http: HttpClient) {}

  getAllPositions() {
    return this.http.get<Position[]>('http://localhost:8080/positions/get-all');
  }

  getAllCandidates() {
    return this.http.get<Candidate[]>(`http://localhost:8080/candidates`);
  }
}
