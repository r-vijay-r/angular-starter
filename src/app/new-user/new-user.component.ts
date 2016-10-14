import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
	@Output() userCreated = new EventEmitter();
	newUser: User=new User();
	active :boolean=true;
	onSubmit(){
		this.userCreated.emit({ user : this.newUser});
		this.newUser = new User();
		this.active=false;
		setTimeout(()=>this.active=true,0);
	}
  constructor() { }

  ngOnInit() {
  }

}