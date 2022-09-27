import BasePage from "./base.page";
import testData from "../data/testData.json";

class AuctionPage extends BasePage {

    get formOptions() {
        return $$('p.atributo');
    }
    get inputName() {
        return $('[formcontrolname="nombre"]');
    }
    get inputCategory() {
        return $('.mat-select-arrow-wrapper');
    }
    get optionCategoryToCreate(){
        return $(`//mat-option/span[text()='${testData.PRODUCT_SCREEN.FORM_VALUES.CATEGORIA}']`);
    }
    get inputDescription() {
        return $('[formcontrolname="descripcion"]');
    }
    get inputAmountValue() {
        return $('[formcontrolname="valoracionAutor"]');
    }
    get btnNextPage() {
        return $("//button[text()='Siguiente']");
    }
    get btnCreateProduct() {
        return $("//button[text()='Crear Producto']")
    }
    get uploadFileContainer() {
        return $("//div[contains(@class,'marco ng-star-inserted')]");
    }
    get uploadFileCameraButton() {
        return $('.mat-fab .mat-icon');
    }
    get inputFile() {
        return $('#file');
    }
    get arrowUpAuction() {
        return $("//mat-icon[contains(.,'arrow_upward')]");
    }
    get dateOfAuction(){
        return $('[formcontrolname="fecha"]');
    }
    get timeOfAuction(){
        return $('[formcontrolname="tiempo"]');
    }
    public async chooseAnAuction() {
        await this.waitElementToBeDisplayed(await this.arrowUpAuction);
        this.clickOnElement(await this.arrowUpAuction);
    }
    public async fillForm() {
        await this.inputName.setValue(testData.PRODUCT_SCREEN.FORM_VALUES.NOMBRE);
        this.clickOnElement(await this.inputCategory);
        this.clickOnElement(await this.optionCategoryToCreate);
        await this.inputDescription.setValue(testData.PRODUCT_SCREEN.FORM_VALUES.DESCRIPCION);
        await this.inputAmountValue.setValue(testData.PRODUCT_SCREEN.FORM_VALUES.VALORACION);
        this.waitInSeconds(4);
    }
    public async createProduct() {
        this.waitInSeconds(4);
        await this.waitElementToBeDisplayed(await this.btnNextPage);
        this.clickOnElement(await this.btnNextPage);
        await this.waitElementToBeDisplayed(await this.dateOfAuction);
        await (await this.dateOfAuction).setValue(testData.PRODUCT_SCREEN.FORM_VALUES.Date);
        await this.waitElementToBeDisplayed(await this.timeOfAuction);
        await (await this.timeOfAuction).setValue(testData.PRODUCT_SCREEN.FORM_VALUES.Time);
        this.clickOnElement(await this.btnNextPage);
        await this.waitElementToBeDisplayed(await this.btnCreateProduct);
        await this.hoverElement(await this.uploadFileContainer);
        await (await this.uploadFileCameraButton).click();
        await this.waitInSeconds(7);
        this.clickOnElement(await this.btnCreateProduct);
    }
    public async fillWrongForm() {
        await this.inputCategory.setValue(testData.PRODUCT_SCREEN.FORM_VALUES.CATEGORIA);
        await this.inputDescription.setValue(testData.PRODUCT_SCREEN.FORM_VALUES.DESCRIPCION);
        await this.inputAmountValue.setValue(testData.PRODUCT_SCREEN.FORM_VALUES.VALORACION);
        await this.btnNextPage.click();
    }
}


const auctionPage = new AuctionPage();
export default auctionPage;