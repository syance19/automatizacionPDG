import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/bet-league-home-page';
import userProfile from '../page-objects/userProfile';
import { addStep } from '../utils/allureCommands';
import allureReporter from '@wdio/allure-reporter';
import testData from "../data/testData.json";
import basePage from '../page-objects/base.page';
import auctionPage from '../page-objects/auction-page';
import auctionPageList from '../page-objects/auction-list';

Given(/^The user is on the login page$/, async () => {
    allureReporter.addEnvironment('BetLeague', 'https://betleague-af205.firebaseapp.com/');
    addStep('The user is on the login page')
    allureReporter.addFeature('Login flow into BetLeague');
    allureReporter.addTestId('LoginFlow');
    await homePage.openBetLeaguePage();
    await homePage.signInFlow();
});

When(/^The user login with username and password$/, async () => {
    addStep('The user login with username and password')
    allureReporter.addTestId('LoginFlow');
    await homePage.sendKeysAndLogin();
});

When(/^The user login with username and password from admin$/, async () => {
    addStep('The user login with username and password')
    allureReporter.addTestId('LoginFlow');
    await homePage.sendKeysAndLoginForAdmin();
});

When(/^The user login with incorrect username and password$/, async () => {
    addStep('The user login with incorrect username and password')
    allureReporter.addTestId('LoginFlow');
    await homePage.sendKeysAndLoginIncorrect();
});

Then(/^The user should see a modal with the username$/, async () => {
    addStep('The user should see a modal with the username')
    allureReporter.addTestId('LoginFlow');
    await userProfile.waitElementToBeDisplayed(await userProfile.buttonBox);
});

Then(/^the page will show an error message for user not found$/, async () => {
    addStep('the page will show an error message for user not found')
    allureReporter.addTestId('LoginFlow');
    await homePage.waitElementToBeDisplayed(await homePage.errorSwalModalTitle);
    const actualModalTitle = await (await homePage.errorSwalModalTitle).getText();
    await homePage.toBe(actualModalTitle, testData.GENERAL_DATA.ERROR_MESSAGE_TITLE_USER_NOT_FOUND);
    const actualModalBody = await (await homePage.errorSwalModalBody).getText();
    await homePage.toBe(actualModalBody, testData.GENERAL_DATA.ERROR_MESSAGE_BODY_USER_NOT_FOUND);
    await homePage.confirmAndCloseSwalDialog();
});

Given(/^The user is logged into BetLeague$/, async () => {
    allureReporter.addEnvironment('BetLeague', 'https://betleague-af205.firebaseapp.com/');
    addStep('The user is logged into BetLeague')
    allureReporter.addFeature('Elements on User Profile')
    allureReporter.addTestId('UserProfile');
    await homePage.openBetLeaguePage();
    await homePage.signInFlow();
    await homePage.sendKeysAndLogin();
});

Given(/^The user is on auction page$/, async () => {
    allureReporter.addEnvironment('BetLeague', 'https://betleague-af205.firebaseapp.com/');
    addStep('The user is on auction page')
    allureReporter.addFeature('Elements on the list of products and their functions')
    await homePage.openAuctionPage();
});

When(/^The new user register on the page$/, async () => {
    addStep('The new user register on the page')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await homePage.sendKeysAndRegisterNewUser();
});

When(/^confirms the register$/, async () => {
    addStep('confirms the register')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await homePage.confirmAndCloseSwalDialog();
});

Then(/^The page will show the landing page$/, async () => {
    addStep('The page will show the landing page')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await userProfile.waitElementToBeDisplayed(await userProfile.mainTitlePage);
    await userProfile.waitInSeconds(3);
    await homePage.waitElementToBeDisplayed(await homePage.signInLinkButton);
    await homePage.clickOnElement(await homePage.signInLinkButton);
});

When(/^The user login with delete username and password$/, async () => {
    addStep('The user login with delete username and password')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await homePage.sendKeysAndLoginWithDeleteCredentials();
});

When(/^the user choose a kind of auction$/, async () => {
    addStep('the user choose a kind of auction')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await auctionPage.chooseAnAuction();
});

When(/^The user clikcs on next auctions$/, async () => {
    addStep('The user clikcs on next auctions')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await auctionPageList.clickOnnextAuctions();
});