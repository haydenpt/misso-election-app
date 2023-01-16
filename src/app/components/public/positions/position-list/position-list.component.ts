import {Component, HostListener, OnInit} from '@angular/core';
import {Position} from "../../../../services/backend/position/position.model";
import {PositionService} from "../../../../services/backend/position/position.service";
import {ScreenInterface} from "../../../../shared/screen/ScreenInterface";

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css'],
  providers: [PositionService]
})
export class PositionListComponent implements OnInit, ScreenInterface {
  positions: Position[] = [];
  teams = [
    {name: "Executive", position: Array()},
    {name: "Education", position: Array()},
    {name: "Corporate Relations", position: Array()},
    {name: "Public Relations", position: Array()},
  ];
  teamNames: string[] = ["Executive", "Education'"]

  columns: number = 3;
  screenHeight = window.innerHeight;
  screenWidth = window.innerWidth;

  screenSize = {
    desktop: 1200,
    laptop: 769,
    tablet: 481,
    mobile: 320
  }
  isMobile = window.innerHeight <= 800;

  constructor(private positionService: PositionService) {
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.positionService.getAllPositions().subscribe((positions) => {
      this.positions = positions.slice();

      for (let i = 0; i < this.teams.length; i++) {
        for (let j = 0; j < this.positions.length; j++) {
          if (this.positions[j].team.toLowerCase() === this.teams[i].name.toLowerCase()) {
            this.teams[i].position.push(this.positions[j]);
          }
        }
      }
      console.log(this.teams);
    });
    this.positionService.getAllCandidates();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.onViewChange(this.screenWidth);
  }

  onViewChange(width: number) {
    if (width >= this.screenSize.desktop) {
      this.setColumns(4);
    } else if (width >= this.screenSize.laptop) {
      this.setColumns(3);
    } else if (width >= this.screenSize.tablet) {
      this.setColumns(2);
    } else {
      this.setColumns(1);
    }
  }

  setColumns(count: number): void {
    this.columns = count;
  }
}
