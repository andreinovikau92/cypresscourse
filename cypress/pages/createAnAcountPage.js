

class CreateAnAccountPage {
    
    elements = {
        header: () => cy.get('h1.page-title span'),
        firstNameField: () => cy.get('#firstname'),
        lastNameField: () => cy.get('#lastname'),
        emailField: () => cy.get('#email_address'),
        passwordField: () => cy.get('#password'),
        confirmPasswordField: () => cy.get('#password-confirmation'),
        createAnAccountBtn: () => cy.get('button.action.submit.primary'),
    }

    setFirstName(firstname) {
        this.elements.firstNameField().type(firstname);
    }

    setLastName(lastname) {
        this.elements.lastNameField().type(lastname);
    }

    setEmailField(email) {
        this.elements.emailField().type(email);
    }

    setPasswordField(password) {
        this.elements.passwordField().type(password);
    }

    setConfirmPasswordField(confirmpassword) {
        this.elements.confirmPasswordField().type(confirmpassword);
    }

    clickCreateAnAccountBtn() {
        this.elements.createAnAccountBtn().click();
    }

}

export default new CreateAnAccountPage;