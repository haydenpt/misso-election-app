import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AlertType} from "../../services/alert/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnChanges {
  @Input() message: string = '';
  @Input() type: AlertType = '';

  backgroundColor: string = '';
  textColor: string = '';


  ngOnChanges(changes: SimpleChanges) {
    this.message = changes['message'].currentValue;
    this.type = changes['type'].currentValue;
    this.getAlert();
    console.log('in onChanges')
  }

  getAlert() {
    switch (this.type) {
      case "success":
        this.setAlertStyle('green', 'white');
        break;
      case "error":
        this.setAlertStyle('red', 'white');
        break;
      case "warning":
        this.setAlertStyle('yellow', 'black');
        break;
      case "info":
        this.setAlertStyle('blue', 'white');
        break;
      case "basic":
        this.setAlertStyle('white', 'black');
        break;
      default:
        this.setAlertStyle('white', 'black')
    }
  }

  setAlertStyle(backgroundColor: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
  }
}
