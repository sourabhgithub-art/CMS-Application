import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { NewcategoriesComponent } from '../newcategories/newcategories.component';
import { MatDialog }  from '@angular/material/dialog';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  name:any
  listOfCategories:any[] = []

  constructor(public matdialog:MatDialog,public shared:SharedService) { }

  ngOnInit(): void {
   // this.message = this.shared.getMessage()
    console.log("new",this.listOfCategories)
  }


  opendialog() {
    this.matdialog.open(NewcategoriesComponent,{
      height:'50%',
      width:"50%"
    })
  }
    
}

 

