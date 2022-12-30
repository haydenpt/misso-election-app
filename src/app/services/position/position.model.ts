export class Position {
  public title: string;
  public team: string;
  public rank: string;
  public icon: any;
  public promptUrl: string;


  constructor(title: string, team: string, rank: string, icon: any, promptUrl: string) {
    this.title = title;
    this.team = team;
    this.rank = rank;
    this.icon = icon;
    this.promptUrl = promptUrl;
  }
}
