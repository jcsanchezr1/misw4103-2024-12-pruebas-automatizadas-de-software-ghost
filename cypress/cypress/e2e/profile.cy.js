import properties from './properties.json';
import LoginPage from './model/loginPage';
import ProfilePage from './model/profilePage';

const profilePage = new ProfilePage();
const loginPage = new LoginPage();

describe('Funcionalidad de Members', () => {
    beforeEach(() => {
        // Given I navigate to page "<URL>"
        loginPage.VisitURL(properties.URL);
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
    });

    it('Cambiar password de forma fallida por error insecure', () => {
        // WHEN I click profile
        profilePage.submitProfileMenu();
        cy.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        cy.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePage.typeOldPassword(properties.PASSWORD);
        cy.wait(1000);
        // AND I enter the new password "password1234"
        profilePage.typePassword('password1234');
        cy.wait(1000);
        // AND I both enter and confirm the new password "password1234"
        profilePage.typeConfirmPassword("password1234");
        cy.wait(1000);
        // AND I click confirm password
        profilePage.submitChangePassword();
        cy.wait(1000);
        // THEN I validate the error message old password alert "Sorry, you cannot use an insecure password."
        cy.get(profilePage.elements.labeInputPassword).should('contain', 'Sorry, you cannot use an insecure password.');
        // AND I click save
        profilePage.submitSaveButton();
        cy.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        cy.wait(1000);
        // AND I click sign out
        profilePage.submitSignOut();
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "password1234"
        loginPage.typePassword('password1234');
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
        // AND I clean password
        loginPage.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
    });

    it('Cambiar password de forma fallida por error de longitud de la contraseña', () => {
        // WHEN I click profile
        profilePage.submitProfileMenu();
        cy.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        cy.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePage.typeOldPassword(properties.PASSWORD);
        cy.wait(1000);
        // AND I enter the new password "123456789"
        profilePage.typePassword('123456789');
        cy.wait(1000);
        // AND I both enter and confirm the new password "123456789"
        profilePage.typeConfirmPassword("123456789");
        cy.wait(1000);
        // AND I click confirm password
        profilePage.submitChangePassword();
        cy.wait(1000);
        // THEN I validate the error message alert "Password must be at least 10 characters long."
        cy.get(profilePage.elements.labeInputPassword).should('contain', 'Password must be at least 10 characters long.');
        // AND I click save
        profilePage.submitSaveButton();
        cy.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        cy.wait(1000);
        // AND I click sign out
        profilePage.submitSignOut();
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "123456789"
        loginPage.typePassword('123456789');
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
        // AND I clean password
        loginPage.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
    });

    it('Cambiar password de forma fallida por error old password incorrecto', () => {
        // WHEN I click profile
        profilePage.submitProfileMenu();
        cy.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        cy.wait(1000);
        // AND I enter old password "OldPswInvalido"
        profilePage.typeOldPassword('OldPswInvalido');
        cy.wait(1000);
        // AND I enter the new password "EstoEsUnPswValido!"
        profilePage.typePassword('EstoEsUnPswValido!');
        cy.wait(1000);
        // AND I both enter and confirm the new password "EstoEsUnPswValido!"
        profilePage.typeConfirmPassword("EstoEsUnPswValido!");
        cy.wait(1000);
        // AND I click confirm password
        profilePage.submitChangePassword();
        cy.wait(1000);
        // THEN I validate the error message old password alert "Your password is incorrect. Your password is incorrect."
        cy.get(profilePage.elements.alertInputPassword).should('contain', 'Your password is incorrect. Your password is incorrect.');
        // AND I click save
        profilePage.submitSaveButton();
        cy.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        cy.wait(1000);
        // AND I click sign out
        profilePage.submitSignOut();
        cy.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "EstoEsUnPswValido!"
        loginPage.typePassword('EstoEsUnPswValido!');
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
        // AND I clean password
        loginPage.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        cy.wait(3000);
    });
});