import properties from './properties.json';
import PagePage from './model/pagePage';
import CommonFunction from "./model/commonFunction";

const pagePage = new PagePage();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe("Funcionalidad de Page", (z) => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
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
        //And I enter page title "Page1"
        pagePage.setTitle("Page1");
        commonFunction.wait(1000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 1");
        commonFunction.wait(2000);
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
        //And I validate the title of page "Page1"        
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page1");
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
        //And I enter page title "Page1"
        pagePage.setTitle("Page2");
        commonFunction.wait(1000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 2");
        commonFunction.wait(2000);
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
        //And I validate the title of page "Page1"        
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page2");
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
        //And I enter page title "Page3"
        pagePage.setTitle("Page3");
        commonFunction.wait(1000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 3");
        commonFunction.wait(2000);
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
        //And I select page to edit "Page3"  
        pagePage.clickToEditPage("Page3");
        commonFunction.wait(3000);
        //I enter page title "Page4"
        pagePage.setTitle("Page4");
        commonFunction.wait(4000);
        //And I enter description page "description Page 4"
        pagePage.setDescription("description Page 4");
        commonFunction.wait(2000);
        //And I click to update page
        pagePage.submitUpdatePage();
        commonFunction.wait(2000);
        //Then I click back to pages  
        pagePage.submitBackPages();
        commonFunction.wait(2000);
        //And I validate the title of page "Page4"        
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page4");
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
        //And I enter page title "Page5"
        pagePage.setTitle("Page5");
        commonFunction.wait(1000);
        //And I enter description page "description Page 5"
        pagePage.setDescription("description Page 5");
        commonFunction.wait(2000);
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
        //And I select page to edit "Page5"  
        pagePage.clickToEditPage("Page5");
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
        //Then I validate the title of the page does not exist "Page5"  
        let listPges = pagePage.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page5");
            expect(found).to.be.false;
        });
    });



});