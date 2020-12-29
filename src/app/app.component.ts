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
      console.log("Hasta aqui la lista de usuarios");
    });
  }

  encontrar(usuario: any, nombre: any){
    return usuario.name = nombre;
  }

  login(username: any, pass: any){

    //console.log(username.value, pass.value);

    console.log(this.users.find(this.encontrar));

    console.log(
      this.users.find(e => e.name === username)
    );

    return false;
  }

}
