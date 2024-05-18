import properties from './properties.json';
import MemberPage from './model/memberPage';
import CommonFunction from "./model/commonFunction";
import membersApriori from "./prioriFiles/members";

const memberPage = new MemberPage();
const commonFunction = new CommonFunction();

let parentFolder = '';
let member_name;

describe('Funcionalidad de Members A priori', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
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
        // THEN I validate that the table not contains the name "name"
        cy.get(memberPage.elements.tableMembers).should(($table) => {
            const text = $table.text();
            expect(text).to.not.contain(member_name);
        });
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa y lo elimino de manera exitosa', () => {
        member_name = membersApriori[0].member_name;
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
        // AND I enter member name "member_name"
        memberPage.setMemberName(membersApriori[0].member_name);
        commonFunction.wait(1000);
        // AND I enter member email "member_email"
        memberPage.setMemberEmail(membersApriori[0].member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "member_name"
        cy.get(memberPage.elements.labelNewMember).should('contain', membersApriori[0].member_name);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "member_name"
        memberPage.setFilterTextMembers(membersApriori[0].member_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "member_name"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[0].member_name);
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, creo nuevo miembro de manera fallida y lo elimino de manera exitosa', () => {
        member_name = membersApriori[1].member_name;
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
        // AND I enter member name "member_name"
        memberPage.setMemberName(membersApriori[1].member_name);
        commonFunction.wait(1000);
        // AND I enter member email "membersApriori[1].member_email"
        memberPage.setMemberEmail(membersApriori[1].member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "member_name"
        cy.get(memberPage.elements.labelNewMember).should('contain', membersApriori[1].member_name);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "member_name"
        memberPage.setFilterTextMembers(membersApriori[1].member_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "member_name"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[1].member_name);
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "member_name"
        memberPage.setMemberName(membersApriori[1].member_name);
        commonFunction.wait(1000);
        // AND I enter member email "membersApriori[1].member_email"
        memberPage.setMemberEmail(membersApriori[1].member_email);
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
        // AND I fill the filter text field with "member_name"
        memberPage.setFilterTextMembers(membersApriori[1].member_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "member_name"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[1].member_name);
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera exitosa y lo elimino de manera exitosa', () => {
        member_name = membersApriori[2].member_name;
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
        // AND I enter member name "member_name"
        memberPage.setMemberName(membersApriori[2].member_name);
        commonFunction.wait(1000);
        // AND I enter member email "member_email"
        memberPage.setMemberEmail(membersApriori[2].member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "member_name"
        cy.get(memberPage.elements.labelNewMember).should('contain', membersApriori[2].member_name);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "member_name"
        memberPage.setFilterTextMembers(membersApriori[2].member_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "member_name"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[2].member_name);
        commonFunction.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        commonFunction.wait(1000);
        // AND I enter member name "Modified"
        memberPage.setMemberName(' ' + membersApriori[2].member_last_name);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "member_name + ' ' + member_last_name"
        cy.get(memberPage.elements.labelNewMember).should('contain', membersApriori[2].member_name + ' ' + membersApriori[2].member_last_name);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "member_name + ' ' + member_last_name"
        memberPage.setFilterTextMembers(membersApriori[2].member_name + ' ' + membersApriori[2].member_last_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "member_name + ' ' + member_last_name"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[2].member_name + ' ' + membersApriori[2].member_last_name);
        commonFunction.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera fallida y lo elimino de manera exitosa', () => {
        member_name = membersApriori[3].member_name;
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
        // AND I enter member name "name4"
        memberPage.setMemberName(membersApriori[3].member_name);
        commonFunction.wait(1000);
        // AND I enter member email "name4@uniandes.edu.co"
        memberPage.setMemberEmail(membersApriori[3].member_email);
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "name4"
        cy.get(memberPage.elements.labelNewMember).should('contain', membersApriori[3].member_name);
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "name4"
        memberPage.setFilterTextMembers(membersApriori[3].member_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name4"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[3].member_name);
        commonFunction.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        commonFunction.wait(1000);
        // AND I enter member email ".*-+"
        memberPage.setMemberEmail(membersApriori[3].member_invalid_email);
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
        // AND I fill the filter text field with "name4"
        memberPage.setFilterTextMembers(membersApriori[3].member_name);
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name4"
        cy.get(memberPage.elements.tableMembers).should('contain', membersApriori[3].member_name);
        commonFunction.wait(1000);
    });
});