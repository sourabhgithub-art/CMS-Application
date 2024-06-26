import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(private _http: HttpClient) { 
    console.log("hiiii");
  }

  public output:any

  ngOnInit(): void {
  //   console.log(".....")
    
  }

  onClickSubmit(userDetails:any)
  {
    console.log(userDetails)
    this._http.post( environment.baseUrl+ "cmd/insertUsers",userDetails).subscribe((data:any)=>{
      
      Swal.fire({
        position:'center',
        icon:'success',
        title:'Your are Successfully Registerd....!',
        showCancelButton : false,
        timer : 1500
      })
 },(err:HttpErrorResponse) => {
  Swal.fire({
    position:'center',
    icon:'error',
    title: err.error,
    showCancelButton : false,
    timer : 1500
  })
 })  
    
   
  }

  resetUserForm(usersignup:NgForm)
  {
    usersignup.resetForm()
  }

}
