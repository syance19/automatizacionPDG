import userProfile from '../page-objects/userProfile';
import { addStep } from '../utils/allureCommands';
import { When, Then } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter'
import auctionPage from '../page-objects/auction-page';
import { dataTableDeserializer } from '../helpers/utils';
import testData from "../data/testData.json";
import auctionPageList from '../page-objects/auction-list';


When(/^the user open the dashboard$/, async () => {
    addStep('the user open the dashboard')
    allureReporter.addFeature('Create a product and see on the list');
    allureReporter.addTestId('Auction product');
    await userProfile.openCreateNewProduct();
});

Then(/^the page will redirect to a form with the options$/, async (options) => {
    addStep('the page will redirect to a form with the options')
    allureReporter.addTestId('Auction product');
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await auctionPage.formOptions;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        userProfile.toBe(
            elementsText[i],
            testData.PRODUCT_SCREEN.FORM_OPTIONS[listOptions[i]]
        );
    }
    await auctionPage.waitInSeconds(5);
});

When(/^the user fills the entire form and create the product$/, async () => {
    addStep('the user fills the entire form and create the product')
    allureReporter.addFeature('Create a product and see on the list');
    allureReporter.addTestId('Auction product');
    await auctionPage.fillForm();
    await auctionPage.waitInSeconds(2);
    await auctionPage.createProduct();
});

Then(/^the page will show the product in a new page$/, async () => {
    addStep('the page will show the product in a new page')
    allureReporter.addFeature('Create a product and see on the list');
    allureReporter.addTestId('Auction product');
    await auctionPageList.waitElementToBeDisplayed(await auctionPageList.swalModalTitle);
    const actualModalTitle= await (await auctionPageList.swalModalTitle).getText();
    await auctionPageList.toBe(actualModalTitle,testData.AUCTION_LIST.SUCCESS_DIALOG);
    await auctionPageList.confirmAndCloseSwalDialog();
    await auctionPageList.waitElementToBeDisplayed(await auctionPageList.pageTitle);
    const actualPageTitle= await (await auctionPageList.pageTitle).getText();
    await auctionPageList.toBe(actualPageTitle,testData.AUCTION_LIST.PAGE_TITLE);
});

When(/^the user doesn't fills the entire form and create the product$/, async () => {
    addStep("the user doesn't fills the entire form and create the product")
    allureReporter.addFeature('Create an empty product');
    allureReporter.addTestId('Auction product');
    await auctionPage.fillWrongForm();
    await auctionPage.waitInSeconds(3);
    await auctionPage.btnCreateProduct.click();
});

Then(/^the page will show an error message of empty product$/, async () => {
    addStep('the page will show an error message of empty product')
    allureReporter.addFeature('Create an empty product');
    allureReporter.addTestId('Auction product');
    await auctionPage.waitElementToBeDisplayed(await auctionPage.errorSwalModalTitle);
    const actualTitlteMessage= await (await auctionPage.errorSwalModalTitle).getText();
    auctionPage.toBe(actualTitlteMessage,testData.PRODUCT_SCREEN.GENERAL_DATA.ERROR_MESSAGE_TITLE);
    await auctionPage.waitElementToBeDisplayed(await auctionPage.errorSwalModalBody);
    const actualBodyMessage= await (await auctionPage.errorSwalModalBody).getText();
    auctionPage.toBe(actualBodyMessage,testData.PRODUCT_SCREEN.GENERAL_DATA.ERROR_MESSAGE_BODY);
    await auctionPageList.confirmAndCloseSwalDialog();

});