"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var login_page_po_1 = require("../login-page/login-page.po");
describe('IKEA Login page Validation', function () {
    var utility;
    utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logOut();
    });
    it('When the User enters incorrect credentials, then the user must be notified about the incorrect credentials entered', function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        expect(protractor_1.browser.getCurrentUrl()).toBe(protractor_1.browser.baseUrl);
        login_page_po_1.Login.emailTextField().sendKeys('admin@ikea.com');
        login_page_po_1.Login.passwordTextField().sendKeys('test@123');
        login_page_po_1.Login.submitButton().click();
        expect(login_page_po_1.Login.errorMessage().getText()).toEqual('Username or password is incorrect');
    });
    it('The user must be notified about the locked account and to reset the password when he/she enters ' +
        'the incorrect credentials 5 consecutive times', function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        expect(protractor_1.browser.getCurrentUrl()).toBe(protractor_1.browser.baseUrl);
        login_page_po_1.Login.emailTextField().sendKeys('test3@ikea.com');
        login_page_po_1.Login.passwordTextField().sendKeys('Eur0m0nior');
        login_page_po_1.Login.submitButton().click();
        var errMsg = login_page_po_1.Login.errorMessage().getText();
        errMsg.then(function (msg) {
            _this.errorMessage = msg;
            for (var i = 0; i <= 5; i++) {
                if (_this.errorMessage === 'Username or password is incorrect') {
                    login_page_po_1.Login.emailTextField().clear();
                    login_page_po_1.Login.emailTextField().sendKeys('test3@ikea.com');
                    login_page_po_1.Login.passwordTextField().sendKeys('Eur0m0nior');
                    login_page_po_1.Login.submitButton().click();
                    expect(login_page_po_1.Login.errorMessage().getText()).toEqual('Username or password is incorrect');
                    errMsg.then(function (message) {
                        _this.errorMessage = message;
                    });
                }
                else {
                    break;
                }
            }
        });
        expect(errMsg).toBe("Access denied due to more than 5 failed attempts. You must reset your password.");
    });
});
//# sourceMappingURL=login-page.e2e-spec.js.map