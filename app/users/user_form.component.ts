import {Component, OnInit} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES, CanDeactivate, RouteParams} from 'angular2/router';
import {UsersService} from './users.service';
import {Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {User} from './user';
import {EmailValidator} from '../validators/EmailValidator';

@Component({
    selector: 'user-form',
    templateUrl: 'app/users/user_form.component.html',
    providers: [UsersService]
})
export class UserFormComponent implements CanDeactivate, OnInit {
    signupForm: ControlGroup;
    title: string;
    user = new User();
    constructor(fb: FormBuilder, private _router: Router, private _usersService: UsersService, private _routeParams: RouteParams) {
        this.signupForm = fb.group({
            name: ['',Validators.required],
            email: ['',EmailValidator.regex],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    onSubmit() {
        console.log(this.signupForm.value);
        var id = this._routeParams.get('id');
        if(!id)
            this._usersService.createUser(this.signupForm.value).subscribe(x => {this._router.navigate(['Users'])});
        else
            this._usersService.updateUser(this.signupForm.value, +id).subscribe(x => {this._router.navigate(['Users'])});
    }

    routerCanDeactivate(next, previous) {
        if(this.signupForm.dirty) {
            return confirm('Are you sure ?');
        }
    }

    ngOnInit() {
        var id = this._routeParams.get('id');
        this.title = id ? 'Edit User' : 'New User';
        if(!id) return;
        this._usersService.getUser(+id)
            .subscribe(user => this.user = user,
            response => {
                if(response.status == 404) {
                    this._router.navigate(['Not Found']);
                }
            });
    }
}