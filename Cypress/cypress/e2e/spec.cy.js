import properties from './properties.json';
describe('Tests de Tag', () => {
    beforeEach(() => {
        cy.visit(properties.URL);
        cy.wait(1000);
        cy.get('input[id="ember6"]').type(properties.EMAIL);
        cy.get('input[id="ember8"]').type(properties.PASSWORD);
        cy.get('button[id="ember10"]').click();
        cy.wait(1000);
    });

    it('Test funcionalidad1', () => {
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a').click();
        cy.wait(1000);
        cy.get('body > div.gh-app > div > main > section > div > header > section > a').click();
        cy.wait(1000);
        cy.get('#tag-name').type('Tag1');
        cy.get('body > div.gh-app > div > main > section > form > div.gh-canvas-header.gh-canvas-header--sticky > header > section > button').click();
        cy.get('span > svg').should('be.visible');
    });

});