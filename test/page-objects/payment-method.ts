import BasePage from "./base.page";
import testData from "../data/testData.json";

class PaymentMethod extends BasePage {


    get swalModalBody() {
        return $('#swal2-html-container');
    }
    get errorSwalModalTitle() {
        return $('#swal2-title');
    }
    get tableOfPayments() {
        return $('div.table-display');
    }
    get cardContainer() {
        return $('#tarjeta');
    }
    get addNewPaymentMethod() {
        return $('#btn-abrir-formulario');
    }
    get formOptions() {
        return $('#formulario-tarjeta');
    }
    get inputCardNumber() {
        return $('#inputNumero');
    }
    get inputCardName() {
        return $('#inputNombre');
    }
    get selectMonth() {
        return $('#selectMes');
    }
    get selectYear() {
        return $('#selectYear');
    }
    get inputCVV() {
        return $('#inputCCV');
    }
    get valueForMonth(){
        return $("#selectMes option[value='7']");
    }
    get valueForYear(){
        return $("#selectYear option[value='2027']");
    }
    get btnSaveNewPayment(){
        return $('button.btn-enviar');
    }
    /**
     * Opent the auciton page
     */
    public async openAddNewMethod() {
        this.clickOnElement(await this.addNewPaymentMethod);
    }
    /**
    * Fill the form for create an new payment
    */
    public async fillFormNewPayment() {
        await this.inputCardNumber.setValue(testData.PAYMENTE_PAGE.VALUE_FOR_FORMS.NUMERO_TARJETA);
        await this.inputCardName.setValue(testData.PAYMENTE_PAGE.VALUE_FOR_FORMS.NOMBRE);
        this.clickOnElement(await this.selectMonth);
        this.clickOnElement(await this.valueForMonth);
        this.clickOnElement(await this.selectYear);
        this.clickOnElement(await this.valueForYear);
        await this.inputCVV.setValue(testData.PAYMENTE_PAGE.VALUE_FOR_FORMS.CVV);
        this.clickOnElement(await this.btnSaveNewPayment);
    }
}


const paymentPage = new PaymentMethod();
export default paymentPage;