class MemberPage {
      
    constructor() {        
        this.elements = {
            sideBarMembers: '.gh-nav-manage a[href="#/members/"]',
            buttonNewMember: 'a[href="#/members/new/"]',
            memberNameText: '#member-name',
            memberEmailText: '#member-email',
            buttonSaveMember: 'button.gh-btn-primary',
            labelNewMember: 'div.gh-member-details-identity h3',
            buttonBackMembers: '.gh-canvas-title a',
            textFilterMembers: '.gh-members-header-search input[type="text"]',
            tableMembers: '.gh-list',
            labelErrorMember: '.form-group.error .response',
            modalButtonLeaveMember: 'section.modal-content button.gh-btn-red',
            firstRowTableMembers: '.gh-list tbody tr:first-of-type .gh-list-data:first-child',
            buttonActionsMember: 'section.view-actions button.gh-btn-action-icon',
            buttonDeleteMember: 'button span.red',
            buttonConfirmDeleteMember: '.modal-footer button.gh-btn-red',
            buttonShowAllMembers: 'div.gh-members-empty a.ember-view.gh-btn span'
        };
    }

    clickLinkSideBarkMembers() {        
        cy.get(this.elements.sideBarMembers).click();
    }
    
    clickNewMember() {        
        cy.get(this.elements.buttonNewMember).click();
    }

    setMemberName(name) {
        cy.get(this.elements.memberNameText).click().type(name, {force: true});
    }

    setMemberEmail(email) {        
        cy.get(this.elements.memberEmailText).click().type(email, {force: true});
    }

    clickSaveMember() {        
        cy.get(this.elements.buttonSaveMember).click();
    }

    clickBackMembers() {        
        cy.get(this.elements.buttonBackMembers).click();
    }

    setFilterTextMembers(text) {
        cy.get(this.elements.textFilterMembers).clear().type(text);
    }

    clickModalButtonLeaveMember() {        
        cy.get(this.elements.modalButtonLeaveMember).click();
    }

    clickFirstRecordInTableMembers() {
        cy.get(this.elements.firstRowTableMembers).click();
    }

    clickMemberActionsButton() {
        cy.get(this.elements.buttonActionsMember).click();
    }

    clickDeleteMemberButton() {
        cy.get(this.elements.buttonDeleteMember).click();
    }

    clickConfirmDeleteMemberButton() {
        cy.get(this.elements.buttonConfirmDeleteMember).click();
    }

    clickShowAllMembersButton() {
        cy.get(this.elements.buttonShowAllMembers).click();
    }
}

module.exports = MemberPage;