"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var SearchPage = /** @class */ (function () {
    function SearchPage() {
    }
    SearchPage.SearchResultFirst = function () {
        return protractor_1.element(protractor_1.by.xpath('//div[@id="rso"]/div/div/div/div/div/h3/a'));
    };
    SearchPage.searchTextField = function () {
        return protractor_1.element(protractor_1.by.id('lst-ib'));
    };
    return SearchPage;
}());
exports.SearchPage = SearchPage;
//# sourceMappingURL=google.po.js.map