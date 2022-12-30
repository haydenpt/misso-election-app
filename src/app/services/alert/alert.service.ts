import {Injectable} from '@angular/core';


export type AlertType = '' | 'success' | 'info' | 'error' | 'warning' | 'basic'

// Color: Green | Blue | Red | Yellow | White

@Injectable({
  providedIn: 'root'
})

export class AlertService {
  alert() {
    console.log('In AlertService')
  }


}
