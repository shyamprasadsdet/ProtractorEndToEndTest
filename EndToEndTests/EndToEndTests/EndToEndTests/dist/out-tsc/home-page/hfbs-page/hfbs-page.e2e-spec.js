"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_component_1 = require("../common/common.component");
var hfbs_page_po_1 = require("../hfbs-page/hfbs-page.po");
var common_po_1 = require("../common/common.po");
describe('IKEA hfbs page and price comparison tool:', function () {
    var utility = new common_component_1.CommonComponent();
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.driver.manage().window().maximize();
    beforeEach(function () {
        utility.logIn();
    });
    it('should navigate to HFBs page and grid will be loaded', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(hfbs_page_po_1.HfbsPage.hfbsTab().isDisplayed()).toEqual(true);
        hfbs_page_po_1.HfbsPage.hfbsTab().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(hfbs_page_po_1.HfbsPage.hfbsBreadCrumb().getText()).toContain('EXPLORE / HFBs');
        expect(hfbs_page_po_1.HfbsPage.gethfbsPageHeading().getText()).toEqual('HFBs BY COMPETITORS');
        hfbs_page_po_1.HfbsPage.hfbsGridColumns().then(function (columns) {
            expect(columns.length).toBe(5);
            expect(columns[0].getText()).toBe('Category');
            expect(columns[1].getText()).toBe('Competitor');
            expect(columns[2].getText()).toBe('Number of SKUs Matched');
            expect(columns[3].getText()).toBe('Price Range');
            expect(columns[4].getText()).toBe('Price Growth %');
        });
    });
    it('should navigate to HFBs page and charts must be present', function () {
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        hfbs_page_po_1.HfbsPage.hfbsTab().click();
        utility.waitForSpinnerDisappear(common_po_1.IkeaLogin.getAppLoaderComponent());
        expect(hfbs_page_po_1.HfbsPage.hfbsChart().isDisplayed()).toBe(true);
        hfbs_page_po_1.HfbsPage.hfbsChart().click();
        expect(hfbs_page_po_1.HfbsPage.hfbsChartHoverover().isDisplayed()).toBe(true);
    });
});
//# sourceMappingURL=hfbs-page.e2e-spec.js.map