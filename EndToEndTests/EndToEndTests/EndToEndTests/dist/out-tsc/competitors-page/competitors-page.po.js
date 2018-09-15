"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CompetitorsPage = /** @class */ (function () {
    function CompetitorsPage() {
    }
    CompetitorsPage.competitorTab = function () {
        return protractor_1.element(protractor_1.by.id('tab-home-competitors'));
    };
    CompetitorsPage.competitorBreadCrumb = function () {
        return protractor_1.element(protractor_1.by.className('e-breadcrumb'));
    };
    CompetitorsPage.getCompetitorsPageHeading = function () {
        return protractor_1.element(protractor_1.by.className('e-content-heading'));
    };
    CompetitorsPage.competitorsGridColumns = function () {
        return protractor_1.element.all(protractor_1.by.css('.ag-header-cell-text'));
    };
    return CompetitorsPage;
}());
exports.CompetitorsPage = CompetitorsPage;
//# sourceMappingURL=competitors-page.po.js.map