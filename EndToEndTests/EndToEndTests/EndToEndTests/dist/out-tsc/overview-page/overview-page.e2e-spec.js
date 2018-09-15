"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var overview_page_po_1 = require("../overview-page/overview-page.po");
var common_po_1 = require("../common/common.po");
var hfbs_page_po_1 = require("../hfbs-page/hfbs-page.po");
describe('IKEA overview page and price comparison tool:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('should navigate to OVERVIEW page and Comparison by HFBs grid will be load as default', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(overview_page_po_1.OverviewPage.defaultOverviewTabSelection().isPresent()).toBe(true);
        expect(overview_page_po_1.OverviewPage.overviewBreadCrumb().getText()).toContain('EXPLORE / Overview / Comparison by HFB');
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(overview_page_po_1.OverviewPage.getOverviewHeading().getText()).toEqual('COMPARISON BY HFB');
        overview_page_po_1.OverviewPage.overviewGridColumn().then(function (columns) {
            expect(columns.length).toBe(4);
            expect(columns[0].getText()).toBe('HFB');
            expect(columns[1].getText()).toBe('# of products matched');
            expect(columns[2].getText()).toBe('# of products where IKEA beaten');
            expect(columns[3].getText()).toBe('IKEA more affordable? YesEqualNo');
        });
    });
    it('should display table view in grid on click of table-view button on Comparison by HFBs page', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(overview_page_po_1.OverviewPage.getOverviewHeading().getText()).toEqual('COMPARISON BY HFB');
        overview_page_po_1.OverviewPage.getTableViewButton().click();
        overview_page_po_1.OverviewPage.getGridColumnTableRows().then(function (rows) {
            expect(rows.length).toBeGreaterThan(0);
        });
    });
    it('should navigate to Comparision By Competitors page and grid will be loaded', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(overview_page_po_1.OverviewPage.comparisonByCompetitorsTab().getText()).toContain('COMPARISON BY COMPETITORS');
        overview_page_po_1.OverviewPage.comparisonByCompetitorsTab().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(overview_page_po_1.OverviewPage.overviewBreadCrumb().getText()).toContain('EXPLORE / Overview / Comparison by competitors');
        overview_page_po_1.OverviewPage.overviewGridColumn().then(function (columns) {
            expect(columns.length).toBe(4);
            expect(columns[0].getText()).toBe('Competitors');
            expect(columns[1].getText()).toBe('# of products matched');
            expect(columns[2].getText()).toBe('# of products where IKEA beaten');
            expect(columns[3].getText()).toBe('IKEA more affordable? YesEqualNo');
            utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
            expect(hfbs_page_po_1.HfbsPage.hfbsChart().isDisplayed()).toBe(true);
        });
    });
    it('should display table view in grid on click of table-view button on Comparison by Competitors page', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        overview_page_po_1.OverviewPage.comparisonByCompetitorsTab().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        overview_page_po_1.OverviewPage.getTableViewButton().click();
        overview_page_po_1.OverviewPage.getGridColumnTableRows().then(function (rows) {
            expect(rows.length).toBeGreaterThan(0);
        });
    });
});
//# sourceMappingURL=overview-page.e2e-spec.js.map