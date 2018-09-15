"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var products_page_po_1 = require("../products-page/products-page.po");
fdescribe('Product Comparison', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
        fit('should navigate to PRODUCTS page and grid will be loaded', function () {
            products_page_po_1.ProductsPage.productsTab().click();
            protractor_1.element(protractor_1.by.xpath('//div/div[3]/div[2]/div/div/div[1]/div[5]/app-itemcellurl/a')).click();
            protractor_1.browser.switchTo();
            console.log(protractor_1.browser.getCurrentUrl());
        });
    });
});
//# sourceMappingURL=product-comparison.e2e.spec.js.map