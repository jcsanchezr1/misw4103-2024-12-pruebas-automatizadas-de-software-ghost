const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before } = require('@cucumber/cucumber');
const axios = require('axios');
const ProfilePage = require('../model/profilePage');
const LoginPage = require('../model/loginPage');


let profilePage;
let loginPage;
let pseudoProfile;

let profile_old_password;
let profile_new_password;

BeforeAll(async function () {
    profilePage = new ProfilePage();
    loginPage = new LoginPage();
})

Before(async function () {
    try {
        //const response = await axios.get('https://my.api.mockaroo.com/profiles.json?key=a60249d0'); Julio
        const response = await axios.get('https://my.api.mockaroo.com/profiles.json?key=d87073e0');
        pseudoProfile = response.data;
    } catch (error) {
        console.error("Error fetching pseudoMember: ", error);
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

When('Pseudo: I enter old password invalid', async function () {
    profile_old_password = pseudoProfile.profile_wrong_old_password;
    profilePage.typeOldPassword(profile_old_password);
});

When('Pseudo: I enter the new password low security', async function () {
    profile_new_password = pseudoProfile.profile_insecure_new_password;
    profilePage.typePassword(profile_new_password);
});

When('Pseudo: I enter the new password with only numbers', async function () {
    profile_new_password = pseudoProfile.profile_short_new_password;
    profilePage.typePassword(profile_new_password);
});

When('Pseudo: I enter the new password', async function () {
    profile_new_password = pseudoProfile.profile_ok_new_password;
    profilePage.typePassword(profile_new_password);
});

When('Pseudo: I both enter and confirm the new password', async function () {
    profilePage.typeConfirmPassword(profile_new_password);
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

When('Pseudo: I change FullName', async function () {
    profilePage.setFullName(pseudoProfile.profile_full_name);
});

When('Pseudo: I click Save button', async function () {
    profilePage.submitChangeButton();
});

When('Pseudo: I click back on profile', async function () {
    profilePage.submitProfileMenu();
});

Then('Pseudo: I validate the name has been changed', async function () {
    profilePage.validateProfileName(pseudoProfile.profile_full_name);
});


Then('Pseudo: I enter password invalid password', async function () {
    loginPage.setDriver(this.driver);
    loginPage.typePassword(profile_new_password);
});

Then('Pseudo: I enter password password not saved', async function () {
    loginPage.setDriver(this.driver);
    loginPage.typePassword(profile_new_password);
});

