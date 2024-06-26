import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { users } from './app/users/users.component'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
    url:string="http://localhost:3000/users"
    getUsers()
    {
      return this.http.get<users>(this.url);
    }
}
