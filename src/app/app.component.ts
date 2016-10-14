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
  message = 'This is a Sample App';
  items:FirebaseListObservable<any[]>;
  activeuser: User;
  constructor(af: AngularFire) {
    this.items = af.database.list('/UserList');
  }

  updateItem(event) {
    this.items.update(event.user.id, { name: event.user.name });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
  selectUser(key: string, name:string, username: string){
   // this.activeuser.id=key;
    this.activeuser={id: key, name:name, username:username};
    console.log(this.activeuser.name);
  	//console.log(this.activeuser);
  }
  onUserCreated(event){
   this.items.push({ name: event.user.name ,username: event.user.username});
  }
  conso(key: string, name:string){
    console.log(key);
    console.log(name);
  }

}
