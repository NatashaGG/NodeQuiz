/*
=====================================
  ; Title: app.po.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: app.po.ts
======================================
*/
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
