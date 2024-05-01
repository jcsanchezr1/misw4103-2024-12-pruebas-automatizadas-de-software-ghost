const { Given, When, Then } = require('@cucumber/cucumber');

When('I click members', async function() {
    let element = await this.driver.$('li.relative a[data-test-nav="members"]');
    await element.waitForDisplayed();
    return await element.click();
});

When('I click new member', async function() {
    let element = await this.driver.$('.gh-btn.ember-view[data-test-new-member-button="true"]');
    await element.waitForDisplayed();
    return await element.click();
});

When('I enter member name {string}', async function (email) {
    let element = await this.driver.$('#member-name');
    await element.waitForDisplayed();
    return await element.setValue(email);
});

When('I enter member email {string}', async function (email) {
    let element = await this.driver.$('#member-email');
    await element.waitForDisplayed();
    return await element.setValue(email);
});

When('I click save member', async function() {
    let element = await this.driver.$('button[data-test-button="save"]');
    await element.waitForDisplayed();
    return await element.click();
});

Then('I validate that the button text should be {string}', async function (expectedText) {
    let element = await this.driver.$('button[data-test-button="save"]');
    await element.waitForDisplayed();
    const actualText = await element.getText();
    if (actualText !== expectedText) {
        throw new Error(`Expected button text to be "${expectedText}" but found "${actualText}"`);
    }
});

Then('I validate the label of the new member should be {string}', async function(title) {
    let element = await this.driver.$('.gh-canvas-title[data-test-screen-title]');
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(title)) {
        console.log('The screen title contains:', title);
    } else {
        throw new Error('The screen title does not contain:', title);
    }
});

When('I click members back', async function() {
    let element = await this.driver.$('a[data-test-link="members-back"]');
    await element.waitForClickable();
    return await element.click();
});

When('I fill the filter text field with {string}', async function(text) {
    let element = await this.driver.$('input[data-test-input="members-search"]');
    await element.waitForDisplayed();
    await element.setValue(text);
});

Then('I validate that the table contains the name {string}', async function(name) {
    let element = await this.driver.$('a[data-test-table-data="details"] .gh-members-list-name');
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(name)) {
        console.log('The table contains the name', name);
    } else {
        throw new Error('The table does not contain the name ' + name);
    }
});

Then('I validate the error message {string}', async function(errorMessage) {
    let element = await this.driver.$('.form-group.error .response');
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(errorMessage)) {
        console.log('The error message is displayed:', errorMessage);
    } else {
        throw new Error('The error message is not displayed: ' + errorMessage);
    }
});

When('I click leave button', async function() {
    let element = await this.driver.$('button[data-test-leave-button]');
    await element.waitForDisplayed();
    return await element.click();
});