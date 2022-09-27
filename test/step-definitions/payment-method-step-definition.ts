import userProfile from '../page-objects/userProfile';
import { addStep } from '../utils/allureCommands';
import allureReporter from '@wdio/allure-reporter';
import testData from "../data/testData.json";
import { When, Then } from '@wdio/cucumber-framework';
import paymentPage from '../page-objects/payment-method';


When(/^the user open the payment list page$/, async () => {
    addStep('the user open the payment list page')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await userProfile.openPaymentList();
});

Then(/^the page will show an error message$/, async () => {
    addStep('the page will show an error message')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    const actualTitle=await (await paymentPage.errorSwalModalTitle).getText();
    paymentPage.toBe(actualTitle,testData.GENERAL_DATA.ERROR_MESSAGE_TITLE_NO_PAYMENT_REGISTER);
    const actualBody=await (await paymentPage.errorSwalModalBody).getText();
    paymentPage.toContain(actualBody,testData.GENERAL_DATA.ERROR_MESSAGE_BODY_NO_PAYMENT_REGISTER);
});

When(/^the user close the pop-up with the error$/, async () => {
    addStep('the user close the pop-up with the error')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await userProfile.confirmAndCloseSwalDialog();
});

Then(/^the page will show an empty table$/, async () => {
    addStep('the page will show an empty table')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    const actualTitle=await (await paymentPage.tableOfPayments).getText();
    paymentPage.toBe(actualTitle,testData.GENERAL_DATA.ZERO_RECORDS_ON_TABLE);
});

When(/^the user open the payment create page$/, async () => {
    addStep('the user open the payment create page')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await userProfile.openCreateNewPayment();
});

Then(/^the page will show a new page with a card$/, async () => {
    addStep('the page will show a new page with a card')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await paymentPage.waitElementToBeDisplayed(await paymentPage.cardContainer);
});

When(/^the user clicks on plus icon$/, async () => {
    addStep('the user clicks on plus icon')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await paymentPage.openAddNewMethod();
});

Then(/^the page will show a form for create a payment method$/, async () => {
    addStep('the page will show a form for create a payment method')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await paymentPage.waitElementToBeDisplayed(await paymentPage.formOptions);
});

When(/^the user fills the entire form$/, async () => {
    addStep('the user fills the entire form')
    allureReporter.addFeature('Payment');
    allureReporter.addTestId('Payment list failure');
    await paymentPage.fillFormNewPayment();
    await paymentPage.waitInSeconds(3);
    await paymentPage.confirmAndCloseSwalDialog();
});