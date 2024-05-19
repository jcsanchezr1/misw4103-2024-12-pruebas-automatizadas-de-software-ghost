const {When, Then} = require('@cucumber/cucumber');
const {BeforeAll, Before} = require('@cucumber/cucumber');
const axios = require('axios');
const MemberPage = require('../model/memberPage');

let memberPage;
let pseudoMember;

BeforeAll(async function () {
    memberPage = new MemberPage();
})

Before(async function () {
    try {
        const response = await axios.get('https://my.api.mockaroo.com/members.json?key=a60249d0');
        pseudoMember = response.data;
    } catch (error) {
        console.error("Error fetching pseudoMember: ", error);
    }
})

When('Pseudo: I click members', async function () {
    memberPage.setDriver(this.driver);
    memberPage.clickLinSideBarkMembers();
});

When('Pseudo: I click new member', async function () {
    memberPage.clickNewMember();
});

When('Pseudo: I enter member name', async function () {
    memberPage.setMemberName(pseudoMember.member_name);
});

When('Pseudo: I enter member email', async function () {
    memberPage.setMemberEmail(pseudoMember.member_email);
});

When('Pseudo: I enter member name edited', async function () {
    memberPage.setMemberName(pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
});

When('Pseudo: I enter member invalid email', async function () {
    memberPage.setMemberEmail(pseudoMember.member_invalid_email);
});

When('Pseudo: I click save member', async function () {
    memberPage.clickSaveMember();
});

Then('Pseudo: I validate the label of the new member should be', async function () {
    let element = await this.driver.$(memberPage.elements.labelNewMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(pseudoMember.member_name)) {
        console.log('The screen title contains:', pseudoMember.member_name);
    } else {
        throw new Error('The screen title does not contain:', pseudoMember.member_name);
    }
});

Then('Pseudo: I validate the label of the new member should be edited', async function () {
    let element = await this.driver.$(memberPage.elements.labelNewMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(pseudoMember.member_name + ' ' + pseudoMember.member_last_name)) {
        console.log('The screen title contains:', pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
    } else {
        throw new Error('The screen title does not contain:', pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
    }
});

When('Pseudo: I click members back', async function () {
    memberPage.clickBackMembers();
});

When('Pseudo: I fill the filter text field with', async function () {
    memberPage.setFilterTextMembers(pseudoMember.member_name);
});

When('Pseudo: I fill the filter text field with edited', async function () {
    memberPage.setFilterTextMembers(pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
});

Then('Pseudo: I validate that the table contains the name', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(pseudoMember.member_name)) {
        console.log('The table contains the name', pseudoMember.member_name);
    } else {
        throw new Error('The table does not contain the name ' + pseudoMember.member_name);
    }
});

Then('Pseudo: I validate that the table contains the name edited', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(pseudoMember.member_name + ' ' + pseudoMember.member_last_name)) {
        console.log('The table contains the name', pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
    } else {
        throw new Error('The table does not contain the name ' + pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
    }
});

Then('Pseudo: I validate the error message {string}', async function (errorMessage) {
    let element = await this.driver.$(memberPage.elements.labelErrorMember);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (text.includes(errorMessage)) {
        console.log('The error message is displayed:', errorMessage);
    } else {
        throw new Error('The error message is not displayed: ' + errorMessage);
    }
});

When('Pseudo: I click leave button', async function () {
    memberPage.clickModalButtonLeaveMember();
});

When('Pseudo: I click first row on table members', async function () {
    memberPage.clickFirstRecordInTableMembers();
});

When('Pseudo: I click on the member actions button', async function () {
    await memberPage.clickMemberActionsButton();
});

When('Pseudo: I click on the delete member button', async function () {
    await memberPage.clickDeleteMemberButton();
});

When('Pseudo: I click on the confirm delete member button', async function () {
    await memberPage.clickConfirmDeleteMemberButton();
});

When('Pseudo: I click on the show all members button', async function () {
    await memberPage.clickShowAllMembersButton();
});

Then('Pseudo: I validate that the table not contains the name', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (!text.includes(pseudoMember.member_name)) {
        console.log('The table not contains the name', pseudoMember.member_name);
    } else {
        throw new Error('The table does contain the name ' + pseudoMember.member_name);
    }
});

Then('Pseudo: I validate that the table not contains the name edited', async function () {
    let element = await this.driver.$(memberPage.elements.tableMembers);
    await element.waitForDisplayed();
    let text = await element.getText();
    if (!text.includes(pseudoMember.member_name + ' ' + pseudoMember.member_last_name)) {
        console.log('The table not contains the name', pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
    } else {
        throw new Error('The table does contain the name ' + pseudoMember.member_name + ' ' + pseudoMember.member_last_name);
    }
});