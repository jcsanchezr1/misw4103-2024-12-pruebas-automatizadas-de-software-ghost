import properties from './properties.json';
import LoginPageOld from './model/loginPageOld';
import ProfilePageOld from './model/profilePageOld';

const profilePageOld = new ProfilePageOld();
const loginPageOld = new LoginPageOld();

describe('Funcionalidad de Members', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        // Given I navigate to page "<URL>"
        loginPageOld.VisitURL(properties.URL_OLD);
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPageOld.typeEmail(properties.EMAIL);
        // AND I enter password "<PASSWORD>"
        loginPageOld.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPageOld.clickSignInButton();
        cy.wait(3000);
    });

    it('Cambiar nombre de manera éxitosa', () => {
        // WHEN I click profile
        profilePageOld.submitProfileMenu();
        cy.wait(1000);
        // AND I click on your profile
        profilePageOld.submitYourProfile()
        cy.wait(1000);
        // AND I enter name "NombreNuevo"
        profilePageOld.typeName('NombreNuevo');
        cy.wait(1000);
        // AND I click save
        profilePageOld.submitSaveButton();
        cy.wait(1000);
        // AND I click profile
        profilePageOld.submitProfileMenu();
        cy.wait(1000);
        // AND I validate the name "NombreNuevo"
        cy.get(profilePageOld.elements.profileLabel).should('contain', 'NombreNuevo');
    })

    it('Cambiar password de forma fallida por error insecure', () => {
        // WHEN I click profile
        profilePageOld.submitProfileMenu();
        cy.wait(1000);
        // AND I click on your profile
        profilePageOld.submitYourProfile()
        cy.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePageOld.typeOldPassword(properties.PASSWORD);
        cy.wait(1000);
        // AND I enter the new password "password1234"
        profilePageOld.typePassword('password1234');
        cy.wait(1000);
        // AND I both enter and confirm the new password "password1234"
        profilePageOld.typeConfirmPassword("password1234");
        cy.wait(1000);
        // AND I click confirm password
        profilePageOld.submitChangePassword();
        cy.wait(1000);
        // THEN I validate the error message old password alert "Sorry, you cannot use an insecure password"
        cy.get(profilePageOld.elements.labeInputPassword).should('contain', 'Sorry, you cannot use an insecure password');
        // AND I click save
        profilePageOld.submitSaveButton();
        cy.wait(1000);
        // AND I click profile
        profilePageOld.submitProfileMenu();
        cy.wait(1000);
        // AND I click sign out
        profilePageOld.submitSignOut();
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPageOld.typeEmail(properties.EMAIL);
        // AND I enter password "password1234"
        loginPageOld.typePassword('password1234');
        // AND I click sign in
        loginPageOld.clickSignInButton();
        cy.wait(3000);
        // AND I clean password
        loginPageOld.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPageOld.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPageOld.clickSignInButton();
        cy.wait(3000);
    });

    it('Cambiar password de forma fallida por error de longitud de la contraseña', () => {
        // WHEN I click profile
        profilePageOld.submitProfileMenu();
        cy.wait(1000);
        // AND I click on your profile
        profilePageOld.submitYourProfile()
        cy.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePageOld.typeOldPassword(properties.PASSWORD);
        cy.wait(1000);
        // AND I enter the new password "123456789"
        profilePageOld.typePassword('123456789');
        cy.wait(1000);
        // AND I both enter and confirm the new password "123456789"
        profilePageOld.typeConfirmPassword("123456789");
        cy.wait(1000);
        // AND I click confirm password
        profilePageOld.submitChangePassword();
        cy.wait(1000);
        // THEN I validate the error message alert "Password must be at least 10 characters long"
        cy.get(profilePageOld.elements.labeInputPassword).should('contain', 'Password must be at least 10 characters long');
        // AND I click save
        profilePageOld.submitSaveButton();
        cy.wait(1000);
        // AND I click profile
        profilePageOld.submitProfileMenu();
        cy.wait(1000);
        // AND I click sign out
        profilePageOld.submitSignOut();
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPageOld.typeEmail(properties.EMAIL);
        // AND I enter password "123456789"
        loginPageOld.typePassword('123456789');
        // AND I click sign in
        loginPageOld.clickSignInButton();
        cy.wait(3000);
        // AND I clean password
        loginPageOld.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPageOld.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPageOld.clickSignInButton();
        cy.wait(3000);
    });
});