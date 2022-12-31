export class Candidate {
  private candidateId: string;
  private submissionId: string;
  positionId: string;
  private createOn: string;


  constructor(candidateId: string, submissionId: string, positionId: string, createOn: string) {
    this.candidateId = candidateId;
    this.submissionId = submissionId;
    this.positionId = positionId;
    this.createOn = createOn;
  }
}
