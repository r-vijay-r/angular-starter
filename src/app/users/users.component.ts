import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-profile',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	@Input() user :User;
	@Output() userUpdated = new EventEmitter();
	onKey(){
		this.userUpdated.emit({ user: this.user});
	}
  constructor() { }

  ngOnInit() {
  }

}
