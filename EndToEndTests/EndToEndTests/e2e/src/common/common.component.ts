import { browser, by, element, protractor, ElementFinder, ElementArrayFinder } from 'protractor';
import { debug } from 'util';
const testData = require('../../testdata.json');

export class CommonComponent {

  public static parentGID: any;
  public static allGID: any;

  public logIn(): void {
    browser.getCurrentUrl().then((url) => {
      if (!url || url === browser.baseUrl || url === 'data:,' || url.includes('localhost')) {
        browser.get(browser.baseUrl);
        expect(browser.getCurrentUrl()).toContain(browser.baseUrl);
        // your login code goes here
      }
    });
  }

  public logOut(): void {
    browser.getCurrentUrl().then((url) => {
      // your Login code goes here
    });
  }

  waitForSpinnerDisappear(elementLocator?: ElementFinder) {
    if (elementLocator == null) {
      elementLocator = element(by.tagName('waitTagLoader'));
    }
    const until = protractor.ExpectedConditions;
    browser.wait(until.stalenessOf(elementLocator), 100000);
  }

  async waitForElementPresent(elementLocator: ElementFinder) {
    const until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(elementLocator), 100000);
  }

  /**
   *A function that returns the count of Elements.
   * @param e is of type { ElementArrayFinder }
   * @Example: Get the count of rows in table (<tr>)
   */
  async getCountOfElements(e: ElementArrayFinder) {
    let count: number;
    await e.count().then((size) => {
      count = size;
    });
    return count;
  }
  /**
   *A Function switchs its child window using GUID
   * NOTE: This function should be called inside async with await
   */

  public async switchToChild() {
    await browser.getWindowHandle().then(async (parentGUID) => {
      CommonComponent.parentGID = parentGUID;
      await browser.getAllWindowHandles().then(async (allGUID)  => {
        for (const guid of allGUID) {
          if (guid !== CommonComponent.parentGID) {
            browser.switchTo().window(guid);
            break;
          }
        }
      });
    });
  }

  /**
   * A function switches back to parent window from from previously switched child window
   *NOTE:1)This function should be called insise async with wait
   * 2) This function must be called after switchToChild()
   */
  public async switchToParent(isCloseChild?: boolean) {
    if (isCloseChild) {
      browser.close();
    }
    await browser.switchTo().window(CommonComponent.parentGID);
  }

  /**
   *A function that Navigates to Homepage
   */
  public navigateToHomePage(): void {
    browser.getCurrentUrl().then((url) => {
      const homeUrl = browser.baseUrl;
      if (url !== homeUrl) {
        browser.get(homeUrl);
      }
    });
  }
  /**
   * A Function returns the document ready state
   * Can be used to verify whether the page is loaded or not
   * waits until the document.ready state becomes interactive or complete and returns the same.
   * */
  public async getReadyState() {
    let states;
    const until = protractor.ExpectedConditions;
    await browser.wait(() => {
      return browser.executeScript('return document.readyState').then((state) => {
        states = state;
        if (state === 'interactive' || state === 'complete' ) {
          return true;
        }
      }); }, 100000);
    return states;
  }
  /**
   * A function returns current url as string
   * */
  public async getCurrentURL() {
    return await browser.getCurrentUrl().then((url) => url);
  }
}
