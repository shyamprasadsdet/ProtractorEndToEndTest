"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var register_page_po_1 = require("../register-page/register-page.po");
var forgot_password_page_po_1 = require("../register-page/forgot-password-page.po");
var common_component_1 = require("../common/common.component");
var common_po_1 = require("../common/common.po");
describe('Forgot Password:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logOut();
    });
    it('Should show Forgot Password page', function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        expect(common_po_1.IkeaLogin.checkForgotPasswordLink().isDisplayed()).toBeTruthy();
        common_po_1.IkeaLogin.checkForgotPasswordLink().click();
        expect(register_page_po_1.RegisterPage.emailBox().isDisplayed()).toBe(true);
        expect(register_page_po_1.RegisterPage.submitButton().isDisplayed()).toBe(true);
        register_page_po_1.RegisterPage.submitButton().click();
        expect(forgot_password_page_po_1.ForgotPassword.EmailErrorForgotPassword().isDisplayed()).toBe(true);
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(forgot_password_page_po_1.ForgotPassword.backToSign().isPresent()).toBe(true);
        forgot_password_page_po_1.ForgotPassword.backToSign().click();
        expect(common_po_1.IkeaLogin.checkIkeaLogo().isDisplayed()).toEqual(true);
    });
});
//# sourceMappingURL=forgotPassword-page.e2e-spec.js.map