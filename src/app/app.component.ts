import { Component } from '@angular/core';

import { DataUsersService } from './data-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataUsers: DataUsersService){

    this.dataUsers.getUsers().subscribe(data =>{
      console.log(data);
    });

  }

  login(username, pass){

    console.log(username.value, pass.value);

    return false;
  }

}
