import BasePage from "./base.page";
import testData from "../data/testData.json";


let productTitlteMoreDetail: string;
class AuctionList extends BasePage {

    productTitlteMoreDetail = '';

    get pageTitle() {
        return $('h1.section-header');
    }
    get swalModalTitle() {
        return $('#swal2-html-container');
    }
    get swalBtnCloseModal() {
        return $('button.swal2-confirm')
    }
    get productsList() {
        return $$('div.card');
    }
    get categoriesList() {
        return $$('p.blog-sidebar-list a');
    }
    get selectForFilters() {
        return $('div select');
    }
    get selectFiltersOptins() {
        return $$('div select option')
    }
    get inputSearchFilters() {
        return $('[placeholder="Search"]');
    }
    get btnApplyFilters() {
        return $("//button[text()='Filtrar']");
    }
    get btnClearSelectionFilter() {
        return $("//button[text()='Limpiar']");
    }
    get titleResultFilter() {
        return $('h5.card-title b');
    }
    get viewDetail() {
        return $(`.col-sm-3:nth-child(${testData.GENERAL_DATA.ITEM_ORDER_TO_SEEL_DETAIL}) .btn:nth-child(7)`);
    }
    get titleOfProduct() {
        return $(`.col-sm-3:nth-child(${testData.GENERAL_DATA.ITEM_ORDER_TO_SEEL_DETAIL}) h5 b`);
    }
    get productDetailTitle() {
        return $('h2.product-title');
    }
    get backToListbtn() {
        return $("div.product-content a");
    }
    get categoriesTitle() {
        return $("//b[text()='Categorias']");
    }
    get btnOtherCategories() {
        return $("//a[text()='Otras categorias']");
    }
    get modalForCategories() {
        return $('#swal2-title');
    }
    get selectForCategories() {
        return $('select.swal2-select');
    }
    get categoriasSelectOptions(){
        return $$("[label='categorias'] option");
    }
    /**
     * Opens the selector 
     */
    public async openSelectFilter() {
        await this.selectForFilters.click();
    }
    /**
     * send the values to the input then click on filter btn for see the results
     */
    public async filterByName() {
        await (await this.inputSearchFilters).setValue(testData.AUCTION_LIST.GENERAL_DATA.FILTER);
        this.clickOnElement(await this.btnApplyFilters);
    }
    /**
     * click on clear filter to see the entire list
     */
    public async clearFilterSelection() {
        this.clickOnElement(await this.btnClearSelectionFilter);

    }
    /**
     * Clicks on more detal of the product as the selector is dynamic it can be
     * open the detail of any product by changing the value on the json
     */
    public async clickOnViewMoreDetailOfProduct() {
        const actualTitle = await (await this.titleOfProduct).getText();
        this.productTitlteMoreDetail = actualTitle;
        this.clickOnElement(await this.viewDetail);

    }
    /**
     * Clicks on link text to return to the products list
     */
    public async clickOnSeeMoreProducts() {
        this.clickOnElement(await this.backToListbtn);
    }
    /**
        * Clicks on link text to return to the products list
        */
    public async clickOnotherCaegories() {
        await (await this.btnOtherCategories).click();
    }
    /**
      * Clicks on select for categories
      */
    public async clickOnSelectCategories() {
        this.clickOnElement(await this.selectForCategories);
    }
}


const auctionPageList = new AuctionList();
export default auctionPageList;