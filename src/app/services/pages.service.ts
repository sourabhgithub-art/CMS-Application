import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http:HttpClient) { }

  getPages() {
    return this.http.get(environment.baseUrl + "cms/getPages");
  }

  insertPage(page:any) {
    return this.http.post(environment.baseUrl + "cms/insertPage" , page);
  }
  

  deletePage(ids:Array<String>) {
    return this.http.delete(environment.baseUrl + "cms/deletePage"  , { body : {"ids": ids} } );
  }
  
  
}
