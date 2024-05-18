import properties from './properties.json';
import PagePage from './model/pagePage';
import CommonFunction from "./model/commonFunction";

const pagePage = new PagePage();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe("Funcionalidad de Page", (z) => {
    let pseudoPage; 3000

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
        cy.request('https://my.api.mockaroo.com/pages.json?key=d87073e0').then((response) => {
            pseudoPage = response.body;
        });
    });

    it('Creación exitosa de un page, visualización del page creado en la sección de Pages', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title "pseudoPage.page_name"
        pagePage.setTitle(pseudoPage.page_name);
        commonFunction.wait(1000);
        //And I enter description page "pseudoPage.page_description"
        pagePage.setDescription(pseudoPage.page_description);
        commonFunction.wait(3000);
        //And I click publish page
        pagePage.submitPublish();
        commonFunction.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        commonFunction.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        commonFunction.wait(1000);
        //Then I click back to dashboard
        pagePage.submitBackDashboard();
        commonFunction.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(3000);
        //And I validate the title of page pseudoPage.page_name        
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, pseudoPage.page_name);
            expect(found).to.be.true;
        });
    });

    it('Creación exitosa de un page, desde editor', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title pseudoPage.page_name
        pagePage.setTitle(pseudoPage.page_name);
        commonFunction.wait(1000);
        //And I enter description page pseudoPage.page_description
        pagePage.setDescription(pseudoPage.page_description);
        commonFunction.wait(3000);
        //And I click publish page
        pagePage.submitPublish();
        commonFunction.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        commonFunction.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        commonFunction.wait(1000);
        //Then I click back to editor
        pagePage.submitBackEditor();
        commonFunction.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(3000);
        //And I validate the title of page pseudoPage.page_name        
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, pseudoPage.page_name);
            expect(found).to.be.true;
        });
    });

    it('Modificación exitosa de un page', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title pseudoPage.page_name
        pagePage.setTitle(pseudoPage.page_name);
        commonFunction.wait(1000);
        //And I enter description page pseudoPage.page_description
        pagePage.setDescription(pseudoPage.page_description);
        commonFunction.wait(3000);
        //And I click publish page
        pagePage.submitPublish();
        commonFunction.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        commonFunction.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        commonFunction.wait(1000);
        //Then  I click back to dashboard
        pagePage.submitBackDashboard();
        commonFunction.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(3000);
        //And I select page to edit pseudoPage.page_name  
        pagePage.clickToEditPage(pseudoPage.page_name);
        commonFunction.wait(3000);
        //I enter page title pseudoPage.new_page_name
        pagePage.setTitle(pseudoPage.new_page_name);
        commonFunction.wait(4000);
        //And I enter description page pseudoPage.new_page_description
        pagePage.setDescription(pseudoPage.new_page_description);
        commonFunction.wait(2000);
        //And I click to update page
        pagePage.submitUpdatePage();
        commonFunction.wait(2000);
        //Then I click back to pages  
        pagePage.submitBackPages();
        commonFunction.wait(2000);
        //And I validate the title of page pseudoPage.new_page_name        
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, pseudoPage.new_page_name);
            expect(found).to.be.true;
        });
    });

    it('Eliminar de manera exitosa una page', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title pseudoPage.page_name
        pagePage.setTitle(pseudoPage.page_name);
        commonFunction.wait(1000);
        //And I enter description page pseudoPage.page_description
        pagePage.setDescription(pseudoPage.page_description);
        commonFunction.wait(3000);
        //And I click publish page
        pagePage.submitPublish();
        commonFunction.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        commonFunction.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        commonFunction.wait(1000);
        //Then  I click back to dashboard
        pagePage.submitBackDashboard();
        commonFunction.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        commonFunction.wait(3000);
        //And I select page to edit pseudoPage.page_name  
        pagePage.clickToEditPage(pseudoPage.page_name);
        commonFunction.wait(3000);
        //And I click page settings
        pagePage.submitSettingsPage();
        commonFunction.wait(1000);
        //And I click delete page
        pagePage.submitDeletePage();
        commonFunction.wait(1000);
        //And I click delete confirmation page
        pagePage.buttonDeleteConfirmation();
        commonFunction.wait(2000);
        //Then I validate the title of the page does not exist pseudoPage.page_name  
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, pseudoPage.page_name);
            expect(found).to.be.false;
        });
    });
});