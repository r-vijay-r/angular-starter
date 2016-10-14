import { Component } from '@angular/core';
import { User } from './shared/models/user';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the app!';
  message = `
  Select a user from the list to change name of the user. Add new user, delete users, delete all users
  `;
  items:FirebaseListObservable<any[]>;
  activeuser: User;
  constructor(af: AngularFire) {
    this.items = af.database.list('/UserList');
    this.activeuser ={id:"not_set_error", name:"", username:""} ;
  }

  updateItem(event) {
    this.items.update(event.user.id, { name: event.user.name });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
    if(this.activeuser.id == key){
      this.activeuser = new User();
      this.activeuser ={id:"not_set_error", name:"", username:""} ;
    }
  }
  deleteEverything() {
    this.items.remove();
    if(this.activeuser.id == "not_set_error"){
    }else{
      this.activeuser = new User();
      this.activeuser ={id:"not_set_error", name:"", username:""} ;
    }
  }
  selectUser(key: string, name:string, username: string){
    this.activeuser={id: key, name:name, username:username};
  }
  onUserCreated(event){
   this.items.push({ name: event.user.name ,username: event.user.username});
  }
}
