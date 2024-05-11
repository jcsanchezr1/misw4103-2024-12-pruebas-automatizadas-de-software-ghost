import properties from './properties.json';
import PagePageOld from './model/pagePageOld';
import CommonFunction from './model/commonFunction';

const pagePageOld = new PagePageOld();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe('Funcionalidad de page old', () => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
    });

    it('Creación exitosa de un page, visualización del page creado en la sección de Pages', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        //When I click pages        
        pagePageOld.submitLinkPages();
        commonFunction.wait(3000);
        //And I click new page
        pagePageOld.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title "Page1"
        pagePageOld.setTitle("Page1");
        commonFunction.wait(1000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 1");
        commonFunction.wait(2000);
        //And I click publish page
        pagePageOld.submitPublish();
        commonFunction.wait(1000);
        //And I click confirm update
        pagePageOld.submitConfirmReview();
        commonFunction.wait(1000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        let listPges = pagePageOld.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePageOld.validateExistTitle(listPges, "Page1");
            expect(found).to.be.true;
        });
    });

    it('Modificación exitosa de un page', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        //When I click pages   
        pagePageOld.submitLinkPages();
        commonFunction.wait(3000);
        //And I click new page
        pagePageOld.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title "Page1"
        pagePageOld.setTitle("Page3");
        commonFunction.wait(1000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 3");
        commonFunction.wait(2000);
        //And I click publish page
        pagePageOld.submitPublish();
        commonFunction.wait(1000);
        //And I click confirm update
        pagePageOld.submitConfirmReview();
        commonFunction.wait(1000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        commonFunction.wait(3000);
        //And I select page to edit "Page3"  
        pagePageOld.clickToEditPage("Page3");
        commonFunction.wait(3000);
        //I enter page title "Page4"
        pagePageOld.setTitle("Page4");
        commonFunction.wait(4000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 4");
        commonFunction.wait(2000);
        //And I click to update page
        pagePageOld.submitUpdatePage();
        commonFunction.wait(2000);
        //And I click to submit update page
        pagePageOld.submitUpdate();
        commonFunction.wait(2000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        let listPges = pagePageOld.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePageOld.validateExistTitle(listPges, "Page4");
            expect(found).to.be.true;
        });
    });


    it('Eliminar de manera exitosa una page', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        //When I click pages   
        pagePageOld.submitLinkPages();
        commonFunction.wait(3000);
        //And I click new page
        pagePageOld.submitNewPage();
        commonFunction.wait(1000);
        //And I enter page title "Page1"
        pagePageOld.setTitle("Page5");
        commonFunction.wait(1000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 5");
        commonFunction.wait(2000);
        //And I click publish page
        pagePageOld.submitPublish();
        commonFunction.wait(1000);
        //And I click confirm update
        pagePageOld.submitConfirmReview();
        commonFunction.wait(1000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        commonFunction.wait(3000);
        //And I select page to edit "Page3"  
        pagePageOld.clickToEditPage("Page5");
        commonFunction.wait(3000);
        //And I click page settings
        pagePageOld.submitSettingsPage();
        commonFunction.wait(1000);
        //And I click delete page
        pagePageOld.submitDeletePage();
        commonFunction.wait(1000);
        //And I click delete confirmation page
        pagePageOld.buttonDeleteConfirmation();
        commonFunction.wait(2000);
        //Then I validate the title of the page does not exist "Page5"  
        let listPges = pagePageOld.validateName();
        commonFunction.wait(3000).then(() => {
            let found = pagePageOld.validateExistTitle(listPges, "Page5");
            expect(found).to.be.false;
        });
    });



});