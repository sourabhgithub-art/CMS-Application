import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlserviceService } from '../urlservice.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  

  componentName="login"
  public loginFormGroup:any = null;
  private isAuthenticated : Subscription = new Subscription();
  constructor(private _router:Router,private _http:HttpClient, private _url:UrlserviceService ,
    private fb:FormBuilder,private authService:AuthService) { }
  



  ngOnInit(): void {

    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,Validators.minLength(9)]
    });
  
   }
   get email()
   {
     return this.loginFormGroup.get('email')
   }

   get password()
   {
     return this.loginFormGroup.get('password')
   }
  

public loginUser() {

  const body = {
    "email" : this.loginFormGroup.controls['email'].value,
     "password":this.loginFormGroup.controls['password'].value
 }
 // console.log(body)
  this._http.post(environment.baseUrl+'cms/login', body).subscribe({
    next: (res) => {

      sessionStorage.setItem('user', JSON.stringify(res))
      Swal.fire("Success", "", 'success')
      this.authService.setAuthenticationStatus(true);
      this._router.navigate(['/dashboard']);
    }, error: (err:HttpErrorResponse)  => {
      console.log(err)
      Swal.fire("Failed", err.error.msg, 'error')
    }
  });

  
}

 
   
   
   
 

}

