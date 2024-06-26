import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public _router:Router,
    private authService:AuthService) { }
  
  ngOnInit(): void {

 }
  
 logOut() {
   sessionStorage.clear();
   this.authService.setAuthenticationStatus(false);
   this._router.navigate(['./logout']);
 }

}
