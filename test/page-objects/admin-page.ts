import BasePage from "./base.page";
import testData from "../data/testData.json";

class AdminPage extends BasePage {

    get tableOfCategories() {
        return $('div.card h2');
    }
    get tableContent() {
        return $$('tbody tr');
    }
    get btnAddNewCategory() {
        return $('a i.fa');
    }
    get inputForNewCategory() {
        return $('[formcontrolname="categoria"]');
    }
    get btnCreateNewCategory() {
        return $("//button[text()='Crear Categoria']");
    }
    get tableResults() {
        return $('div.table-display');
    }
    get errorSwalModalTitle() {
        return $('#swal2-title');
    }
    get errorSwalModalBody() {
        return $('div.swal2-html-container')
    }
    
    /**
    * clikcs on add new category button
    */
    public async openAddNewCategories() {
        this.clickOnElement(await this.btnAddNewCategory);
    }
    /**
    * Send keys to the input for the new category
    */
    public async sendKeysToNewCategoryInput() {
        await this.inputForNewCategory.setValue(testData.ADMIN_PAGE.GENERAL_DATA.NEW_CATEGORY_NAME);
        this.clickOnElement(await this.btnCreateNewCategory);
        this.confirmAndCloseSwalDialog();
    }
    /**
    * Send emptyus keys to the input for the new category
    */
    public async sendEmptyKeysToNewCategoryInput() {
        await this.inputForNewCategory.setValue(' ');
        this.clickOnElement(await this.btnCreateNewCategory);
    }
    /**
   * search for the new category on the table
   */
    public async searchNewCategoryOnTable() {
    }
}


const adminPage = new AdminPage();
export default adminPage;