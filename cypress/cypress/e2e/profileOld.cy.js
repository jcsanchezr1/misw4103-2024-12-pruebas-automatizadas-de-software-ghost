import properties from './properties.json';
import ProfilePageOld from './model/profilePageOld';
import LoginPageOld from './model/loginPageOld';
import CommonFunction from './model/commonFunction';
import LoginPage from "./model/loginPage";

const profilePageOld = new ProfilePageOld();
const loginPageOld = new LoginPageOld();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe('Funcionalidad de Profile old', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
    });

    it('Cambiar nombre de manera éxitosa', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        // WHEN I click profile
        profilePageOld.submitProfileMenu();
        commonFunction.wait(2000);
        // AND I click on your profile
        profilePageOld.submitYourProfile()
        commonFunction.wait(2000);
        // AND I enter name "NombreNuevo"
        profilePageOld.typeName('NombreNuevo');
        commonFunction.wait(2000);
        // AND I click save
        profilePageOld.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePageOld.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I validate the name "NombreNuevo"
        cy.get(profilePageOld.elements.profileLabel).should('contain', 'NombreNuevo');
    });

    it('Cambiar password de forma fallida por error insecure', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        // WHEN I click profile
        profilePageOld.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click on your profile
        profilePageOld.submitYourProfile()
        commonFunction.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePageOld.typeOldPassword(properties.PASSWORD);
        commonFunction.wait(1000);
        // AND I enter the new password "password1234"
        profilePageOld.typePassword('password1234');
        commonFunction.wait(1000);
        // AND I both enter and confirm the new password "password1234"
        profilePageOld.typeConfirmPassword("password1234");
        commonFunction.wait(1000);
        // AND I click confirm password
        profilePageOld.submitChangePassword();
        commonFunction.wait(1000);
        // THEN I validate the error message old password alert "Sorry, you cannot use an insecure password"
        cy.get(profilePageOld.elements.labeInputPassword).should('contain', 'Sorry, you cannot use an insecure password');
        // AND I click save
        profilePageOld.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePageOld.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click sign out
        profilePageOld.submitSignOut();
        commonFunction.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPageOld.typeEmail(properties.EMAIL);
        // AND I enter password "password1234"
        loginPageOld.typePassword('password1234');
        // AND I click sign in
        loginPageOld.clickSignInButton();
        commonFunction.wait(3000);
        // AND I clean password
        loginPageOld.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPageOld.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPageOld.clickSignInButton();
        commonFunction.wait(3000);
    });

    it('Cambiar password de forma fallida por error de longitud de la contraseña', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        // WHEN I click profile
        profilePageOld.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click on your profile
        profilePageOld.submitYourProfile()
        commonFunction.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePageOld.typeOldPassword(properties.PASSWORD);
        commonFunction.wait(1000);
        // AND I enter the new password "123456789"
        profilePageOld.typePassword('123456789');
        commonFunction.wait(1000);
        // AND I both enter and confirm the new password "123456789"
        profilePageOld.typeConfirmPassword("123456789");
        commonFunction.wait(1000);
        // AND I click confirm password
        profilePageOld.submitChangePassword();
        commonFunction.wait(1000);
        // THEN I validate the error message alert "Password must be at least 10 characters long"
        cy.get(profilePageOld.elements.labeInputPassword).should('contain', 'Password must be at least 10 characters long');
        // AND I click save
        profilePageOld.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePageOld.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click sign out
        profilePageOld.submitSignOut();
        commonFunction.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPageOld.typeEmail(properties.EMAIL);
        // AND I enter password "123456789"
        loginPageOld.typePassword('123456789');
        // AND I click sign in
        loginPageOld.clickSignInButton();
        commonFunction.wait(3000);
        // AND I clean password
        loginPageOld.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPageOld.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPageOld.clickSignInButton();
        commonFunction.wait(3000);
    });
});