import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { EditComponent } from '../edit/edit.component';
import { NewpagesComponent} from '../../app/newpages/newpages.component'
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { PagesService } from '../services/pages.service';
import { EditPageComponent } from '../edit-page/edit-page.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages:any = [];
  deleteIds:any = {};
  constructor(private _http:HttpClient,public dialog: MatDialog, private pagesService : PagesService) { }

  ngOnInit(): void {
    this.getPages();

  }
  openDialog(component :any) {
    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getPages();
    });
  }
  openEdit() {
    this.openDialog(EditPageComponent)
  }
  openSignUp() {
    this.openDialog( NewpagesComponent)  
  }

  getPages() {
    this.pagesService.getPages().subscribe((item:any)=> {
      this.pages = item.pages;
      this.pages.forEach((user:any)=> {
        this.deleteIds[user._id] = false;
      })
    })
  }


  delete() {
    const ids = new Array<String>();
    for(let key in this.deleteIds) { 
      if(this.deleteIds[key]) {
        ids.push(key);
  }}
    this.pagesService.deletePage(ids).subscribe(res=> {
      this.getPages()

    })
  }

  addDeleteId(id:string) {
    
    this.deleteIds[id] = !this.deleteIds[id] ;
    console.log(this.deleteIds)
  }
}