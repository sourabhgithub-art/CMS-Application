import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PagesService } from '../services/pages.service';

@Component({
  selector: 'app-newpages',
  templateUrl: './newpages.component.html',
  styleUrls: ['./newpages.component.css']
})
export class NewpagesComponent implements OnInit {

  constructor(private _http:HttpClient , private pagesService: PagesService) { }

  ngOnInit(): void {
    
  }
  
  onClickSubmit(userDetails:any)
  {
    console.log(userDetails)
    this.pagesService.insertPage(userDetails).subscribe((data:any)=>{
    // Swal.fire('Any fool can use a computer')
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your are Registered Successfully....!',
      showConfirmButton: true,
      timer: 2500
    })
     
  }, (err:HttpErrorResponse)=> {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Failed Registartion',
      showConfirmButton: true,
      timer: 2500
    })
  });
}
  
  resetUserForm(usersignup: NgForm) {
    usersignup.resetForm();
  }
 

}
