
import {Control} from 'angular2/common';

export class EmailValidator {
    static regex(control: Control) {
        if (control.value != null && control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return null;
        }
        return {invalidEmail: true};
    }
}