const {Given, When, Then} = require('@cucumber/cucumber');
const {BeforeAll} = require('@cucumber/cucumber');
const MemberPage = require('../model/memberPage');

let memberPage;

BeforeAll(async function () {
    memberPage = new MemberPage();
})

When('I click members', async function () {
    memberPage.setDriver(this.driver);
    memberPage.clickLinSideBarkMembers();
});

When('I click new member', async function () {
    memberPage.clickNewMember();
});

When('I enter member name {string}', async function (name) {
    memberPage.setMemberName(name);
});

When('I enter member email {string}', async function (email) {
    memberPage.setMemberEmail(email);
});

When('I click save member', async function () {
    memberPage.clickSaveMember();
});

Then('I validate that the button text should be {string}', async function (expectedText) {
    let element = await this.driver.$(memberPage.elements.buttonSaveMember);
    await element.waitForDisplayed();
    const actualText = await element.getText();
    if (actualText !== expectedText) {
        throw new Error(`Expected button text to be "${expectedText}" but found "${actualText}"`);
    }
});

Then('I validate the label of the new member should be {string}', async function (title) {
    let element = await this.driver.$(memberPage.elements.labelNewMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(title)) {
        console.log('The screen title contains:', title);
    } else {
        throw new Error('The screen title does not contain:', title);
    }
});

When('I click members back', async function () {
    memberPage.clickBackMembers();
});

When('I fill the filter text field with {string}', async function (text) {
    memberPage.setFilterTextMembers(text);
});

Then('I validate that the table contains the name {string}', async function (name) {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(name)) {
        console.log('The table contains the name', name);
    } else {
        throw new Error('The table does not contain the name ' + name);
    }
});

Then('I validate the error message {string}', async function (errorMessage) {
    let element = await this.driver.$(memberPage.elements.labelErrorMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(errorMessage)) {
        console.log('The error message is displayed:', errorMessage);
    } else {
        throw new Error('The error message is not displayed: ' + errorMessage);
    }
});

When('I click leave button', async function () {
    memberPage.clickModalButtonLeaveMember();
});

When('I click first row on table members', async function () {
    memberPage.clickFirstRecordInTableMembers();
});

When('I click on the member actions button', async function () {
    await memberPage.clickMemberActionsButton();
});

When('I click on the delete member button', async function () {
    await memberPage.clickDeleteMemberButton();
});

When('I click on the confirm delete member button', async function () {
    await memberPage.clickConfirmDeleteMemberButton();
});

When('I click on the show all members button', async function () {
    await memberPage.clickShowAllMembersButton();
});

Then('I validate that the table not contains the name {string}', async function (name) {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (!text.includes(name)) {
        console.log('The table not contains the name', name);
    } else {
        throw new Error('The table does contain the name ' + name);
    }
});