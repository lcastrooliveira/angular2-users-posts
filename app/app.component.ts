import {Component} from 'angular2/core';
import {NavBarComponent} from './navigation/navbar.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@RouteConfig([
   {path: '/users', name: 'Users', component: UsersComponent, useAsDefault: true},
   {path: '/posts', name: 'Posts', component: PostsComponent},
   {path: '/*other', name: 'Other', redirectTo: ['Users']}
])
@Component({
    selector: 'my-app',
    template: '<navbar></navbar><div class="container"><router-outlet></router-outlet></div>',
    directives: [NavBarComponent, ROUTER_DIRECTIVES],
})
export class AppComponent {
}