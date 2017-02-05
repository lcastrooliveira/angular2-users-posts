import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navigation/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent{
    constructor(public router: Router){
    }
}