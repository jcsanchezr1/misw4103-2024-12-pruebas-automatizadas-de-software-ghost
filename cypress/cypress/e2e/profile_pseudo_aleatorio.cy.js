import properties from './properties.json';
import LoginPage from './model/loginPage';
import ProfilePage from './model/profilePage';
import CommonFunction from "./model/commonFunction";

const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const commonFunction = new CommonFunction();

let parentFolder = '';
let pseudo_profile;

describe("Funcionalidad de Profile Pseudo Aleatorio", (z) => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        });
        cy.request('https://my.api.mockaroo.com/profiles.json?key=a60249d0').then((response) => {
            pseudo_profile = response.body;
        });
    });

    it('Cambiar nombre de manera éxitosa', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        commonFunction.wait(1000);
        // AND I enter name "profile_full_name"
        profilePage.typeName(pseudo_profile.profile_full_name);
        commonFunction.wait(1000);
        // AND I click save
        profilePage.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I validate the name "profile_full_name"
        cy.get(profilePage.elements.profileLabel).should('contain', pseudo_profile.profile_full_name);
    })

    it('Cambiar password de forma fallida por error insecure', () => {
        let profile_verify_password = pseudo_profile.profile_insecure_new_password
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        commonFunction.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePage.typeOldPassword(properties.PASSWORD);
        commonFunction.wait(1000);
        // AND I enter the new password "profile_insecure_new_password"
        profilePage.typePassword(pseudo_profile.profile_insecure_new_password);
        commonFunction.wait(1000);
        // AND I both enter and confirm the new password "profile_verify_password"
        profilePage.typeConfirmPassword(profile_verify_password);
        commonFunction.wait(1000);
        // AND I click confirm password
        profilePage.submitChangePassword();
        commonFunction.wait(1000);
        // THEN I validate the error message old password alert "Sorry, you cannot use an insecure password."
        cy.get(profilePage.elements.labeInputPassword).should('contain', 'Sorry, you cannot use an insecure password.');
        // AND I click save
        profilePage.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click sign out
        profilePage.submitSignOut();
        commonFunction.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "profile_insecure_new_password"
        loginPage.typePassword(pseudo_profile.profile_insecure_new_password);
        // AND I click sign in
        loginPage.clickSignInButton();
        commonFunction.wait(3000);
        // AND I clean password
        loginPage.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        commonFunction.wait(3000);
    });

    it('Cambiar password de forma fallida por error de longitud de la contraseña', () => {
        let profile_verify_password = pseudo_profile.profile_short_new_password
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        commonFunction.wait(1000);
        // AND I enter password "<PASSWORD>"
        profilePage.typeOldPassword(properties.PASSWORD);
        commonFunction.wait(1000);
        // AND I enter the new password "profile_new_password"
        profilePage.typePassword(pseudo_profile.profile_short_new_password);
        commonFunction.wait(1000);
        // AND I both enter and confirm the new password profile_verify_password
        profilePage.typeConfirmPassword(profile_verify_password);
        commonFunction.wait(1000);
        // AND I click confirm password
        profilePage.submitChangePassword();
        commonFunction.wait(1000);
        // THEN I validate the error message alert "Password must be at least 10 characters long."
        cy.get(profilePage.elements.labeInputPassword).should('contain', 'Password must be at least 10 characters long.');
        // AND I click save
        profilePage.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click sign out
        profilePage.submitSignOut();
        commonFunction.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "profile_new_password"
        loginPage.typePassword(pseudo_profile.profile_short_new_password);
        // AND I click sign in
        loginPage.clickSignInButton();
        commonFunction.wait(3000);
        // AND I clean password
        loginPage.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        commonFunction.wait(3000);
    });

    it('Cambiar password de forma fallida por error old password incorrecto', () => {
        let profile_verify_password = pseudo_profile.profile_ok_new_password
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //GIVEN un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click on your profile
        profilePage.submitYourProfile()
        commonFunction.wait(1000);
        // AND I enter old password "profile_old_password"
        profilePage.typeOldPassword(pseudo_profile.profile_wrong_old_password);
        commonFunction.wait(1000);
        // AND I enter the new password "profile_new_password"
        profilePage.typePassword(pseudo_profile.profile_ok_new_password);
        commonFunction.wait(1000);
        // AND I both enter and confirm the new password "profile_verify_password"
        profilePage.typeConfirmPassword(profile_verify_password);
        commonFunction.wait(1000);
        // AND I click confirm password
        profilePage.submitChangePassword();
        commonFunction.wait(1000);
        // THEN I validate the error message old password alert "Your password is incorrect. Your password is incorrect."
        cy.get(profilePage.elements.alertInputPassword).should('contain', 'Your password is incorrect. Your password is incorrect.');
        // AND I click save
        profilePage.submitSaveButton();
        commonFunction.wait(1000);
        // AND I click profile
        profilePage.submitProfileMenu();
        commonFunction.wait(1000);
        // AND I click sign out
        profilePage.submitSignOut();
        commonFunction.wait(1000);
        // AND I enter email "<EMAIL>"
        loginPage.typeEmail(properties.EMAIL);
        // AND I enter password "profile_new_password"
        loginPage.typePassword(pseudo_profile.profile_ok_new_password);
        // AND I click sign in
        loginPage.clickSignInButton();
        commonFunction.wait(3000);
        // AND I clean password
        loginPage.cleanPassword();
        // AND I enter password "<PASSWORD>"
        loginPage.typePassword(properties.PASSWORD);
        // AND I click sign in
        loginPage.clickSignInButton();
        commonFunction.wait(3000);
    });
});