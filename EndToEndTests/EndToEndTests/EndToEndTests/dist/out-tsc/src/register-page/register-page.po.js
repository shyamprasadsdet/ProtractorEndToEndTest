"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
    }
    RegisterPage.registerLink = function () {
        return protractor_1.element(protractor_1.by.id('lnk-login-register'));
        // return element(by.xpath('//a[text()="Register Here"]'));
    };
    RegisterPage.registerPage = function () {
        return protractor_1.element(protractor_1.by.tagName('h1'));
    };
    RegisterPage.emailBox = function () {
        return protractor_1.element(protractor_1.by.id('Email'));
    };
    RegisterPage.passwordBox = function () {
        return protractor_1.element(protractor_1.by.id('password'));
    };
    RegisterPage.confirmPasswordBox = function () {
        return protractor_1.element(protractor_1.by.id('ConfirmPassword'));
    };
    RegisterPage.submitButton = function () {
        return protractor_1.element(protractor_1.by.xpath('//button[text()=\'Submit\']'));
    };
    RegisterPage.errorList = function () {
        return protractor_1.element(protractor_1.by.xpath('//li[contains(text(),\'Passwords must have at least\')]'));
    };
    RegisterPage.errorSecond = function () {
        return protractor_1.element(protractor_1.by.xpath('//li[contains(text(),\'The ConfirmPassword field is required.\')]'));
    };
    return RegisterPage;
}());
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=register-page.po.js.map