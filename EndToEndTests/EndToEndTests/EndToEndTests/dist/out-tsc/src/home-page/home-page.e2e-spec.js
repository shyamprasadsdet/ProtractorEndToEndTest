"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var home_page_po_1 = require("../home-page/home-page.po");
var common_po_1 = require("../common/common.po");
var competitors_page_po_1 = require("../competitors-page/competitors-page.po");
var hfbs_page_po_1 = require("../hfbs-page/hfbs-page.po");
var products_page_po_1 = require("../products-page/products-page.po");
describe('IKEA home page will be loaded successfully:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('Home page will load all tabs Overview,HFBs,Competitors,Products,Ikealogo,Emilogo', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(home_page_po_1.HomePage.getIkeaLogo().isDisplayed()).toBeTruthy();
        expect(home_page_po_1.HomePage.getExploreHeading().isDisplayed()).toBeTruthy();
        expect(hfbs_page_po_1.HfbsPage.hfbsTab().isDisplayed()).toEqual(true);
        expect(competitors_page_po_1.CompetitorsPage.competitorTab().isDisplayed()).toEqual(true);
        expect(products_page_po_1.ProductsPage.productsTab().isDisplayed()).toEqual(true);
        expect(home_page_po_1.HomePage.getContactusLink().isDisplayed).toBeTruthy();
        expect(home_page_po_1.HomePage.getEmiLogo().isDisplayed).toBeTruthy();
    });
    it('User will be logged out successfully', function () {
        utility.logOut();
    });
});
//# sourceMappingURL=home-page.e2e-spec.js.map