import properties from './properties.json';
import LoginPageOld from './model/loginPageOld';
import PagePageOld from './model/pagePageOld';

const pagePageOld = new PagePageOld();
const loginPageOld = new LoginPageOld();

describe('Funcionalidad de page', () => {
    beforeEach(() => {
        //Given un usuario admin logueado en Ghost
        loginPageOld.VisitURL(properties.URL_OLD);
        cy.wait(1000);
        loginPageOld.typeEmail(properties.EMAIL);
        loginPageOld.typePassword(properties.PASSWORD);
        loginPageOld.clickSignInButton();
        cy.wait(6000);
    });

    it('Creación exitosa de un page, visualización del page creado en la sección de Pages', () => {
        //When I click pages        
        pagePageOld.submitLinkPages();
        cy.wait(3000);
        //And I click new page
        pagePageOld.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page1"
        pagePageOld.setTitle("Page1");
        cy.wait(1000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 1");
        cy.wait(2000);
        //And I click publish page
        pagePageOld.submitPublish();
        cy.wait(1000);
        //And I click confirm update
        pagePageOld.submitConfirmReview();
        cy.wait(1000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        let listPges = pagePageOld.validateName();
        cy.wait(3000).then(() => {
            let found = pagePageOld.validateExistTitle(listPges, "Page1");
            expect(found).to.be.true;
        });
    });

    it('Modificación exitosa de un page', () => {
        //When I click pages   
        pagePageOld.submitLinkPages();
        cy.wait(3000);
        //And I click new page
        pagePageOld.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page1"
        pagePageOld.setTitle("Page3");
        cy.wait(1000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 3");
        cy.wait(2000);
        //And I click publish page
        pagePageOld.submitPublish();
        cy.wait(1000);
        //And I click confirm update
        pagePageOld.submitConfirmReview();
        cy.wait(1000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        cy.wait(3000);
        //And I select page to edit "Page3"  
        pagePageOld.clickToEditPage("Page3");
        cy.wait(3000);
        //I enter page title "Page4"
        pagePageOld.setTitle("Page4");
        cy.wait(4000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 4");
        cy.wait(2000);
        //And I click to update page
        pagePageOld.submitUpdatePage();
        cy.wait(2000);
        //And I click to submit update page
        pagePageOld.submitUpdate();
        cy.wait(2000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        let listPges = pagePageOld.validateName();
        cy.wait(3000).then(() => {
            let found = pagePageOld.validateExistTitle(listPges, "Page4");
            expect(found).to.be.true;
        });
    });


    it('Eliminar de manera exitosa una page', () => {
        //When I click pages   
        pagePageOld.submitLinkPages();
        cy.wait(3000);
        //And I click new page
        pagePageOld.submitNewPage();
        cy.wait(1000);
        //And I enter page title "Page1"
        pagePageOld.setTitle("Page5");
        cy.wait(1000);
        //And I enter description page "description Page 1"
        pagePageOld.setDescription("description Page 5");
        cy.wait(2000);
        //And I click publish page
        pagePageOld.submitPublish();
        cy.wait(1000);
        //And I click confirm update
        pagePageOld.submitConfirmReview();
        cy.wait(1000);
        //Then  I click pages
        pagePageOld.submitBackPages();
        cy.wait(3000);
        //And I select page to edit "Page3"  
        pagePageOld.clickToEditPage("Page5");
        cy.wait(3000);
        //And I click page settings
        pagePageOld.submitSettingsPage();
        cy.wait(1000);
        //And I click delete page
        pagePageOld.submitDeletePage();
        cy.wait(1000);
        //And I click delete confirmation page
        pagePageOld.buttonDeleteConfirmation();
        cy.wait(2000);
        //Then I validate the title of the page does not exist "Page5"  
        let listPges = pagePageOld.validateName();
        cy.wait(3000).then(() => {
            let found = pagePageOld.validateExistTitle(listPges, "Page5");
            expect(found).to.be.false;
        });
    });



});