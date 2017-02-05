import {Component} from 'angular2/core';
import {NavBarComponent} from './navigation/navbar.component'

@Component({
    selector: 'my-app',
    template: '<navbar></navbar>',
    directives: [NavBarComponent],
})
export class AppComponent {
}