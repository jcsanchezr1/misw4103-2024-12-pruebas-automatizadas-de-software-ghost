const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before } = require('@cucumber/cucumber');
const ProfilePage = require('../model/profilePage');
const LoginPage = require('../model/loginPage');
const { faker } = require('@faker-js/faker');





let profilePage;
let loginPage;

let profile_full_name;
let profile_old_password;
let profile_new_password;
let profile_verify_password;


BeforeAll(async function () {
    profilePage = new ProfilePage();
    loginPage = new LoginPage();
})

Before(async function () {
    profile_full_name = faker.random.word();
    profile_old_password = faker.internet.password(12);
    profile_new_password = faker.internet.password(12);
    profile_verify_password = profile_new_password;
})

When('Aleatorio: I click profile', async function () {
    profilePage.setDriver(this.driver);
    profilePage.submitProfileMenu();
});

When('Aleatorio: I click on your profile', async function () {
    profilePage.submitYourProfile();
});

When('Aleatorio: I click confirm password', async function () {
    profilePage.submitChangeButtonInsecure();
});

When('Aleatorio: I enter old password {kraken-string}', async function (password) {
    profilePage.typeOldPassword(password);
});

When('Aleatorio: I enter old password invalid', async function () {
    profilePage.typeOldPassword(profile_old_password);
});

When('Aleatorio: I enter the new password low security', async function () {
    profile_new_password = 'password1234'
    profilePage.typePassword(profile_new_password);
});

When('Aleatorio: I enter the new password with only numbers', async function () {
    profile_new_password = faker.datatype.number({ min: 1, max: Math.pow(10, 9) - 1 }).toString();
    profilePage.typePassword(profile_new_password);
});

When('Aleatorio: I enter the new password', async function () {
    profilePage.typePassword(profile_new_password);
});

When('Aleatorio: I both enter and confirm the new password', async function () {
    profilePage.typeConfirmPassword(profile_new_password);
});

Then('Aleatorio: I validate the error message password {string}', async function (errorMessage) {
    profilePage.validateErrorMessage(errorMessage);
});

Then('Aleatorio: I validate the error message old password alert {string}', async function (errorMessage) {
    profilePage.validateErrorMessageAlert(errorMessage);
});

Then('Aleatorio: I click close and save', async function () {
    profilePage.submitChangeButton("Save & close");
});

Then('Aleatorio: I click sign out', async function () {
    profilePage.submitSignOut();
});

When('Aleatorio: I change FullName', async function () {
    profilePage.setFullName(profile_full_name);
});

When('Aleatorio: I click Save button', async function () {
    profilePage.submitChangeButton();
});

When('Aleatorio: I click back on profile', async function () {
    profilePage.submitProfileMenu();
});

Then('Aleatorio: I validate the name has been changed', async function () {
    profilePage.validateProfileName(profile_full_name);
});



Then('Aleatorio: I enter password invalid password', async function () {
    loginPage.setDriver(this.driver);
    loginPage.typePassword(profile_new_password);
});

Then('Aleatorio: I enter password password not saved', async function () {
    loginPage.setDriver(this.driver);
    loginPage.typePassword(profile_new_password);
});

