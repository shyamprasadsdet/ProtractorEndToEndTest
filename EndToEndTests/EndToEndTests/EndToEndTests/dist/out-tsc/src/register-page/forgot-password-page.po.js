"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ForgotPassword = /** @class */ (function () {
    function ForgotPassword() {
    }
    ForgotPassword.backToSign = function () {
        return protractor_1.element(protractor_1.by.xpath('//a[text()=\'Back to Sign In\']'));
    };
    ForgotPassword.forgotPasswordHeaderText = function () {
        return protractor_1.element(protractor_1.by.xpath('//div/div/div/h1[text()=\'Forgot Password\']'));
    };
    ForgotPassword.EmailErrorForgotPassword = function () {
        return protractor_1.element(protractor_1.by.xpath('//div/ul/li[text()=\'The Email field is required.\']'));
    };
    return ForgotPassword;
}());
exports.ForgotPassword = ForgotPassword;
//# sourceMappingURL=forgot-password-page.po.js.map