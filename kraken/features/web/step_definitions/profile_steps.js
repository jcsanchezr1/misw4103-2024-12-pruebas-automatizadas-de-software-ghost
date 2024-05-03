const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const ProfilePage = require('../model/profilePage');

let profilePage;

BeforeAll(async function () {    
    profilePage = new ProfilePage();   
})

When('I click profile', async function() {
    profilePage.setDriver(this.driver);    
    profilePage.submitProfileMenu();
});

When('I click on your profile', async function() {    
    profilePage.submitYourProfile();
});

When('I click change password', async function() {    
    profilePage.submitChangePassword();
});

When('I click confirm password', async function() {    
    profilePage.submitChangeButton("Change password");
});

When('I enter old password {kraken-string}', async function (password) {    
    profilePage.typeOldPassword(password);
});

When('I enter the new password {kraken-string}', async function (password) {    
    profilePage.typePassword(password);
});

When('I both enter and confirm the new password {kraken-string}', async function (password) {    
    profilePage.typeConfirmPassword(password);
});

Then('I validate the error message password {string}', async function(errorMessage) {
    profilePage.validateErrorMessage(errorMessage);   
});

Then('I click close and save', async function() {   
    profilePage.submitChangeButton("Save & close");
});

Then('I click close setting', async function() {   
    profilePage.submitClose();
});

Then('I click sign out', async function() {   
    profilePage.submitSignOut();
});
