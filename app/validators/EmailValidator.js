System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidator;
    return {
        setters:[],
        execute: function() {
            class EmailValidator {
                static regex(control) {
                    if (control.value != null && control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                        return null;
                    }
                    return { invalidEmail: true };
                }
            }
            exports_1("EmailValidator", EmailValidator);
        }
    }
});
//# sourceMappingURL=EmailValidator.js.map