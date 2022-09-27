import { WaitTime } from "../constansts/const";
import allure from '@wdio/allure-reporter';


export default class BasePage {
    get errorSwalModalTitle() {
        return $('#swal2-title');
    }
    get errorSwalModalBody() {
        return $('div.swal2-html-container')
    }
    get swalBtnCloseModal() {
        return $('button.swal2-confirm')
    }
    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path: string) {
        return browser.url(path);
    }

    /**
  * Click on a web element
  * @param webElement
  */
    async clickOnElement(webElement: WebdriverIO.Element, timeout: number = WaitTime.SMALL) {
        await this.waitElementToExist(webElement, timeout);
        await webElement.click();
    }

    /**
   * Wait an element to exist
   * @param webElement @param waitFor
   */
    async waitElementToExist(webElement: WebdriverIO.Element, waitFor: number = WaitTime.SMALL) {
        await webElement.waitForExist({
            timeout: waitFor,
            timeoutMsg: `element no found${webElement.selector}`,
        });
    }
    /**
   * Send text to an element
   * @param webElement @param text
   */
    async sendTextToElement(webElement: WebdriverIO.Element, text: string, timeout: number = WaitTime.SMALL) {
        await this.waitElementToExist(webElement, timeout);
        await webElement.setValue(text);
    }

    /**
     * Wait an element to be displayed
     * @param webElement @param waitFor
     */
    async waitElementToBeDisplayed(
        webElement: WebdriverIO.Element,
        waitFor: number = WaitTime.SMALL
    ) {
        await webElement.waitForDisplayed({
            timeout: waitFor,
            timeoutMsg: `element no displayed${webElement.selector}`,
        });
    }
    async toBe(actual: any, expected: any) {
        try {
            expect(actual).toBe(expected);
            allure.addDescription(`verifiying if ${actual} is ${expected}`, 'true');
        } catch (error) {
            allure.addDescription(`verifiying if ${actual} is ${expected}`, 'false');
            throw new Error(error.message);
        }
    }

    toBeGreaterThan(actual: number, expected: number) {
        try {
            expect(actual).toBeGreaterThan(expected);
            allure.addDescription(`verifiying if ${actual} is greater than ${expected}`, 'true');
        } catch (error) {
            allure.addDescription(`verifiying if ${actual} is greater than ${expected}`, 'false');
            throw new Error(error.message);
        }
    }
    toEqualBool(actual: boolean, expected: boolean) {
        try {
            expect(actual).toEqual(expected);
            allure.addDescription(`verifiying if ${actual} to equal ${expected.toString()}`, 'true');
        } catch (error) {
            allure.addDescription(`verifiying if ${actual} to equal ${expected.toString()}`, 'false');
            throw new Error(error.message);
        }
    }

    toContain(actual: string | string[], expected: string) {
        try {
            expect(actual).toContain(expected);
            allure.addDescription(`verifiying if ${actual} contains ${expected}`, 'true');
        } catch (error) {
            allure.addDescription(`verifiying if ${actual} contains ${expected}`, 'false');
            throw new Error(error.message);
        }

    }
    /**
   * Wait some seconds.
   * @param seconds : number
   */
    public async waitInSeconds(seconds: number) {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
    /**
  * Wait some seconds.
  * @param webElement : WebdriverIO.Element
  */
    public async hoverElement(webElement: WebdriverIO.Element) {
        await webElement.moveTo();
    }

    public async confirmAndCloseSwalDialog() {
        await (await this.swalBtnCloseModal).click();
    }
}