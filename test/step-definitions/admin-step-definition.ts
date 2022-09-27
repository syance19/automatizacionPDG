import { When, Then } from '@wdio/cucumber-framework';
import { addStep } from '../utils/allureCommands';
import allureReporter from '@wdio/allure-reporter'
import testData from "../data/testData.json";
import adminPage from '../page-objects/admin-page';



Then(/^the page will show a table with the categories$/, async () => {
    addStep('the page will show a table with the categories')
    allureReporter.addTestId('CreateNewCategoryFlow');
    await adminPage.waitElementToBeDisplayed(await adminPage.tableOfCategories);
    const actualTableTitle = await (await adminPage.tableOfCategories).getText();
    adminPage.toBe(actualTableTitle, testData.ADMIN_PAGE.GENERAL_DATA.TITLE_FOR_CATEGORIES_TABLE);
    const alo = await (await adminPage.tableResults).getText();
    console.log(alo+'HPTAAAAAAAAAAAAA');
    
});

When(/^the admin clicks on new category botton$/, async () => {
    addStep('the admin clicks on new category botton')
    allureReporter.addTestId('CreateNewCategoryFlow');
    
    await adminPage.openAddNewCategories();
});

Then(/^the page will show a form for create a new category$/, async () => {
    addStep('the page will show a form for create a new category')
    allureReporter.addTestId('CreateNewCategoryFlow');
    await adminPage.waitInSeconds(3);
    const actualURL = await browser.getUrl();
    adminPage.toContain(actualURL, testData.GENERAL_DATA.URL_FOR_CREATE_NEW_CATEGORY);
});

When(/^the user types the category and create$/, async () => {
    addStep('the user types the category and create')
    allureReporter.addTestId('CreateNewCategoryFlow');
    await adminPage.sendKeysToNewCategoryInput();
});

Then(/^the category is on the table$/, async () => {
    addStep('the page will show a form for create a new category')
    allureReporter.addTestId('CreateNewCategoryFlow');
    await adminPage.searchNewCategoryOnTable();
});

When(/^the user types an empty  category and create$/, async () => {
    addStep('the user types an empty  category and create')
    allureReporter.addTestId('CreateNewCategoryFlow');
    await adminPage.sendEmptyKeysToNewCategoryInput();
});

Then(/^the page shows an error$/, async () => {
    addStep('the page shows an error')
    allureReporter.addTestId('CreateNewCategoryFlow');
    await adminPage.waitElementToBeDisplayed(await adminPage.errorSwalModalTitle);
    const actualTitlte= await (await adminPage.errorSwalModalTitle).getText();
    adminPage.toBe(actualTitlte,testData.ADMIN_PAGE.GENERAL_DATA.ERROR_MESSAGE_TITLE);
    await adminPage.waitElementToBeDisplayed(await adminPage.errorSwalModalBody);
    const actualBody= await (await adminPage.errorSwalModalBody).getText();
    adminPage.toBe(actualBody,testData.ADMIN_PAGE.GENERAL_DATA.ERROR_MESSAGE_BODY);
    await adminPage.confirmAndCloseSwalDialog();
});