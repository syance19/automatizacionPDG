import {  When, Then } from '@wdio/cucumber-framework';
import userProfile from '../page-objects/userProfile';
import { addStep } from '../utils/allureCommands';
import allureReporter from '@wdio/allure-reporter'
import { dataTableDeserializer } from '../helpers/utils';
import testData from "../data/testData.json";
import auctionPageList from '../page-objects/auction-list';



Then(/^The user should see the navbar with the options$/, async (options) => {
    allureReporter.addStep('The user should see the navbar with the options');
    allureReporter.addTestId('Elements on user profile');
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await userProfile.navBarOptions;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        userProfile.toBe(
            elementsText[i],
            testData.USER_PROFILE_SCREEN.NAV_BAR_OPTIONS[listOptions[i]]
        );
    }
});

Then(/^The elipsis with logout option$/, async () => {
    addStep('The elipsis with logout option')
    allureReporter.addTestId('Elements on user profile');
    await userProfile.waitElementToBeDisplayed(await userProfile.elipsisOnNavBar);
    await userProfile.clickOnElement(await userProfile.elipsisOnNavBar);
    await userProfile.waitElementToBeDisplayed(await userProfile.logoutButton);
    const actualTextOnButton = await (await userProfile.logoutButton).getText();
    userProfile.toBe(actualTextOnButton, testData.USER_PROFILE_SCREEN.GENERAL_DATA.LOGOUT_BUTTON_TEXT);
});

Then(/^a modal with a button and profile photo loader$/, async () => {
    addStep('a modal with a button and profile photo loader')
    allureReporter.addTestId('Elements on user profile');
    await userProfile.waitElementToBeDisplayed(await userProfile.modalUserProfile);
});

When(/^the user open the dashboard on modify data$/, async () => {
    addStep('the user open the dashboard on modify data')
    allureReporter.addTestId('Modify data');
    await userProfile.openModifyData();
});

Then(/^the page will show a form with the next options$/, async (options) => {
    allureReporter.addStep('the page will show a form with the next options');
    allureReporter.addTestId('Modify data');
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await userProfile.formOptions;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        userProfile.toBe(
            elementsText[i],
            testData.USER_PROFILE_SCREEN.MODIFY_DATA_OPTIONS[listOptions[i]]
        );
    }
});

When(/^the user fill the information$/, async () => {
    addStep('the user fill the informationa')
    allureReporter.addTestId('Modify data');
    await userProfile.fillModifyDataForm();
    await userProfile.waitInSeconds(10);
});

Then(/^the page will redirect to the user profile$/, async () => {
    addStep('the page will redirect to the user profile')
    allureReporter.addTestId('Elements on user profile');
    await auctionPageList.confirmAndCloseSwalDialog();
    await userProfile.waitElementToBeDisplayed(await userProfile.modalUserProfile);
});

When(/^the admin opens the dashboard$/, async () => {
    addStep('the admin opens the dashboard')
    allureReporter.addTestId('LoginFlow');
    await userProfile.openAdminDashboard();
});

Then(/^The admin will see the next options to perform$/, async (options) => {
    allureReporter.addStep('The admin will see the next options to perform');
    allureReporter.addTestId('LoginFlow');
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await userProfile.adminDashboardOptions;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        userProfile.toBe(
            elementsText[i],
            testData.USER_PROFILE_SCREEN.ADMIN_DASHBOARD_OPTIONS[listOptions[i]]
        );
    }
});

When(/^The user logout from the page$/, async () => {
    addStep('The user logout from the page')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await userProfile.logoutFromThePage();
});

When(/^open the dashboard for managment user$/, async () => {
    addStep('open the dashboard for managment user')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await userProfile.openSeeUsers();
});

Then(/^The page will show a table with all the users in the system$/, async () => {
    addStep('The page will show a table with all the users in the system')
    allureReporter.addTestId('Elements on user profile');
    await userProfile.waitElementToBeDisplayed(await userProfile.usersTable);
    await userProfile.waitInSeconds(3);
});

When(/^delete the user that just registered$/, async () => {
    addStep('delete the user that just registered')
    allureReporter.addTestId('RegisterAndLoginFlow');
    await userProfile.deleteNewUser();
    await userProfile.waitInSeconds(2);
    await userProfile.confirmAndCloseSwalDialog();
    await userProfile.waitInSeconds(10);
});


When(/^the admin opens the dashboard on create category option$/, async () => {
    addStep('the admin opens the dashboard on create category option')
    allureReporter.addTestId('CreateNewCategoryFlow');
    allureReporter.addFeature('Admin actions and permissions');
    await userProfile.openNewCategoriesOption();
});