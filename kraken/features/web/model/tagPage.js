const { When, Then } = require('@cucumber/cucumber');
class TagPage {
      
    constructor() {        
        this.elements = {
            tagsPage:
              "body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a",
            newTag:
              "body > div.gh-app > div > main > section > div > header > section > a",
            name: "#tag-name",
            save: "body > div.gh-app > div > main > section > form > div.gh-canvas-header > header > section > button",
            saved: "span > svg",
            getNames: ".gh-tag-list-name",
            slug: "#tag-slug",
            deleteButton: "body > div.gh-app > div > main > section > div > button",
            displayDelete: "body > div.epm-modal-container > div > div",
            confirmDelete:
              "body > div.epm-modal-container > div > div > div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view",
            tagName: "body > div.gh-app > div > main > section > div > header > h2",
          };
    }

    setDriver(driver) {
        this.driver = driver;
    }

    async ClickTagPages() {        
        await this.driver.$(this.elements.tagsPage).waitForDisplayed();
        //await this.driver.$(this.elements.sideBarlink).waitForExist();
        return await this.driver.$(this.elements.tagsPage).click();
    }
    async CreateNewTag() {        
        await this.driver.$(this.elements.newTag).waitForDisplayed();
        return await this.driver.$(this.elements.newTag).click();
    }
    async setTitle(title) {
        await this.driver.$(this.elements.name).waitForDisplayed();
        await this.driver.$(this.elements.name).setValue(title); 
    }
    async save() {        
        await this.driver.$(this.elements.save).waitForDisplayed();
        return await this.driver.$(this.elements.save).click();
    }
}

module.exports = TagPage;