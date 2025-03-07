import homePage from "../pages/homePage";
import createAnAcountPage from "../pages/createAnAcountPage";

describe('test', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Create an account link should navigate to the Create New Customer Account page', () => {
        homePage.clickCreateAnAccountLink();

        createAnAcountPage.elements.header().should('have.text', 'Create New Customer Account');
    });
});