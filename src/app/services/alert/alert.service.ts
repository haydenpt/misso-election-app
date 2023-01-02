import {Injectable} from '@angular/core';


export type AlertType = '' | 'success' | 'info' | 'error' | 'warning' | 'basic'

// Color: Green | Blue | Red | Yellow | White

@Injectable({
  providedIn: 'root'
})

export class AlertService {
  message: string = '';
  type: AlertType = '';
  hidden: boolean = true;

  alert(type: AlertType, message: string) {
    this.message = message;
    this.type = type;
    this.hidden = false;
    console.log('In AlertService')
  }

  hide() {
    this.hidden = true;
    this.message = '';
    this.type = '';
  }


}
