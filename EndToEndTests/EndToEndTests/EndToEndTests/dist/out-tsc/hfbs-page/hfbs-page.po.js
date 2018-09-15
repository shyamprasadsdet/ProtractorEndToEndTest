"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HfbsPage = /** @class */ (function () {
    function HfbsPage() {
    }
    HfbsPage.hfbsTab = function () {
        return protractor_1.element(protractor_1.by.id('tab-home-hfbs'));
    };
    HfbsPage.gethfbsPageHeading = function () {
        return protractor_1.element(protractor_1.by.className('e-content-heading'));
    };
    HfbsPage.hfbsBreadCrumb = function () {
        return protractor_1.element(protractor_1.by.className('e-breadcrumb'));
    };
    HfbsPage.hfbsGridColumns = function () {
        return protractor_1.element.all(protractor_1.by.css('.ag-header-cell-text'));
    };
    HfbsPage.hfbsChart = function () {
        return protractor_1.element(protractor_1.by.className('e-svg-container'));
    };
    HfbsPage.hfbsChartHoverover = function () {
        return protractor_1.element(protractor_1.by.className('ag-cell ag-cell-not-inline-editing ag-cell-with-height ag-cell-value ag-cell-focus ag-column-hover'));
    };
    return HfbsPage;
}());
exports.HfbsPage = HfbsPage;
//# sourceMappingURL=hfbs-page.po.js.map