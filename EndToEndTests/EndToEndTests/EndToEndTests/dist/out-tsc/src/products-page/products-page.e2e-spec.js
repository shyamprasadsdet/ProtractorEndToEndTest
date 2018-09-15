"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var products_page_po_1 = require("../products-page/products-page.po");
var common_po_1 = require("../common/common.po");
describe('IKEA competitors page and price comparison tool:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('should navigate to PRODUCTS page and grid will be loaded', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(products_page_po_1.ProductsPage.productsTab().isDisplayed()).toEqual(true);
        products_page_po_1.ProductsPage.productsTab().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(products_page_po_1.ProductsPage.productsBreadCrumb().getText()).toContain('EXPLORE / Products');
        expect(products_page_po_1.ProductsPage.getProductsPageHeading().getText()).toEqual('PRODUCT COMPARISON');
        products_page_po_1.ProductsPage.productsGridColumns().then(function (columns) {
            expect(columns.length).toBe(12);
            expect(columns[0].getText()).toBe('Match Type');
            expect(columns[1].getText()).toBe('Region');
            expect(columns[2].getText()).toBe('Country');
            expect(columns[3].getText()).toBe('Family Name');
            expect(columns[4].getText()).toBe('IKEA SKU');
            expect(columns[5].getText()).toBe('Competitor');
            expect(columns[6].getText()).toBe('Competitor Name');
            expect(columns[7].getText()).toBe('Competitor SKU');
            expect(columns[8].getText()).toBe('IKEA Standard Price');
            expect(columns[9].getText()).toBe('Competitor Standard Price');
            expect(columns[10].getText()).toContain('Price');
            expect(columns[11].getText()).toContain('IKEA');
        });
    });
});
//# sourceMappingURL=products-page.e2e-spec.js.map