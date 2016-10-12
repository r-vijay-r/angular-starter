import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-profile',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	@Input() user :User;
  constructor() { }

  ngOnInit() {
  }

}
