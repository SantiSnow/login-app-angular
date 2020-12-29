import { Component } from '@angular/core';

import { DataUsersService } from './data-users.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = [];

  constructor(private dataUsers: DataUsersService){

    this.dataUsers.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    });

  }



  login(username: any, pass: any){

    console.log(username.value, pass.value);

    return false;
  }

}
