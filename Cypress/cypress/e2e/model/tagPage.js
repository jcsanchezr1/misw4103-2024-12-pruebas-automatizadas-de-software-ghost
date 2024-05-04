class TagPage {
    constructor() {        
        this.elements = {
            tagsPage: 'body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a',
            newTag: 'body > div.gh-app > div > main > section > div > header > section > a',
            name: '#tag-name',
            save: 'body > div.gh-app > div > main > section > form > div.gh-canvas-header > header > section > button',
            saved: 'span > svg'
        };  
}

clickTagsPage() {
    cy.get(this.elements.tagsPage).click();
}

clickNewTag() {
    cy.get(this.elements.newTag).click();
}

typeName(name) {
    cy.get(this.elements.name).type(name);
}

clickSave() {
    cy.get(this.elements.save).click();
}

isSaved() {
    cy.get(this.elements.saved).should('be.visible');
}

}
module.exports = TagPage;