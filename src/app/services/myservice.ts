import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  currentDate:any;
  constructor() { }
  showTodayDate()
  {
    this.currentDate=new Date()
    return this.currentDate
  }
}
