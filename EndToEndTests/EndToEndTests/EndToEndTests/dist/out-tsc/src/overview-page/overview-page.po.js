"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var OverviewPage = /** @class */ (function () {
    function OverviewPage() {
    }
    OverviewPage.clickOnOverviewTab = function () {
        protractor_1.element(protractor_1.by.id('tab-home-overview')).click();
    };
    OverviewPage.defaultOverviewTabSelection = function () {
        return protractor_1.element(protractor_1.by.className('e-overview e-state-active'));
    };
    OverviewPage.overviewBreadCrumb = function () {
        return protractor_1.element(protractor_1.by.className('e-breadcrumb'));
    };
    OverviewPage.getOverviewHeading = function () {
        return protractor_1.element(protractor_1.by.className('e-tab-option e-state-active'));
    };
    OverviewPage.overviewGridColumn = function () {
        return protractor_1.element.all(protractor_1.by.css('.ag-header-cell-text'));
    };
    OverviewPage.getTableViewButton = function () {
        return protractor_1.element(protractor_1.by.id('table-View'));
    };
    OverviewPage.getGridColumn = function (columnId, cssName) {
        return protractor_1.element.all(protractor_1.by.css(".ag-body-container div[col-id=\"" + columnId + "\"] " + cssName + " "));
    };
    OverviewPage.getGridColumnTableRows = function () {
        return OverviewPage.getGridColumn('productsActual', 'app-ag-grid-cell-table table tr');
    };
    OverviewPage.comparisonByCompetitorsTab = function () {
        return protractor_1.element(protractor_1.by.xpath('//a[text()="COMPARISON BY COMPETITORS"]'));
    };
    OverviewPage.comparisonByHFBsTab = function () {
        return protractor_1.element(protractor_1.by.xpath('//a[text()="COMPARISON BY HFBs"]'));
    };
    return OverviewPage;
}());
exports.OverviewPage = OverviewPage;
//# sourceMappingURL=overview-page.po.js.map