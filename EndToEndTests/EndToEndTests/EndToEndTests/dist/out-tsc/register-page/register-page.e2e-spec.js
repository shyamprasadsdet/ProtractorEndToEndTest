"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var register_page_po_1 = require("../register-page/register-page.po");
var common_component_1 = require("../common/common.component");
var common_po_1 = require("../common/common.po");
var testData = require('../register-page/EmailPasswordTestData.json');
describe('IKEA Register page validation:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logOut();
        protractor_1.browser.get(protractor_1.browser.baseUrl);
    });
    it('Register Link should be visible', function () {
        protractor_1.browser.waitForAngular();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(register_page_po_1.RegisterPage.registerLink().getText()).toEqual('Register Here');
    });
    it('Register Page should be visible', function () {
        register_page_po_1.RegisterPage.registerLink().click();
        expect(register_page_po_1.RegisterPage.emailBox().isDisplayed()).toBe(true);
        expect(register_page_po_1.RegisterPage.passwordBox().isDisplayed()).toBe(true);
        expect(register_page_po_1.RegisterPage.confirmPasswordBox().isDisplayed()).toBe(true);
        expect(register_page_po_1.RegisterPage.submitButton().getText()).toEqual('SUBMIT');
    });
    it('Only valid Domain', function () {
        register_page_po_1.RegisterPage.registerLink().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        testData.forEach(function (data) {
            register_page_po_1.RegisterPage.emailBox().sendKeys(data.email);
            register_page_po_1.RegisterPage.passwordBox().sendKeys(data.password);
            register_page_po_1.RegisterPage.confirmPasswordBox().sendKeys(data.password);
            register_page_po_1.RegisterPage.submitButton().click();
            expect(register_page_po_1.RegisterPage.errorList().getText()).toEqual('Passwords must have at least one non alphanumeric character.');
            register_page_po_1.RegisterPage.emailBox().clear();
            register_page_po_1.RegisterPage.passwordBox().clear();
            register_page_po_1.RegisterPage.confirmPasswordBox().clear();
        });
    });
});
//# sourceMappingURL=register-page.e2e-spec.js.map