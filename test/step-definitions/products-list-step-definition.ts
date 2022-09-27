import { When, Then } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import { dataTableDeserializer } from '../helpers/utils';
import testData from "../data/testData.json";
import auctionPageList from '../page-objects/auction-list';
import { addStep } from '../utils/allureCommands';


Then(/^the products are shown in a list$/, async () => {
    addStep('the products are shown in a list')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Verify elements on products list');
    //TODO:implementar waitElementsToBeDisplayed
    await auctionPageList.waitInSeconds(3);
    const listProductsUI = await auctionPageList.productsList;
    auctionPageList.toBeGreaterThan(listProductsUI.length, 0);
});

Then(/^the dropdown filter has the next options$/, async (options) => {
    addStep('the dropdown filter has the next options')
    allureReporter.addTestId('Auction product');
    await auctionPageList.openSelectFilter();
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await auctionPageList.selectFiltersOptins;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        auctionPageList.toBe(
            elementsText[i],
            testData.AUCTION_LIST.FILTERS_OPTIONS[listOptions[i]]
        );
    }
});

When(/^the user type on input filter$/, async () => {
    addStep('the user type on input filter')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Apply Filters');
    await auctionPageList.filterByName();
});

Then(/^the page will show the result$/, async () => {
    addStep('the page will show the result')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Apply Filters');
    await auctionPageList.waitElementToBeDisplayed(await auctionPageList.titleResultFilter);
    const titleResultFilter = await (await auctionPageList.titleResultFilter).getText();
    auctionPageList.toBe(titleResultFilter, testData.AUCTION_LIST.GENERAL_DATA.FILTER);
});

When(/^the user clicks on clear filter$/, async () => {
    addStep('the user clicks on clear filter')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Apply Filters');
    await auctionPageList.clearFilterSelection();
});

When(/^the page will show the list of all the products$/, async () => {
    addStep('the page will show the list of all the products')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Apply Filters');
    await auctionPageList.clearFilterSelection();
    //TODO: WAITELEMTNS
    await auctionPageList.waitInSeconds(3);
    const listProductsUI = await auctionPageList.productsList;
    auctionPageList.toBeGreaterThan(listProductsUI.length, 1);
});

When(/^the user clicks on view more detail$/, async () => {
    addStep('the user clicks on view more detail')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('View Detail of product');
    await auctionPageList.clickOnViewMoreDetailOfProduct();
    await auctionPageList.waitInSeconds(5);
});

Then(/^the page will show a new page$/, async () => {
    addStep('the page will show a new page')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('View Detail of product');
    const actualUrl =await browser.getUrl();
    auctionPageList.toContain(actualUrl,testData.GENERAL_DATA.URL_FOR_DETAIL_OF_PRODUCT);
});

Then(/^the info must match from the list$/, async () => {
    addStep('the info must match from the list')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('View Detail of product');
    await auctionPageList.waitElementToBeDisplayed(await auctionPageList.productDetailTitle);
    const actualTitle= await (await auctionPageList.productDetailTitle).getText();
    auctionPageList.toBe(actualTitle,auctionPageList.productTitlteMoreDetail);
});

When(/^the user clicks on back to list$/, async () => {
    addStep('the user clicks on back to list')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('View Detail of product');
    await auctionPageList.clickOnSeeMoreProducts();
    await auctionPageList.waitInSeconds(5);
});


Then(/^the categories are shown in a list$/, async () => {
    addStep('the categories are shown in a list')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('View Detail of product');
    await auctionPageList.waitElementToBeDisplayed(await auctionPageList.categoriesTitle);
});


Then(/^the list has the next options$/, async (options) => {
    addStep('the list has the next options')
    allureReporter.addTestId('Auction product');
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await auctionPageList.categoriesList;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        auctionPageList.toBe(
            elementsText[i],
            testData.AUCTION_LIST.CATEGORIES_OPTIONS[listOptions[i]]
        );
    }
});

When(/^The user clikcs on other categories$/, async () => {
    addStep('The user clikcs on other categories')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Other categories function');
    await auctionPageList.clickOnotherCaegories();
    await auctionPageList.waitInSeconds(3);
});


Then(/^The page will show a pop-up$/, async () => {
    addStep('The user clikcs on other categories')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Other categories function');
    await auctionPageList.waitElementToBeDisplayed(await auctionPageList.modalForCategories);
});

When(/^The user opens the selects$/, async () => {
    addStep('The user opens the selects')
    allureReporter.addFeature('Elements on the list of products and their functions');
    allureReporter.addTestId('Other categories function');
    await auctionPageList.clickOnSelectCategories();
    await auctionPageList.waitInSeconds(10);

});

Then(/^The page will show the next options$/, async (options) => {
    addStep('The page will show the next options')
    allureReporter.addTestId('Auction product');
    const listOptions = dataTableDeserializer(options);
    const listOptionsUI = await auctionPageList.categoriasSelectOptions;
    const elementsText = await Promise.all(
        listOptionsUI.map((element) => element.getText())
    );
    for (let i = 0; i < elementsText.length; i += 1) {
        auctionPageList.toBe(
            elementsText[i],
            testData.AUCTION_LIST.CATEGORIES_SELECT_OPTIONS[listOptions[i]]
        );
    }
});