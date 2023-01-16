export class AccountInfo {
  psid: number;
  firs_name: string;
  last_name: string;
  major: string;
  classification: string;
  total_points: number;

  constructor(psid: number, firs_name: string, last_name: string, major: string, classification: string, total_points: number) {
    this.psid = psid;
    this.firs_name = firs_name;
    this.last_name = last_name;
    this.major = major;
    this.classification = classification;
    this.total_points = total_points;
  }
}
