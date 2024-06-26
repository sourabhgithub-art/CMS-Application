import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlserviceService {

  public apiURL:string="http://localhost:3000/index/"

  constructor() { }
}
