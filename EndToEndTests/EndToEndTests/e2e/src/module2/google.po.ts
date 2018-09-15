import { browser, by, element, protractor, ElementFinder, ElementArrayFinder } from 'protractor';
import { Promise } from 'q';

export class SearchPage {

  public static SearchResultFirst(): ElementFinder {
    return element(by.xpath('//div[@id="rso"]/div/div/div/div/div/h3/a'));
  }

  public static searchTextField(): ElementFinder {
    return element(by.id('lst-ib'));
  }
}
