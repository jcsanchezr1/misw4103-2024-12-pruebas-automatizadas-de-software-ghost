import properties from './properties.json';
import LoginPage from './model/loginPage';
import PagePage from './model/pagePage';

const pagePage = new PagePage();
const loginPage = new LoginPage();

describe('Funcionalidad de Tag', () => {
    beforeEach(() => {
        //Given un usuario admin logueado en Ghost
        loginPage.VisitURL(properties.URL);
        cy.wait(1000);
        loginPage.typeEmail(properties.EMAIL);
        loginPage.typePassword(properties.PASSWORD);
        loginPage.clickSignInButton();
        cy.wait(1000);
    });

    it('Creación exitosa de un page, visualización del page creado en la sección de Pages', () => {
        //When I click pages
        pagePage.submitLinkPages();
        cy.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page1"
        pagePage.setTitle("Page1");
        cy.wait(1000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 1");
        cy.wait(2000);
        //And I click publish page
        pagePage.submitPublish();
        cy.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        cy.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        cy.wait(1000);
        //Then I click back to dashboard
        pagePage.submitBackDashboard();
        cy.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        cy.wait(3000);
        //And I validate the title of page "Page1"        
        let listPges = pagePage.validateName();
        cy.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page1");
            expect(found).to.be.true;
        });
    });

    it('Creación exitosa de un page, desde editor', () => {
        //When I click pages
        pagePage.submitLinkPages();
        cy.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page1"
        pagePage.setTitle("Page2");
        cy.wait(1000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 2");
        cy.wait(2000);
        //And I click publish page
        pagePage.submitPublish();
        cy.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        cy.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        cy.wait(1000);
        //Then I click back to editor
        pagePage.submitBackEditor();
        cy.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        cy.wait(3000);
        //And I validate the title of page "Page1"        
        let listPges = pagePage.validateName();
        cy.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page2");
            expect(found).to.be.true;
        });
    });

    it('Modificación exitosa de un page', () => {
        //When I click pages
        pagePage.submitLinkPages();
        cy.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page1"
        pagePage.setTitle("Page3");
        cy.wait(1000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 3");
        cy.wait(2000);
        //And I click publish page
        pagePage.submitPublish();
        cy.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        cy.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        cy.wait(1000);
        //Then  I click back to dashboard
        pagePage.submitBackDashboard();
        cy.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        cy.wait(3000);
        //And I select page to edit "Page3"  
        pagePage.clickToEditPage("Page3");
        cy.wait(3000);
        //I enter page title "Page4"
        pagePage.setTitle("Page4");
        cy.wait(4000);
        //And I enter description page "description Page 1"
        pagePage.setDescription("description Page 4");
        cy.wait(2000);
        //And I click to update page
        pagePage.submitUpdatePage();
        cy.wait(2000);
        //Then I click back to pages  
        pagePage.submitBackPages();
        cy.wait(2000);
        //And I validate the title of page "Page4"        
        let listPges = pagePage.validateName();
        cy.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page4");
            expect(found).to.be.true;
        });
    });

    it('Eliminar de manera exitosa una page', () => {
        //When I click pages
        pagePage.submitLinkPages();
        cy.wait(1000);
        //And I click new page
        pagePage.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page5"
        pagePage.setTitle("Page5");
        cy.wait(1000);
        //And I enter description page "description Page 5"
        pagePage.setDescription("description Page 5");
        cy.wait(2000);
        //And I click publish page
        pagePage.submitPublish();
        cy.wait(1000);
        //And I click continue final review page
        pagePage.submitFinalReview();
        cy.wait(1000);
        //And I click publish final review page
        pagePage.submitConfirmReview();
        cy.wait(1000);
        //Then  I click back to dashboard
        pagePage.submitBackDashboard();
        cy.wait(1000);
        //And I click pages
        pagePage.submitLinkPages();
        cy.wait(3000);
        //And I select page to edit "Page3"  
        pagePage.clickToEditPage("Page5");
        cy.wait(3000);
        //And I click page settings
        pagePage.submitSettingsPage();
        cy.wait(1000);
        //And I click delete page
        pagePage.submitDeletePage();
        cy.wait(1000);
        //And I click delete confirmation page
        pagePage.buttonDeleteConfirmation();
        cy.wait(2000);
        //Then I validate the title of the page does not exist "Page5"  
        let listPges = pagePage.validateName();
        cy.wait(3000).then(() => {
            let found = pagePage.validateExistTitle(listPges, "Page5");
            expect(found).to.be.false;
        });
    });



});