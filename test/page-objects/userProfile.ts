import BasePage from "./base.page";
import testData from "../data/testData.json";
/**
 *
 *
 * @class UserProfile
 * @extends {BasePage}
 */
class UserProfile extends BasePage {

    get buttonBox() {
        return $("//button[text()='Informacion']");
    }
    get navBarOptions() {
        return $$('li.nav-menu-item a');
    }
    get elipsisOnNavBar() {
        return $('[aria-haspopup="true"]');
    }
    get logoutButton() {
        return $("//button[text()='Cerrar sesion']");
    }
    get modalUserProfile() {
        return $('div.profile-box');
    }
    get dashboardUser() {
        return $("//input[@type='checkbox']");
    }
    get auctionProductOption() {
        return $("//a[@href='/tipoSubasta']");
    }
    get modifyDataOption() {
        return $("//a[@href='/Dashboard/editUserInfo']");
    }
    get formOptions() {
        return $$('p.atributo');
    }
    get inputName() {
        return $('[formcontrolname="nombre"]');
    }
    get inputLastName() {
        return $('[formcontrolname="apellidos"]');
    }
    get inputId() {
        return $('[formcontrolname="cedula"]');
    }
    get inputPhone() {
        return $('[formcontrolname="telefono"]');
    }
    get inputEmail() {
        return $('[formcontrolname="email"]');
    }
    get inputPassword1() {
        return $('[formcontrolname="contra"]');
    }
    get inputPassword2() {
        return $('[formcontrolname="recontra"]');
    }
    get btnModifyData() {
        return $('div button.submit');
    }
    get paymentList() {
        return $("//a[@href='/Dashboard/metodosList']");
    }
    get createNewPayment() {
        return $("//a[@href='/paymentDetails']");
    }
    get adminDashboardOptions() {
        return $$('ul.ng-star-inserted li a');
    }
    get logoutOption() {
        return $("//button[text()='Cerrar sesion']");
    }
    get mainTitlePage() {
        return $('h1.text-capitalize');
    }
    get manangmentUsers() {
        return $("//a[@href='/Dashboard/usuarioList']");
    }
    get usersTable() {
        return $('div.table-concept');
    }
    get btnDeleteUser() {
        return $(`//td[text()='${testData.validUser.BETLEAGUE_USER_REGISTERED}']//ancestor::tr//div//button[2]`)
    }
    get swalActionsModal() {
        return $('div.swal2-actions');
    }
    get btnSwalConfirmAction() {
        return $('div.swal2-actions button:nth-of-type(1)');
    }
    get newCategoriesOption() {
        return $("//a[@href='/listaCategoria']");
    }
    /**
     * opens the dashboard then the auciton product option
     */
    public async openCreateNewProduct() {
        this.clickOnElement(await this.dashboardUser);
        await this.waitElementToBeDisplayed(await this.auctionProductOption);
        this.clickOnElement(await this.auctionProductOption);
    }

    /**
     * opens the dashboard then the modfify data option
     */
    public async openModifyData() {
        this.clickOnElement(await this.dashboardUser);
        await this.waitElementToBeDisplayed(await this.modifyDataOption);
        this.clickOnElement(await this.modifyDataOption);
    }

    /**
     * send keys to form to update the data of the user from the json file
     */
    public async fillModifyDataForm() {
        await this.inputName.setValue(testData.USER_PROFILE_SCREEN.MODIFY_DATA_TO_SEND.Nombre);
        await this.inputLastName.setValue(testData.USER_PROFILE_SCREEN.MODIFY_DATA_TO_SEND.Apellido);
        await this.inputPhone.setValue(testData.USER_PROFILE_SCREEN.MODIFY_DATA_TO_SEND.Telefono);
        await this.inputEmail.setValue(testData.USER_PROFILE_SCREEN.MODIFY_DATA_TO_SEND.Correo);
        await this.inputPassword1.setValue(testData.USER_PROFILE_SCREEN.MODIFY_DATA_TO_SEND.Contraseña);
        await this.inputPassword2.setValue(testData.USER_PROFILE_SCREEN.MODIFY_DATA_TO_SEND.RepetirContrasena);
        await this.btnModifyData.click();
    }
    /**
     * opens the dashboard then the payment list option
     */
    public async openPaymentList() {
        this.clickOnElement(await this.dashboardUser);
        await this.waitElementToBeDisplayed(await this.paymentList);
        this.clickOnElement(await this.paymentList);
    }
    /**
     * opens the dashboard then the create new payment 
     */
    public async openCreateNewPayment() {
        this.clickOnElement(await this.dashboardUser);
        await this.waitElementToBeDisplayed(await this.createNewPayment);
        this.clickOnElement(await this.createNewPayment);
    }
    /**
     * Opent the auciton page
     */
    public async openAdminDashboard() {
        this.clickOnElement(await this.dashboardUser);
    }
    /**
     * Logout the user from the page and show the landing page 
     */
    public async logoutFromThePage() {
        this.clickOnElement(await this.elipsisOnNavBar);
        this.clickOnElement(await this.logoutButton);
    }
    /**
     * opens the dashboard then the manangment for user
     */
    public async openSeeUsers() {
        this.clickOnElement(await this.dashboardUser);
        await this.waitElementToBeDisplayed(await this.manangmentUsers);
        this.clickOnElement(await this.manangmentUsers);
    }
    /**
     * click on delete button of the user just registered
     */
    public async deleteNewUser() {
        this.clickOnElement(await this.btnDeleteUser);
        await this.waitElementToBeDisplayed(await this.swalActionsModal);
        this.clickOnElement(await this.btnSwalConfirmAction);
    }
    /**
     * opens the dashboard then the manangment for categories
     */
    public async openNewCategoriesOption() {
        this.clickOnElement(await this.dashboardUser);
        await this.waitElementToBeDisplayed(await this.newCategoriesOption);
        this.clickOnElement(await this.newCategoriesOption);
    }
}


const userProfile = new UserProfile();
export default userProfile;