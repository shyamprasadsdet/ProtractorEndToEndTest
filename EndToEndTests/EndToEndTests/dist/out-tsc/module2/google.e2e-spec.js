"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var google_po_1 = require("../module2/google.po");
describe('Search:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('Search for Given Text', function () {
        utility.waitForSpinnerDisappear();
        google_po_1.SearchPage.searchTextField().sendKeys('Ganesh Hegde');
        google_po_1.SearchPage.searchTextField().sendKeys(protractor_1.Key.ENTER);
        expect(google_po_1.SearchPage.SearchResultFirst().getText()).toContain('Ganesh Hegde');
    });
});
//# sourceMappingURL=google.e2e-spec.js.map