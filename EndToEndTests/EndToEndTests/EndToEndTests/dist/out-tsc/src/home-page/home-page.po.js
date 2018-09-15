"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.getIkeaLogo = function () {
        return protractor_1.element(protractor_1.by.className('e-ikea-logo e-state-active'));
    };
    HomePage.getExploreHeading = function () {
        return protractor_1.element(protractor_1.by.xpath('//h3[text()="Explore"]'));
    };
    HomePage.getContactusLink = function () {
        return protractor_1.element(protractor_1.by.xpath('//a[text()="Contact Us"]'));
    };
    HomePage.getEmiLogo = function () {
        return protractor_1.element(protractor_1.by.className('e-developed-by'));
    };
    HomePage.overviewTab = function () {
        return protractor_1.element.all(protractor_1.by.className('e-tabs'));
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home-page.po.js.map