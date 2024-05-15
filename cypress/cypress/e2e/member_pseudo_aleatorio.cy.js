import properties from './properties.json';
import LoginPage from './model/loginPage';
import MemberPage from './model/memberPage';
import CommonFunction from "./model/commonFunction";

const memberPage = new MemberPage();
const loginPage = new LoginPage();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe('Funcionalidad de Members', () => {
    let pseudoMember;

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        });
        cy.request('https://my.api.mockaroo.com/members.json?key=a60249d0').then((response) => {
            pseudoMember = response.body;
        });
    });

    afterEach(() => {
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        commonFunction.wait(1000);
        // AND I click on the member actions button
        memberPage.clickMemberActionsButton();
        commonFunction.wait(1000);
        // AND I click on the delete member button
        memberPage.clickDeleteMemberButton();
        commonFunction.wait(1000);
        // AND I click on the confirm delete member button
        memberPage.clickConfirmDeleteMemberButton();
        commonFunction.wait(1000);
        // AND I click on the show all members button
        memberPage.clickShowAllMembersButton();
        commonFunction.wait(1000);
        // THEN I validate that the table not contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should(($table) => {
            const text = $table.text();
            expect(text).to.not.contain(pseudoMember.member);
        });
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa y lo elimino de manera exitosa', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "pseudoMember.member"
        memberPage.setMemberName(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I enter member email "pseudoMember.member_email"
        memberPage.setMemberEmail(pseudoMember.member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "pseudoMember.member"
        cy.get(memberPage.elements.labelNewMember).should('contain', pseudoMember.member);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member"
        memberPage.setFilterTextMembers(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member);
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, creo nuevo miembro de manera fallida y lo elimino de manera exitosa', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "pseudoMember.member"
        memberPage.setMemberName(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I enter member email "pseudoMember.member_email"
        memberPage.setMemberEmail(pseudoMember.member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "pseudoMember.member"
        cy.get(memberPage.elements.labelNewMember).should('contain', pseudoMember.member);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member"
        memberPage.setFilterTextMembers(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member);
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "pseudoMember.member"
        memberPage.setMemberName(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I enter member email "pseudoMember.member_email"
        memberPage.setMemberEmail(pseudoMember.member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // THEN I validate the error message "Member already exists. Attempting to add member with existing email address"
        cy.get(memberPage.elements.labelErrorMember).should('contain', 'Member already exists. Attempting to add member with existing email address');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I click leave button
        memberPage.clickModalButtonLeaveMember();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member"
        memberPage.setFilterTextMembers(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member);
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera exitosa y lo elimino de manera exitosa', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "pseudoMember.member"
        memberPage.setMemberName(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I enter member email "pseudoMember.member_email"
        memberPage.setMemberEmail(pseudoMember.member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "pseudoMember.member"
        cy.get(memberPage.elements.labelNewMember).should('contain', pseudoMember.member);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member"
        memberPage.setFilterTextMembers(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member);
        commonFunction.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        commonFunction.wait(1000);
        // AND I enter member name "Modified"
        memberPage.setMemberName('Modified');
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "pseudoMember.member" + "Modified"
        cy.get(memberPage.elements.labelNewMember).should('contain', pseudoMember.member + 'Modified');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member" + "Modified"
        memberPage.setFilterTextMembers(pseudoMember.member + 'Modified');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member" + "Modified"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member + 'Modified');
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera fallida y lo elimino de manera exitosa', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "pseudoMember.member"
        memberPage.setMemberName(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I enter member email "pseudoMember.member_email"
        memberPage.setMemberEmail(pseudoMember.member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "pseudoMember.member"
        cy.get(memberPage.elements.labelNewMember).should('contain', pseudoMember.member);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member"
        memberPage.setFilterTextMembers(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member);
        commonFunction.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        commonFunction.wait(1000);
        // AND I enter member email ".*-+"
        memberPage.setMemberEmail(pseudoMember.member_invalid_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // THEN I validate the error message "Invalid Email."
        cy.get(memberPage.elements.labelErrorMember).should('contain', 'Invalid Email.');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I click leave button
        memberPage.clickModalButtonLeaveMember();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "pseudoMember.member"
        memberPage.setFilterTextMembers(pseudoMember.member);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "pseudoMember.member"
        cy.get(memberPage.elements.tableMembers).should('contain', pseudoMember.member);
        commonFunction.wait(1000);
    });
});