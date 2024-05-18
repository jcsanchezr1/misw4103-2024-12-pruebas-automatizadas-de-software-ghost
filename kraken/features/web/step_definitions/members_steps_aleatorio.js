const {When, Then} = require('@cucumber/cucumber');
const {BeforeAll, Before} = require('@cucumber/cucumber');
const {faker} = require('@faker-js/faker');
const MemberPage = require('../model/memberPage');

let memberPage;
let member_name;
let member_email;
let member_last_name;
let member_invalid_email;

BeforeAll(async function () {
    memberPage = new MemberPage();
})

Before(async function () {
    member_name = faker.name.firstName();
    member_email = faker.internet.email();
    member_last_name = faker.name.lastName();
    member_invalid_email = member_email.replace('@', 'at');
})

When('Aleatorio: I click members', async function () {
    memberPage.setDriver(this.driver);
    memberPage.clickLinSideBarkMembers();
});

When('Aleatorio: I click new member', async function () {
    memberPage.clickNewMember();
});

When('Aleatorio: I enter member name', async function () {
    memberPage.setMemberName(member_name);
});

When('Aleatorio: I enter member email', async function () {
    memberPage.setMemberEmail(member_email);
});

When('Aleatorio: I enter member name edited', async function () {
    memberPage.setMemberName(member_name + ' ' + member_last_name);
});

When('Aleatorio: I enter member invalid email', async function () {
    memberPage.setMemberEmail(member_invalid_email);
});

When('Aleatorio: I click save member', async function () {
    memberPage.clickSaveMember();
});

Then('Aleatorio: I validate the label of the new member should be', async function () {
    let element = await this.driver.$(memberPage.elements.labelNewMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(member_name)) {
        console.log('The screen title contains:', member_name);
    } else {
        throw new Error('The screen title does not contain:', member_name);
    }
});

Then('Aleatorio: I validate the label of the new member should be edited', async function () {
    let element = await this.driver.$(memberPage.elements.labelNewMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(member_name + ' ' + member_last_name)) {
        console.log('The screen title contains:', member_name + ' ' + member_last_name);
    } else {
        throw new Error('The screen title does not contain:', member_name + ' ' + member_last_name);
    }
});

When('Aleatorio: I click members back', async function () {
    memberPage.clickBackMembers();
});

When('Aleatorio: I fill the filter text field with', async function () {
    memberPage.setFilterTextMembers(member_name);
});

When('Aleatorio: I fill the filter text field with edited', async function () {
    memberPage.setFilterTextMembers(member_name + ' ' + member_last_name);
});

Then('Aleatorio: I validate that the table contains the name', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(member_name)) {
        console.log('The table contains the name', member_name);
    } else {
        throw new Error('The table does not contain the name ' + member_name);
    }
});

Then('Aleatorio: I validate that the table contains the name edited', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(member_name + ' ' + member_last_name)) {
        console.log('The table contains the name', member_name + ' ' + member_last_name);
    } else {
        throw new Error('The table does not contain the name ' + member_name + ' ' + member_last_name);
    }
});

Then('Aleatorio: I validate the error message {string}', async function (errorMessage) {
    let element = await this.driver.$(memberPage.elements.labelErrorMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(errorMessage)) {
        console.log('The error message is displayed:', errorMessage);
    } else {
        throw new Error('The error message is not displayed: ' + errorMessage);
    }
});

When('Aleatorio: I click leave button', async function () {
    memberPage.clickModalButtonLeaveMember();
});

When('Aleatorio: I click first row on table members', async function () {
    memberPage.clickFirstRecordInTableMembers();
});

When('Aleatorio: I click on the member actions button', async function () {
    await memberPage.clickMemberActionsButton();
});

When('Aleatorio: I click on the delete member button', async function () {
    await memberPage.clickDeleteMemberButton();
});

When('Aleatorio: I click on the confirm delete member button', async function () {
    await memberPage.clickConfirmDeleteMemberButton();
});

When('Aleatorio: I click on the show all members button', async function () {
    await memberPage.clickShowAllMembersButton();
});

Then('Aleatorio: I validate that the table not contains the name', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (!text.includes(member_name)) {
        console.log('The table not contains the name', member_name);
    } else {
        throw new Error('The table does contain the name ' + member_name);
    }
});

Then('Aleatorio: I validate that the table not contains the name edited', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (!text.includes(member_name + ' ' + member_last_name)) {
        console.log('The table not contains the name', member_name + ' ' + member_last_name);
    } else {
        throw new Error('The table does contain the name ' + member_name + ' ' + member_last_name);
    }
});