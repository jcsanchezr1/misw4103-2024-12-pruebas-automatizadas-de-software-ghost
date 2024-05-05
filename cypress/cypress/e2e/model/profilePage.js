class ProfilePage {
      
    constructor() {
        this.elements = {
            profileMenu: '.gh-user-avatar',
            buttonYourProfile: 'ul li a[href="#/settings/staff/conan/"]',
            buttonSignOut: 'a.user-menu-signout',
            buttonChangePassword: '.gh-btn.gh-btn-icon.button-change-password.gh-btn-red',
            buttonSaveProfile: '.gh-btn.gh-btn-primary.gh-btn-icon',
            inputOldPassword: '#user-password-old',
            inputPassword: '#user-password-new',
            inputConfirmPassword: '#user-new-password-verification',
            labeInputPassword: '.form-group.error p',
            alertInputPassword: '.gh-alerts article.gh-alert div.gh-alert-content',
            fullName: '#user-name',
            save:'body > div.gh-app > div > main > section > div > header > section > button',
            saved: 'gh-btn gh-btn-primary gh-btn-icon gh-btn-green ember-view',
            profileLabel:'.gh-user-name'
        };
    }

    submitProfileMenu() {
        cy.get(this.elements.profileMenu).click();
    }

    typeName(name) {
        cy.get(this.elements.fullName).clear();
        cy.get(this.elements.fullName).type(name, {force: true});
    }

    submitYourProfile() {
        cy.get(this.elements.buttonYourProfile).click();
    }

    submitChangePassword() {
        cy.get(this.elements.buttonChangePassword).click();
    }   

    submitSignOut() {
        cy.get(this.elements.buttonSignOut).click();
    }     

    submitSaveButton() {
        cy.get(this.elements.buttonSaveProfile).click();
    }

    typeOldPassword(password) {
        cy.get(this.elements.inputOldPassword).type(password, {force: true});     
    }

    typePassword(password) {
        cy.get(this.elements.inputPassword).type(password, {force: true});
    }

    typeConfirmPassword(password) {
        cy.get(this.elements.inputConfirmPassword).type(password, {force: true});
    }    
}

module.exports = ProfilePage;