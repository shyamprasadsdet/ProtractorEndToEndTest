"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var competitors_page_po_1 = require("../competitors-page/competitors-page.po");
var hfbs_page_po_1 = require("../hfbs-page/hfbs-page.po");
var products_page_po_1 = require("../products-page/products-page.po");
var filter_feature_po_1 = require("../filters/filter-feature.po");
describe('Filters:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('Should have filters in HFBs', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
                    expect(hfbs_page_po_1.HfbsPage.hfbsTab().isDisplayed()).toEqual(true);
                    hfbs_page_po_1.HfbsPage.hfbsTab().click();
                    return [4 /*yield*/, waitForItem()];
                case 1:
                    _a.sent();
                    utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerMatchType());
                    expect(protractor_1.browser.isElementPresent(filter_feature_po_1.FilterPage.headerCompetitors())).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerGeography().isDisplayed()).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerHFBs().isDisplayed()).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerMatchType().isDisplayed()).toEqual(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should have filters in Products', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
                    expect(products_page_po_1.ProductsPage.productsTab().isDisplayed()).toEqual(true);
                    products_page_po_1.ProductsPage.productsTab().click();
                    return [4 /*yield*/, waitForItem()];
                case 1:
                    _a.sent();
                    utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerMatchType());
                    expect(protractor_1.browser.isElementPresent(filter_feature_po_1.FilterPage.headerCompetitors())).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerGeography().isDisplayed()).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerHFBs().isDisplayed()).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerMatchType().isDisplayed()).toEqual(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should have filters in Compititor', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
                    expect(competitors_page_po_1.CompetitorsPage.competitorTab().isDisplayed()).toEqual(true);
                    competitors_page_po_1.CompetitorsPage.competitorTab().click();
                    return [4 /*yield*/, waitForItem()];
                case 1:
                    _a.sent();
                    utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerMatchType());
                    expect(protractor_1.browser.isElementPresent(filter_feature_po_1.FilterPage.headerCompetitors())).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerGeography().isDisplayed()).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerHFBs().isDisplayed()).toEqual(true);
                    expect(filter_feature_po_1.FilterPage.headerMatchType().isDisplayed()).toEqual(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Should display data in Grid For  Competitors Filter', function () {
        utility.navigateToHomePage();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        competitors_page_po_1.CompetitorsPage.competitorTab().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        waitForItem();
        filter_feature_po_1.FilterPage.headerCompetitors().click();
        utility.waitForElementPresent(filter_feature_po_1.FilterPage.AllCompititorFilter());
        filter_feature_po_1.FilterPage.AllCompititorFilter().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        expect(utility.getCountOfElements(filter_feature_po_1.FilterPage.Rows())).toBeGreaterThan(0);
    });
    it('Should display data in Grid For HFB Filter', function () {
        utility.navigateToHomePage();
        hfbs_page_po_1.HfbsPage.hfbsTab().click();
        waitForItem();
        filter_feature_po_1.FilterPage.headerHFBs().click();
        utility.waitForElementPresent(filter_feature_po_1.FilterPage.AllHFBsFilter());
        filter_feature_po_1.FilterPage.AllHFBsFilter().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        expect(utility.getCountOfElements(filter_feature_po_1.FilterPage.Rows())).toBeGreaterThan(0);
    });
    it('Should display data in Grid For Geographies Filter', function () {
        utility.navigateToHomePage();
        competitors_page_po_1.CompetitorsPage.competitorTab().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        waitForItem();
        filter_feature_po_1.FilterPage.headerGeography().click();
        utility.waitForElementPresent(filter_feature_po_1.FilterPage.AllGeographiesFilter());
        filter_feature_po_1.FilterPage.AllGeographiesFilter().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        expect(utility.getCountOfElements(filter_feature_po_1.FilterPage.Rows())).toBeGreaterThan(0);
    });
    it('Should display data in Grid For Match Type Filter', function () {
        utility.navigateToHomePage();
        competitors_page_po_1.CompetitorsPage.competitorTab().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        waitForItem();
        filter_feature_po_1.FilterPage.headerMatchType().click();
        utility.waitForElementPresent(filter_feature_po_1.FilterPage.AllMatchTypeFilter());
        filter_feature_po_1.FilterPage.AllMatchTypeFilter().click();
        utility.waitForSpinnerDisappear(protractor_1.element(protractor_1.by.tagName('app-loader')));
        expect(utility.getCountOfElements(filter_feature_po_1.FilterPage.Rows())).toBeGreaterThan(0);
    });
    function waitForItem() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerMatchType())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerCompetitors())];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerGeography())];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, utility.waitForElementPresent(filter_feature_po_1.FilterPage.headerMatchType())];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
});
//# sourceMappingURL=filter-feature.e2e-spec.js.map