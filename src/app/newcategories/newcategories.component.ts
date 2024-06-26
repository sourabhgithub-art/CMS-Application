import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../services/shared.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-newcategories',
  templateUrl: './newcategories.component.html',
  styleUrls: ['./newcategories.component.css']
})
export class NewcategoriesComponent implements OnInit {

  
  categories = new FormGroup({
    categoryname : new FormControl('')
  })
  listOfCategories: any[] = [];
  lists: any[] = []
  

constructor( public matdialogref:MatDialogRef<NewcategoriesComponent>, public shared: SharedService, public http:HttpClient) { }
onSubmit(){
  //this.http.post('http://localhost:3000/userSignUp',userDetails)
  console.log('Form data', this.categories.value)
 this.listOfCategories.push(this.categories.value)
  this.shared.listOfCategories = this.listOfCategories
  this.categories.reset()
  console.log('data',this.listOfCategories)
  
}
//message =  this.listOfCategorie



ngOnInit(): void {

  // this.shared.setMessage(this.message)
  // console.log(this.message)

}

onClose() {
 this.matdialogref.close()

}


//  onReset(){
//    this.categories.reset()
//  }



}

  



