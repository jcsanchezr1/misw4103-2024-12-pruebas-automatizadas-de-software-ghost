const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const PagePage = require('../model/pagePage');

let pagePage;

BeforeAll(async function () {
    pagePage = new PagePage();
})

When('I click pages', async function () {
    pagePage.setDriver(this.driver);
    pagePage.submitLinkPages();
});

When('I click new page', async function () {
    pagePage.submitNewPage();
});

When('I enter page title {string}', async function (title) {
    pagePage.setTitle(title);
});

When('I enter description page {string}', async function (description) {
    pagePage.setDescription(description);
});

When('I click publish page', async function () {
    pagePage.submitPublish();
});

When('I click to update page', async function () {
    pagePage.submitUpdatePage();
});

When('I click continue final review page', async function () {
    pagePage.submitFinalReview();
});

When('I click page settings', async function () {
    pagePage.submitSettingsPage();
});

When('I click publish final review page', async function () {
    pagePage.submitConfirmReview();
});

When('I click delete page', async function () {
    pagePage.submitDeletePage();
});

When('I click delete confirmation page', async function () {
    pagePage.buttonDeleteConfirmation();
});

When('I click back to dashboard', async function () {
    pagePage.submitBackDashboard();
});

When('I click back to editor', async function () {
    pagePage.submitBackEditor();
});

When('I click back to pages', async function () {
    pagePage.submitBackPages();
});

When('I select page to edit {string}', async function (namePage) {
    pagePage.clickToEditPage(namePage);
});

When('I enter tag {string} in the settings of pages', async function (title) {
    pagePage.setTag(title);
});

Then('I validate the title of page {string}', async function (title) {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(title)) {
            console.log('The error message is displayed:', title);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});

Then('I validate the title of the page does not exist {string}', async function (title) {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes()) {
            console.log('The error message is displayed:', title);
            throw new Error('The error message is not displayed: ' + title);
        }
    }

    if (!found) {
        console.log('The page does not exist:', title);
    }
});