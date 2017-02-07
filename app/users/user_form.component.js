System.register(['angular2/core', 'angular2/router', './users.service', 'angular2/common', './user', '../validators/EmailValidator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, users_service_1, common_1, user_1, EmailValidator_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (EmailValidator_1_1) {
                EmailValidator_1 = EmailValidator_1_1;
            }],
        execute: function() {
            let UserFormComponent = class UserFormComponent {
                constructor(fb, _router, _usersService, _routeParams) {
                    this._router = _router;
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.signupForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', EmailValidator_1.EmailValidator.regex],
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
                    if (!id)
                        this._usersService.createUser(this.signupForm.value).subscribe(x => { this._router.navigate(['Users']); });
                    else
                        this._usersService.updateUser(this.signupForm.value, +id).subscribe(x => { this._router.navigate(['Users']); });
                }
                routerCanDeactivate(next, previous) {
                    if (this.signupForm.dirty) {
                        return confirm('Are you sure ?');
                    }
                }
                ngOnInit() {
                    var id = this._routeParams.get('id');
                    this.title = id ? 'Edit User' : 'New User';
                    if (!id)
                        return;
                    this._usersService.getUser(+id)
                        .subscribe(user => this.user = user, response => {
                        if (response.status == 404) {
                            this._router.navigate(['Not Found']);
                        }
                    });
                }
            };
            UserFormComponent = __decorate([
                core_1.Component({
                    selector: 'user-form',
                    templateUrl: 'app/users/user_form.component.html',
                    providers: [users_service_1.UsersService]
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_service_1.UsersService, router_1.RouteParams])
            ], UserFormComponent);
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user_form.component.js.map