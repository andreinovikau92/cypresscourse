import homePage from "../pages/homePage";
import createAnAcountPage from "../pages/createAnAcountPage";

describe('createAnAcountPage.js', () => {
    
    beforeEach(() => {
        cy.visit('/');
        homePage.clickCreateAnAccountLink();
    });

    it('test', () => {  
        createAnAcountPage.setFirstName('John');
        createAnAcountPage.setLastName('Smith');
        createAnAcountPage.setEmailField('test@test.com');
        createAnAcountPage.setPasswordField('Test1!1000');
        createAnAcountPage.setConfirmPasswordField('Test1!1000');
        createAnAcountPage.clickCreateAnAccountBtn();
    });

});