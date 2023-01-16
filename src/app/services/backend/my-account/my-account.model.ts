export class MyAccount {
  memberId: number;
  firstName: string;
  lastName: string;
  major: string;
  classification: string;
  totalPoints: number;


  constructor(memberId: number, firstName: string, lastName: string, major: string, classification: string, totalPoints: number) {
    this.memberId = memberId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.major = major;
    this.classification = classification;
    this.totalPoints = totalPoints;
  }
}
