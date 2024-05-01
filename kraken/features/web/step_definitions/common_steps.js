const { When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const LoginPage = require('../model/loginPage');

//const loginPage = new LoginPage(this.driver);
let loginPage;

BeforeAll(async function () {
    console.log("beforeee all");
    loginPage = new LoginPage();   
});

When('I enter email {kraken-string}', async function (email) {
    loginPage.setDriver(this.driver);    
    loginPage.typeEmail(email);
});

When('I enter password {kraken-string}', async function (password) {
    loginPage.typePassword(password);   
});

When('I click sign in', async function() {
    loginPage.submitLoggin();    
});