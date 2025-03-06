

class HomePage {
    
    elements = {
        homePageHeader: () => cy.contains('Home Page'),
        signInLink: () => cy.get('ul li.authorization-link a').first(),
        createAnAccountLink: () => cy.contains('Create an Account'),
    }

    clickSignInLink () {
        this.elements.signInLink().click();
    }

    clickCreateAnAccountLink () {
        this.elements.createAnAccountLink().click();
    }
}


export default new HomePage();