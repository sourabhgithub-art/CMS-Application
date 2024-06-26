import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { SignUpComponent } from '../new/signup.component';
import { UsersService } from '../services/users.service';
export class users
{
  id:number;
  name:string;
  email:string;
  group:string;

  constructor(id:any,name:any,email:any,group:any) {
    this.id=id;
    this.name=name;
    this.email=email;
    this.group=group;
   }

}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any=[];
  deleteIds:any = {};
  constructor(private usersService:UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((res:any)=> {
      this.users= res['users'];
      this.users.forEach((user:any)=> {
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
    this.usersService.deleteUser(ids).subscribe(res=> {
      this.getUsers()

    })
  }

  addDeleteId(id:string) {
    
    this.deleteIds[id] = !this.deleteIds[id] ;
    console.log(this.deleteIds)
  }

  openDialog(component :any) {
    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openEdit() {
    this.openDialog(EditComponent)
  }
  openSignUp() {
    this.openDialog(SignUpComponent)
  }
}
