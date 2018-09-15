"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.emailTextField = function () {
        return protractor_1.element(protractor_1.by.id('Email'));
    };
    Login.passwordTextField = function () {
        return protractor_1.element(protractor_1.by.id('password'));
    };
    Login.submitButton = function () {
        return protractor_1.element(protractor_1.by.id('submit'));
    };
    Login.errorMessage = function () {
        return protractor_1.element(protractor_1.by.className('e-error'));
    };
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login-page.po.js.map