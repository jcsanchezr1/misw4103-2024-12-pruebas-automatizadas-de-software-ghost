const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before } = require('@cucumber/cucumber');
const axios = require('axios');
const PagePage = require('../model/pagePage');

let pagePage;
let pseudoPage;

BeforeAll(async function () {
    pagePage = new PagePage();
})

Before(async function () {
    try {
        const response = await axios.get('https://my.api.mockaroo.com/pages.json?key=d87073e0');
        pseudoPage = response.data;
    } catch (error) {
        console.error("Error fetching pseudoPage: ", error);
    }
})

When('Pseudo: I click pages', async function () {
    pagePage.setDriver(this.driver);
    pagePage.submitLinkPages();
});

When('Pseudo: I click new page', async function () {
    pagePage.submitNewPage();
});

When('Pseudo: I enter page title', async function () {
    pagePage.setTitle(pseudoPage.page_name);
});

When('Pseudo: I enter page title to edit', async function () {
    pagePage.setTitle(pseudoPage.new_page_name);
});

When('Pseudo: I enter description page', async function () {
    pagePage.setDescription(pseudoPage.page_description);
});

When('Pseudo: I enter description page to edit', async function () {
    pagePage.setDescription(pseudoPage.new_page_description);
});

When('Pseudo: I click publish page', async function () {
    pagePage.submitPublish();
});

When('Pseudo: I click to update page', async function () {
    pagePage.submitUpdatePage();
});

When('Pseudo: I click continue final review page', async function () {
    pagePage.submitFinalReview();
});

When('Pseudo: I click page settings', async function () {
    pagePage.submitSettingsPage();
});

When('Pseudo: I click publish final review page', async function () {
    pagePage.submitConfirmReview();
});

When('Pseudo: I click delete page', async function () {
    pagePage.submitDeletePage();
});

When('Pseudo: I click delete confirmation page', async function () {
    pagePage.buttonDeleteConfirmation();
});

When('Pseudo: I click back to dashboard', async function () {
    pagePage.submitBackDashboard();
});

When('Pseudo: I click back to editor', async function () {
    pagePage.submitBackEditor();
});

When('Pseudo: I click back to pages', async function () {
    pagePage.submitBackPages();
});

When('Pseudo: I select page to edit', async function () {
    pagePage.clickToEditPage(pseudoPage.page_name);
});

Then('Pseudo: I validate the title of page', async function () {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPage.page_name)) {
            console.log('The error message is displayed:', pseudoPage.page_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});

Then('Pseudo: I validate the title of page to edit', async function () {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPage.new_page_name)) {
            console.log('The error message is displayed:', pseudoPage.new_page_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});


Then('Pseudo: I validate the title of the page does not exist', async function () {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes()) {
            console.log('The error message is displayed:', pseudoPage.page_name);
            throw new Error('The error message is not displayed: ' + pseudoPage.page_name);
        }
    }

    if (!found) {
        console.log('The page does not exist:', pseudoPage.page_name);
    }
});