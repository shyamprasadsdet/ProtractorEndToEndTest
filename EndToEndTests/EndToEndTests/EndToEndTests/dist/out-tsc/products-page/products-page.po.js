"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ProductsPage = /** @class */ (function () {
    function ProductsPage() {
    }
    ProductsPage.productsTab = function () {
        return protractor_1.element(protractor_1.by.id('tab-home-skus'));
    };
    ProductsPage.productsBreadCrumb = function () {
        return protractor_1.element(protractor_1.by.className('e-breadcrumb'));
    };
    ProductsPage.getProductsPageHeading = function () {
        return protractor_1.element(protractor_1.by.className('e-content-heading'));
    };
    ProductsPage.productsGridColumns = function () {
        return protractor_1.element.all(protractor_1.by.css('.ag-header-cell-text'));
    };
    ProductsPage.productLink = function (id) {
        return protractor_1.element(protractor_1.by.xpath("(//app-itemcellurl/a)[" + id + "]"));
    };
    return ProductsPage;
}());
exports.ProductsPage = ProductsPage;
//# sourceMappingURL=products-page.po.js.map