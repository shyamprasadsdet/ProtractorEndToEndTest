"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var FilterPage = /** @class */ (function () {
    function FilterPage() {
    }
    FilterPage.filterHeader = function () {
        return protractor_1.element(protractor_1.by.xpath('//div[@class=\'e - filters\']/h3'));
    };
    FilterPage.AllHFB = function () {
        return protractor_1.element(protractor_1.by.xpath('//app-base-filter/div/div/label[text()=\' All HFBs \']'));
    };
    FilterPage.headerGeography = function () {
        return protractor_1.element(protractor_1.by.xpath('//div[@class=\'e-filter-header\'][text()=\'Geographies\']'));
    };
    FilterPage.headerHFBs = function () {
        return protractor_1.element(protractor_1.by.xpath('//div[@class=\'e-filter-header\'][text()=\'HFBs\']'));
    };
    FilterPage.headerCompetitors = function () {
        return protractor_1.element(protractor_1.by.xpath('//div[@class="e-filter-header"][text()="Competitors"]'));
    };
    FilterPage.headerMatchType = function () {
        return protractor_1.element(protractor_1.by.xpath('//div[@class=\'e-filter-header\'][text()=\'Match Type\']'));
    };
    FilterPage.AllCompititorFilter = function () {
        return protractor_1.element(protractor_1.by.xpath('//app-competitor-filter/div/div/div/app-base-filter/div/div/label[contains(text(),"All Competitors")]'));
    };
    FilterPage.AllHFBsFilter = function () {
        return protractor_1.element(protractor_1.by.xpath('//app-hfb-filter/div/div/div/app-base-filter/div/div/label[contains(text(),"All HFBs")]'));
    };
    FilterPage.AllMatchTypeFilter = function () {
        return protractor_1.element(protractor_1.by.xpath('//app-comparison-filter/div/div/div/app-base-filter/div/div/label[contains(text(),"All Match Types")]'));
    };
    FilterPage.AllGeographiesFilter = function () {
        return protractor_1.element(protractor_1.by.xpath('//app-geography-filter/div/div/div/app-base-filter/div/div/label[contains(text(),"All Geographies")]'));
    };
    FilterPage.Rows = function () {
        return protractor_1.element.all(protractor_1.by.css('div.ag-body-viewport-wrapper>div>div>div.ag-row'));
    };
    return FilterPage;
}());
exports.FilterPage = FilterPage;
//# sourceMappingURL=filter-feature.po.js.map