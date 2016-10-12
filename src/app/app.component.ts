import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  message = 'This is a new message';
  users: User[]=[
  {id:25, name:'Chris', username:'christofer'},
  {id:25, name:'Boban', username:'bobans'},
  {id:25, name:'Mijo', username:'jhonsan'},
  {id:25, name:'Aswin', username:'asjin'},
  {id:25, name:'Jabar', username:'mohammed'}
  ];
  activeuser:User;
  selectUser(user){
  	this.activeuser=user;
  	console.log(this.activeuser);
  }
  onUserCreated(event){
    this.users.push(event.user);
  }
}
