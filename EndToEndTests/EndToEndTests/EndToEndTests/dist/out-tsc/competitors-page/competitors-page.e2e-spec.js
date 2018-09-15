"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var competitors_page_po_1 = require("../competitors-page/competitors-page.po");
var common_po_1 = require("../common/common.po");
describe('IKEA competitors page and price comparison tool:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('should navigate to COMPETITORS page and grid will be loaded', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(competitors_page_po_1.CompetitorsPage.competitorTab().isDisplayed()).toEqual(true);
        competitors_page_po_1.CompetitorsPage.competitorTab().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(competitors_page_po_1.CompetitorsPage.competitorBreadCrumb().getText()).toContain('EXPLORE / Competitors');
        expect(competitors_page_po_1.CompetitorsPage.getCompetitorsPageHeading().getText()).toEqual('COMPETITORS BY HFBs');
        competitors_page_po_1.CompetitorsPage.competitorsGridColumns().then(function (columns) {
            expect(columns.length).toBe(5);
            expect(columns[0].getText()).toBe('Competitor');
            expect(columns[1].getText()).toBe('Category');
            expect(columns[2].getText()).toBe('Number of SKUs Matched');
            expect(columns[3].getText()).toBe('Price Range');
            expect(columns[4].getText()).toBe('Price Growth %');
        });
    });
});
//# sourceMappingURL=competitors-page.e2e-spec.js.map