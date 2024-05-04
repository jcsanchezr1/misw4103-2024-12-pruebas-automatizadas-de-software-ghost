class LoginPage {
    constructor() {        
        this.elements = {
            identification: 'input[name="identification"]',
            password: 'input[name="password"]',
            signInButton: '.login'
        };
    
}
VisitURL(url) {
    cy.visit(url);
}

typeEmail(email) {  
    cy.get(this.elements.identification).type(email);                     
}

typePassword(password) {
    cy.get(this.elements.password).type(password);
}

cleanPassword() {
    cy.get(this.elements.password).clear();
}

clickSignInButton() {
    cy.get(this.elements.signInButton).click();
}
}
module.exports = LoginPage;