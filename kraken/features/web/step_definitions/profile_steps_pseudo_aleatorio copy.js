const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before } = require('@cucumber/cucumber');
const axios = require('axios');
const ProfilePage = require('../model/profilePage');

let profilePage;
let pseudoProfile;


BeforeAll(async function () {
    profilePage = new ProfilePage();
})

Before(async function () {
    try {
        const response = await axios.get('TODO:');
        pseudoProfile = response.data;
    } catch (error) {
        console.error("Error fetching pseudoProfile: ", error);
    }
})

When('Pseudo: I click profile', async function () {
    profilePage.setDriver(this.driver);
    profilePage.submitProfileMenu();
});

When('Pseudo: I click on your profile', async function () {
    profilePage.submitYourProfile();
});

When('Pseudo: I click confirm password', async function () {
    profilePage.submitChangeButtonInsecure();
});

When('Pseudo: I enter old password {kraken-string}', async function (password) {
    profilePage.typeOldPassword(password);
});

When('Pseudo: I enter the new password {kraken-string}', async function (password) {
    profilePage.typePassword(password);
});

When('Pseudo: I both enter and confirm the new password {kraken-string}', async function (password) {
    profilePage.typeConfirmPassword(password);
});

Then('Pseudo: I validate the error message password {string}', async function (errorMessage) {
    profilePage.validateErrorMessage(errorMessage);
});

Then('Pseudo: I validate the error message old password alert {string}', async function (errorMessage) {
    profilePage.validateErrorMessageAlert(errorMessage);
});

Then('Pseudo: I click close and save', async function () {
    profilePage.submitChangeButton("Save & close");
});

Then('Pseudo: I click sign out', async function () {
    profilePage.submitSignOut();
});

When('Pseudo: I change FullName {string}', async function (title) {
    profilePage.setFullName(title);
});

When('Pseudo: I click Save button', async function () {
    profilePage.submitChangeButton();
});

When('Pseudo: I click back on profile', async function () {
    profilePage.submitProfileMenu();
});

Then('Pseudo: I validate the name has been changed {string}', async function (name) {
    profilePage.validateProfileName(name);
});
