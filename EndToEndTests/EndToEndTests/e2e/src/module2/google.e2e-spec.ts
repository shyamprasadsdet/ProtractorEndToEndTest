import { browser, element, by, Key } from 'protractor';
import { CommonComponent } from '../common/common.component';
import { SearchPage } from '../module2/google.po';


describe('Search:',
  () => {
    const utility = new CommonComponent();
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
     beforeEach(() => {
      utility.logIn();
     });

    it('Search for Given Text', () => {
      utility.waitForSpinnerDisappear();
      SearchPage.searchTextField().sendKeys('Ganesh Hegde');
      SearchPage.searchTextField().sendKeys(Key.ENTER);
      expect(SearchPage.SearchResultFirst().getText()).toContain('Ganesh Hegde');
    });
  });
