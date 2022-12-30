import { Injectable } from '@angular/core';


type AlertType = 'success' | 'info' | 'error' | 'warning' | 'basic'
// Color: Green | Blue | Red | Yellow | White

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor() { }

  alert(type: AlertType, message: string) {
    console.log(message);
    console.log(type);
  }
}
