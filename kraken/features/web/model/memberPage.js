const { When, Then } = require('@cucumber/cucumber');
class PagePage {
      
    constructor() {        
        this.elements = {
            sideBarMembers: 'li.relative a[data-test-nav="members"]',
            buttonNewMember: '.gh-btn.ember-view[data-test-new-member-button="true"]',
            memberNameText: '#member-name',
            memberEmailText: '#member-email',
            buttonSaveMember: 'button[data-test-button="save"]',
            labelNewMember: '.gh-canvas-title[data-test-screen-title]',
            buttonBackMembers: 'a[data-test-link="members-back"]',
            textFilterMembers: 'input[data-test-input="members-search"]',
            tableMembers: 'a[data-test-table-data="details"] .gh-members-list-name',
            labelErrorMember: '.form-group.error .response',
            modalButtonLeaveMember: 'button[data-test-leave-button]',
            firstRowTableMembers: '.gh-members-list-row a[data-test-table-data="details"]',
            buttonActionsMember: 'button[data-test-button="member-actions"]',
            buttonDeleteMember: 'button[data-test-button="delete-member"]',
            buttonConfirmDeleteMember: 'button[data-test-button="confirm"]',
            buttonShowAllMembers: 'a[data-test-button="show-all-members"]'
        };
    }

    setDriver(driver) {
        this.driver = driver;
    }

    async clickLinSideBarkMembers() {        
        await this.driver.$(this.elements.sideBarMembers).waitForDisplayed();
        return await this.driver.$(this.elements.sideBarMembers).click();
    }

    
    async clickNewMember() {        
        await this.driver.$(this.elements.buttonNewMember).waitForDisplayed();
        return await this.driver.$(this.elements.buttonNewMember).click();
    }

    async setMemberName(name) {
        await this.driver.$(this.elements.memberNameText).waitForDisplayed();
        await this.driver.$(this.elements.memberNameText).setValue(name); 
    }

    async setMemberEmail(email) {        
        await this.driver.$(this.elements.memberEmailText).waitForDisplayed();
        await this.driver.$(this.elements.memberEmailText).setValue(email); 
    }

    async clickSaveMember() {        
        await this.driver.$(this.elements.buttonSaveMember).waitForDisplayed();
        return await this.driver.$(this.elements.buttonSaveMember).click();
    }

    async clickBackMembers() {        
        await this.driver.$(this.elements.buttonBackMembers).waitForDisplayed();
        return await this.driver.$(this.elements.buttonBackMembers).click();
    }

    async setFilterTextMembers(text) {        
        await this.driver.$(this.elements.textFilterMembers).waitForDisplayed();
        await this.driver.$(this.elements.textFilterMembers).setValue(text); 
    }

    async clickModalButtonLeaveMember() {        
        await this.driver.$(this.elements.modalButtonLeaveMember).waitForDisplayed();
        return await this.driver.$(this.elements.modalButtonLeaveMember).click();
    }

    async clickFirstRecordInTableMembers() {
        await this.driver.$(this.elements.firstRowTableMembers).waitForDisplayed();
        const firstRecord = await this.driver.$(this.elements.firstRowTableMembers);
        await firstRecord.click();
    }

    async clickMemberActionsButton() {
        await this.driver.$(this.elements.buttonActionsMember).waitForDisplayed();
        const memberActionsButton = await this.driver.$(this.elements.buttonActionsMember);
        await memberActionsButton.click();
    }

    async clickDeleteMemberButton() {
        await this.driver.$(this.elements.buttonDeleteMember).waitForDisplayed();
        const deleteMemberButton = await this.driver.$(this.elements.buttonDeleteMember);
        await deleteMemberButton.click();
    }

    async clickConfirmDeleteMemberButton() {
        await this.driver.$(this.elements.buttonConfirmDeleteMember).waitForDisplayed();
        const confirmDeleteButton = await this.driver.$(this.elements.buttonConfirmDeleteMember);
        await confirmDeleteButton.click();
    }

    async clickShowAllMembersButton() {
        await this.driver.$(this.elements.buttonShowAllMembers).waitForDisplayed();
        const showAllMembersButton = await this.driver.$(this.elements.buttonShowAllMembers);
        await showAllMembersButton.click();
    }
}

module.exports = PagePage;