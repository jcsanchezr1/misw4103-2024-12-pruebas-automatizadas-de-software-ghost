const { When, Then } = require('@cucumber/cucumber');
class MemberPage {
      
    constructor() {        
        this.elements = {
            sideBarMembers: 'a[href="#/members/"]',
            buttonNewMember: 'a[href="#/members/new/"]',
            memberNameText: '#member-name',
            memberEmailText: '#member-email',
            buttonSaveMember: 'button=Save',
            labelNewMember: '.gh-member-details-identity h3',
            buttonBackMembers: '.gh-canvas-title a',
            textFilterMembers: '.gh-members-header-search input[type="text"]',
            tableMembers: '.gh-list',
            labelErrorMember: '.form-group.error .response',
            modalButtonLeaveMember: 'button=Leave',
            firstRowTableMembers: '.gh-list tbody tr:first-of-type a',
            buttonActionsMember: 'section.view-actions button.gh-btn-action-icon',
            buttonDeleteMember: 'button span.red',
            buttonConfirmDeleteMember: '.modal-footer button.gh-btn-red',
            buttonShowAllMembers: 'div.gh-members-empty a.ember-view.gh-btn span'
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

module.exports = MemberPage;