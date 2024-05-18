const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before } = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');
const PagePage = require('../model/pagePage');

let pagePage;

let page_name;
let page_description;
let new_page_name;
let new_page_description;


BeforeAll(async function () {
    pagePage = new PagePage();
})

Before(async function () {
    page_name = faker.random.word();
    page_description = faker.lorem.sentence();
    new_page_name = faker.random.word();
    new_page_description = faker.lorem.sentence();
})

When('Aleatorio: I click pages', async function () {
    pagePage.setDriver(this.driver);
    pagePage.submitLinkPages();
});

When('Aleatorio: I click new page', async function () {
    pagePage.submitNewPage();
});

When('Aleatorio: I enter page title', async function () {
    pagePage.setTitle(page_name);
});

When('Aleatorio: I enter page title to edit', async function () {
    pagePage.setTitle(new_page_name);
});

When('Aleatorio: I enter description page', async function () {
    pagePage.setDescription(page_description);
});

When('Aleatorio: I enter description page to edit', async function () {
    pagePage.setDescription(new_page_description);
});

When('Aleatorio: I click publish page', async function () {
    pagePage.submitPublish();
});

When('Aleatorio: I click to update page', async function () {
    pagePage.submitUpdatePage();
});

When('Aleatorio: I click continue final review page', async function () {
    pagePage.submitFinalReview();
});

When('Aleatorio: I click page settings', async function () {
    pagePage.submitSettingsPage();
});

When('Aleatorio: I click publish final review page', async function () {
    pagePage.submitConfirmReview();
});

When('Aleatorio: I click delete page', async function () {
    pagePage.submitDeletePage();
});

When('Aleatorio: I click delete confirmation page', async function () {
    pagePage.buttonDeleteConfirmation();
});

When('Aleatorio: I click back to dashboard', async function () {
    pagePage.submitBackDashboard();
});

When('Aleatorio: I click back to editor', async function () {
    pagePage.submitBackEditor();
});

When('Aleatorio: I click back to pages', async function () {
    pagePage.submitBackPages();
});

When('Aleatorio: I select page to edit', async function () {
    pagePage.clickToEditPage(page_name);
});

Then('Aleatorio: I validate the title of page', async function () {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(page_name)) {
            console.log('The error message is displayed:', page_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});

Then('Aleatorio: I validate the title of page to edit', async function () {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(new_page_name)) {
            console.log('The error message is displayed:', new_page_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});


Then('Aleatorio: I validate the title of the page does not exist', async function () {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes()) {
            console.log('The error message is displayed:', page_name);
            throw new Error('The error message is not displayed: ' + page_name);
        }
    }

    if (!found) {
        console.log('The page does not exist:', page_name);
    }
});