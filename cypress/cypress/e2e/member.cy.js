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
            expect(text).to.not.contain('name');
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
        // AND I enter member name "name1"
        memberPage.setMemberName('name1');
        commonFunction.wait(1000);
        // AND I enter member email "name1@uniandes.edu.co"
        memberPage.setMemberEmail('name1@uniandes.edu.co');
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "name1"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name1');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "name1"
        memberPage.setFilterTextMembers('name1');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name1"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name1');
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
        // AND I enter member name "name2"
        memberPage.setMemberName('name2');
        commonFunction.wait(1000);
        // AND I enter member email "name2@uniandes.edu.co"
        memberPage.setMemberEmail('name2@uniandes.edu.co');
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "name2"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name2');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "name2"
        memberPage.setFilterTextMembers('name2');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name2"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name2');
        commonFunction.wait(1000);
        // AND I click new member
        memberPage.clickNewMember();
        commonFunction.wait(1000);
        // AND I enter member name "name2"
        memberPage.setMemberName('name2');
        commonFunction.wait(1000);
        // AND I enter member email "name2@uniandes.edu.co"
        memberPage.setMemberEmail('name2@uniandes.edu.co');
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
        // AND I fill the filter text field with "name2"
        memberPage.setFilterTextMembers('name2');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name2"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name2');
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
        // AND I enter member name "name3"
        memberPage.setMemberName('name3');
        commonFunction.wait(1000);
        // AND I enter member email "name3@uniandes.edu.co"
        memberPage.setMemberEmail('name3@uniandes.edu.co');
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "name3"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name3');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "name3"
        memberPage.setFilterTextMembers('name3');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name3"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name3');
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
        // Then I validate the label of the new member should be "name3Modified"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name3Modified');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "name3Modified"
        memberPage.setFilterTextMembers('name3Modified');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name3Modified"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name3Modified');
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
        // AND I enter member name "name4"
        memberPage.setMemberName('name4');
        commonFunction.wait(1000);
        // AND I enter member email "name4@uniandes.edu.co"
        memberPage.setMemberEmail('name4@uniandes.edu.co');
        commonFunction.wait(1000);
        // AND I click save member
        memberPage.clickSaveMember();
        commonFunction.wait(1000);
        // Then I validate the label of the new member should be "name4"
        cy.get(memberPage.elements.labelNewMember).should('contain', 'name4');
        // AND I click members back
        memberPage.clickBackMembers();
        commonFunction.wait(1000);
        // AND I fill the filter text field with "name4"
        memberPage.setFilterTextMembers('name4');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name4"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name4');
        commonFunction.wait(1000);
        // AND I click first row on table members
        memberPage.clickFirstRecordInTableMembers();
        commonFunction.wait(1000);
        // AND I enter member email ".*-+"
        memberPage.setMemberEmail('.*-+');
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
        memberPage.setFilterTextMembers('name4');
        commonFunction.wait(1000);
        // AND I validate that the table contains the name "name4"
        cy.get(memberPage.elements.tableMembers).should('contain', 'name4');
        commonFunction.wait(1000);
    });
});