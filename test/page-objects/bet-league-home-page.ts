import BasePage from "./base.page";
import testData from "../data/testData.json";



class BetLeagueHomePage extends BasePage {
    get signInLinkButton() {
        return $("//a[text()='Ingresar']");
    }
    get welcomeMessage() {
        return $('p.welcome-message');
    }
    get inputEmail() {
        return $('[formcontrolname="email"]');
    }
    get inputPassword() {
        return $('[formcontrolname="contra"]');
    }
    get signInButton() {
        return $("//button[text()='Iniciar sesion']");
    }
    get errorSwalModalTitle() {
        return $('#swal2-title');
    }
    get errorSwalModalBody() {
        return $('div.swal2-html-container')
    }
    get swalBtnCloseModal() {
        return $('button.swal2-confirm')
    }
    get auctionOptionNavBar() {
        return $("//a[@href='/Subastas']");
    }
    get linkTextToRegister() {
        return $("//a[@href='/Auth/Registro']");
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
    get inputRePassword() {
        return $('[formcontrolname="recontra"]');
    }
    get inputPhone() {
        return $('[formcontrolname="telefono"]');
    }
    get btnRegisterNewUser() {
        return $("//button[text()='Registrarse']");
    }
    /**
   *  Open the betleague page
   */
    async openBetLeaguePage() {
        this.open(testData.BETLEAGUE_URL);

    }
    /**
       * Sign in flow in atom page.
       * 
       */
    async signInFlow() {
        browser.pause(12000);
        this.waitElementToBeDisplayed(await this.signInLinkButton);
        this.clickOnElement(await this.signInLinkButton);
        // this.waitElementToBeDisplayed(await this.welcomeMessage);
    }
    /**
     * login into the page taking the correct credentials from json file
     */
    public async sendKeysAndLogin() {
        await this.inputEmail.setValue(testData.validUser.BETLEAGUE_USER);
        await this.inputPassword.setValue(testData.validUser.PASSWORD);
        await this.signInButton.click();
    }
    /**
        * login into the page taking the incorrect credentials from json file
        */
    public async sendKeysAndLoginIncorrect() {
        await this.inputEmail.setValue(testData.noValidUser.BETLEAGUE_USER);
        await this.inputPassword.setValue(testData.noValidUser.PASSWORD);
        await this.signInButton.click();
    }
    /**
    * Opent the auciton page
    */
    public async openAuctionPage() {
        this.clickOnElement(await this.auctionOptionNavBar);
    }
    /**
     * login into the page taking the correct credentials from json file
     */
    public async sendKeysAndLoginForAdmin() {
        await this.inputEmail.setValue(testData.validUser.BETLEAGUE_ADMIN);
        await this.inputPassword.setValue(testData.validUser.PASSWORD_ADMIN);
        this.clickOnElement(await this.signInButton);
    }
    /**
     * register a new user then login into the page
     */
    public async sendKeysAndRegisterNewUser() {
        this.clickOnElement(await this.linkTextToRegister);
        await this.inputName.setValue(testData.GENERAL_DATA.USER_TO_REGISTER.Nombre);
        await this.inputLastName.setValue(testData.GENERAL_DATA.USER_TO_REGISTER.Apellido);
        await this.inputId.setValue(testData.GENERAL_DATA.USER_TO_REGISTER.Cedula);
        await this.inputPhone.setValue(testData.GENERAL_DATA.USER_TO_REGISTER.Telefono);
        await this.inputEmail.setValue(testData.validUser.BETLEAGUE_USER_REGISTERED);
        await this.inputPassword.setValue(testData.validUser.PASSWORD_REGISTERED);
        await this.inputRePassword.setValue(testData.validUser.PASSWORD_REGISTERED);
        this.clickOnElement(await this.btnRegisterNewUser);
    }
    /**
    * login into the page taking the delete credentials from json file
    */
    public async sendKeysAndLoginWithDeleteCredentials() {
        this.waitElementToBeDisplayed(await this.signInLinkButton);
        this.clickOnElement(await this.signInLinkButton);
        await this.inputEmail.setValue(testData.validUser.BETLEAGUE_USER_REGISTERED);
        await this.inputPassword.setValue(testData.validUser.PASSWORD_REGISTERED);
        this.clickOnElement(await this.signInButton);
    }
}

const homePage = new BetLeagueHomePage();
export default homePage;