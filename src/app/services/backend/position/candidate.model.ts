export class Candidate {
  candidateId: string;
  submissionId: string;
  positionId: string;
  createOn: string;


  constructor(candidateId: string, submissionId: string, positionId: string, createOn: string) {
    this.candidateId = candidateId;
    this.submissionId = submissionId;
    this.positionId = positionId;
    this.createOn = createOn;
  }
}
