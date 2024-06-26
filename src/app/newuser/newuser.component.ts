import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  apiURL:string="http://localhost:3000/webapi/userSignUp"

  constructor(private _http:HttpClient) { }
  public output:any

  ngOnInit(): void {
  }
  onClickSubmit(userDetails:any)
  {
    console.log(userDetails)
    this._http.post(this.apiURL,userDetails).subscribe((data:any)=>{
      
      this.output=data.response

      
    })  
    
    Swal.fire({
      position:'center',
      icon:'success',
      title:'Your are Successfully Registerd....!',
      showCancelButton : false,
      timer : 1500
    })
  }

  resetUserForm(usersignup:NgForm)
  {
    usersignup.resetForm()
  }


}
