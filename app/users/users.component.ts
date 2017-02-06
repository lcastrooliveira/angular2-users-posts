import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService]
})
export class UsersComponent implements OnInit {

    private users : User[];
    constructor(private _usersService : UsersService) {

    }

    ngOnInit() {
        this._usersService.getUsers().subscribe(users => this.users = users);
    }

}