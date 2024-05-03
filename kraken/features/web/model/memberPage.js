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
}

module.exports = PagePage;