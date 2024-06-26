import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  private routeSub: any;

  constructor(private _http: HttpClient,private route: ActivatedRoute) {
  }
 name:any;
 group:any;
 email:any;
 
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      var selectedId= params['id'];

      this._http.get("http://localhost:3000/webapi/getUserDataById/"+selectedId).subscribe((data:any)=>{
        if(data && data.response)
        {
          this.name = data.response.name;
          this.group = data.response.group;
          this.email = data.response.email;
        }
      //this.userForUpdate = data.response;
      //console.log('userForUpdate',this.userForUpdate);
     
   });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  onClickSubmit(userDetails:any)
  {
    console.log(userDetails)
    
  }

  resetUserForm(usersignup:NgForm)
  {
    usersignup.resetForm()
  }

}
