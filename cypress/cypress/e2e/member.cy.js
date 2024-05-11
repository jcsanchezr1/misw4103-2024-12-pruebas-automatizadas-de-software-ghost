import properties from './properties.json';
import LoginPage from './model/loginPage';
import MemberPage from './model/memberPage';
import CommonFunction from "./model/commonFunction";

const memberPage = new MemberPage();
const loginPage = new LoginPage();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe('Funcionalidad de Members', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
    });

    afterEach(() => {
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        cy.wait(1000);
        // AND I click on the member actions button
        memberPage.clickMemberActionsButton();
        cy.wait(1000);
        // AND I click on the delete member button
        memberPage.clickDeleteMemberButton();
        cy.wait(1000);
        // AND I click on the confirm delete member button
        memberPage.clickConfirmDeleteMemberButton();
        cy.wait(1000);
        // AND I click on the show all members button
        memberPage.clickShowAllMembersButton();
        cy.wait(1000);
        // THEN I validate that the table not contains the name "name"
        cy.get(memberPage.elements.tableMembers).should(($table) => {
            const text = $table.text();
            expect(text).to.not.contain('name');
        });
        cy.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa y lo elimino de manera exitosa', () => {
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        cy.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        cy.wait(1000);
        // AND I enter member name "name1"
        memberPage.setMemberName('name1');
        cy.wait(1000);
        // AND I enter member email "name1@uniandes.edu.co"
        memberPage.setMemberEmail('name1@uniandes.edu.co');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // Then I validate the label of the new member should be "name1"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name1');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I fill the filter text field with "name1"
        memberPage.setFilterTextMembers('name1');
        cy.wait(1000);
        // AND I validate that the table contains the name "name1"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name1');
        cy.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, creo nuevo miembro de manera fallida y lo elimino de manera exitosa', () => {
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        cy.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        cy.wait(1000);
        // AND I enter member name "name2"
        memberPage.setMemberName('name2');
        cy.wait(1000);
        // AND I enter member email "name2@uniandes.edu.co"
        memberPage.setMemberEmail('name2@uniandes.edu.co');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // Then I validate the label of the new member should be "name2"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name2');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I fill the filter text field with "name2"
        memberPage.setFilterTextMembers('name2');
        cy.wait(1000);
        // AND I validate that the table contains the name "name2"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name2');
        cy.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        cy.wait(1000);
        // AND I enter member name "name2"
        memberPage.setMemberName('name2');
        cy.wait(1000);
        // AND I enter member email "name2@uniandes.edu.co"
        memberPage.setMemberEmail('name2@uniandes.edu.co');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // THEN I validate the error message "Member already exists. Attempting to add member with existing email address"
        cy.get(memberPage.elements.labelErrorMember).should('contain', 'Member already exists. Attempting to add member with existing email address');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I click leave button
        memberPage.clickModalButtonLeaveMember();
        cy.wait(1000);
        // AND I fill the filter text field with "name2"
        memberPage.setFilterTextMembers('name2');
        cy.wait(1000);
        // AND I validate that the table contains the name "name2"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name2');
        cy.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera exitosa y lo elimino de manera exitosa', () => {
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        cy.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        cy.wait(1000);
        // AND I enter member name "name3"
        memberPage.setMemberName('name3');
        cy.wait(1000);
        // AND I enter member email "name3@uniandes.edu.co"
        memberPage.setMemberEmail('name3@uniandes.edu.co');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // Then I validate the label of the new member should be "name3"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name3');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I fill the filter text field with "name3"
        memberPage.setFilterTextMembers('name3');
        cy.wait(1000);
        // AND I validate that the table contains the name "name3"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name3');
        cy.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        cy.wait(1000);
        // AND I enter member name "Modified"
        memberPage.setMemberName('Modified');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // Then I validate the label of the new member should be "name3Modified"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name3Modified');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I fill the filter text field with "name3Modified"
        memberPage.setFilterTextMembers('name3Modified');
        cy.wait(1000);
        // AND I validate that the table contains the name "name3Modified"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name3Modified');
        cy.wait(1000);
    });

    it('Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera fallida y lo elimino de manera exitosa', () => {
        // WHEN I click members
        memberPage.clickLinkSideBarkMembers();
        cy.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        cy.wait(1000);
        // AND I enter member name "name4"
        memberPage.setMemberName('name4');
        cy.wait(1000);
        // AND I enter member email "name4@uniandes.edu.co"
        memberPage.setMemberEmail('name4@uniandes.edu.co');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // Then I validate the label of the new member should be "name4"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name4');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I fill the filter text field with "name4"
        memberPage.setFilterTextMembers('name4');
        cy.wait(1000);
        // AND I validate that the table contains the name "name4"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name4');
        cy.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        cy.wait(1000);
        // AND I enter member email ".*-+"
        memberPage.setMemberEmail('.*-+');
        cy.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        cy.wait(1000);
        // THEN I validate the error message "Invalid Email."
        cy.get(memberPage.elements.labelErrorMember).should('contain', 'Invalid Email.');
        // AND I click members back
        memberPage.clickBackMembers();
        cy.wait(1000);
        // AND I click leave button
        memberPage.clickModalButtonLeaveMember();
        cy.wait(1000);
        // AND I fill the filter text field with "name4"
        memberPage.setFilterTextMembers('name4');
        cy.wait(1000);
        // AND I validate that the table contains the name "name4"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name4');
        cy.wait(1000);
    });
});