import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticationStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isAuthenticated: Observable<boolean> = this.authenticationStatus.asObservable();

  setAuthenticationStatus(newState:boolean) {
    this.authenticationStatus.next(newState);
  }

  
}
