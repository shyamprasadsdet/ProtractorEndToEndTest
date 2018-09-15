"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var IkeaLogin = /** @class */ (function () {
    function IkeaLogin() {
    }
    IkeaLogin.emailTextField = function () {
        return protractor_1.element(protractor_1.by.id('Email'));
    };
    IkeaLogin.passwordTextField = function () {
        return protractor_1.element(protractor_1.by.id('password'));
    };
    IkeaLogin.LoginButton = function () {
        return protractor_1.element(protractor_1.by.id('submit'));
    };
    IkeaLogin.getUserMenu = function () {
        return protractor_1.element(protractor_1.by.className('e-user-menu'));
    };
    IkeaLogin.logoutButton = function () {
        protractor_1.element(protractor_1.by.id('btn_home_logout')).click();
    };
    IkeaLogin.checkIkeaLogo = function () {
        return protractor_1.element(protractor_1.by.className('e-ikea-logo'));
    };
    IkeaLogin.checkRegisterHereLink = function () {
        return protractor_1.element(protractor_1.by.id('lnk-login-register'));
    };
    IkeaLogin.checkForgotPasswordLink = function () {
        return protractor_1.element(protractor_1.by.id('lnk-login-forgotpassword'));
    };
    IkeaLogin.getAppLoaderComponent = function () {
        return protractor_1.element(protractor_1.by.tagName('app-loader'));
    };
    return IkeaLogin;
}());
exports.IkeaLogin = IkeaLogin;
//# sourceMappingURL=common.po.js.map