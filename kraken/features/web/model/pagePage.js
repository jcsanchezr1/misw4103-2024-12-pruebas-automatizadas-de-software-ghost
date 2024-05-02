const { When, Then } = require('@cucumber/cucumber');
class PagePage {
      
    constructor() {        
        this.elements = {
            sideBarlink: 'li a[data-test-nav="pages"]',
            buttonNewMember: '.gh-btn[data-test-new-page-button=""]',
            buttonPublishPage: 'button.gh-btn-editor[data-test-button="publish-flow"]',
            buttonSettingsPage: 'button.settings-menu-toggle',
            buttonDeletePage: 'button[data-test-button="delete-post"]',
            buttonDeleteConfirmation: 'button[data-test-button="delete-post-confirm"]',
            buttonContinueFinalReview: 'button[data-test-button="continue"]',
            buttonBackDashBoard: 'a.gh-back-to-editor',
            buttonBackEditor: 'button[data-test-button="close-publish-flow"]',
            buttonConfirmPublish: 'button[data-test-button="confirm-publish"]',
            buttonBackPage: 'a.gh-btn-editor.gh-editor-back-button', 
            buttonUpdatePage: 'button[data-test-button="publish-save"]',           
            pageTitle: '.ember-text-area',
            pageDescription: 'div.kg-prose[data-lexical-editor="true"]',
            titleList:'li a h3.gh-content-entry-title'            
        };
    }

    setDriver(driver) {
        this.driver = driver;
    }
        
    async submitLinkPages() {        
        await this.driver.$(this.elements.sideBarlink).waitForDisplayed();
        //await this.driver.$(this.elements.sideBarlink).waitForExist();
        return await this.driver.$(this.elements.sideBarlink).click();
    }

    async submitNewPage() {        
        await this.driver.$(this.elements.buttonNewMember).waitForDisplayed();
        return await this.driver.$(this.elements.buttonNewMember).click();
    }

    async submitPublish() {        
        await this.driver.$(this.elements.buttonPublishPage).waitForDisplayed();
        return await this.driver.$(this.elements.buttonPublishPage).click();
    }

    async submitUpdatePage() {        
        await this.driver.$(this.elements.buttonUpdatePage).waitForDisplayed();
        return await this.driver.$(this.elements.buttonUpdatePage).click();
    }

    async submitSettingsPage() {        
        await this.driver.$(this.elements.buttonSettingsPage).waitForDisplayed();
        return await this.driver.$(this.elements.buttonSettingsPage).click();
    }

    async submitDeletePage() {        
        await this.driver.$(this.elements.buttonDeletePage).waitForDisplayed();
        return await this.driver.$(this.elements.buttonDeletePage).click();
    }

    async buttonDeleteConfirmation() {        
        await this.driver.$(this.elements.buttonDeleteConfirmation).waitForDisplayed();
        return await this.driver.$(this.elements.buttonDeleteConfirmation).click();
    }

    async submitFinalReview() {        
        await this.driver.$(this.elements.buttonContinueFinalReview).waitForDisplayed();
        return await this.driver.$(this.elements.buttonContinueFinalReview).click();
    }

    async submitConfirmReview() {        
        await this.driver.$(this.elements.buttonConfirmPublish).waitForDisplayed();
        return await this.driver.$(this.elements.buttonConfirmPublish).click();
    }

    async submitBackDashboard() {        
        await this.driver.$(this.elements.buttonBackDashBoard).waitForDisplayed();
        return await this.driver.$(this.elements.buttonBackDashBoard).click();
    }

    async submitBackEditor() {        
        await this.driver.$(this.elements.buttonBackEditor).waitForDisplayed();
        return await this.driver.$(this.elements.buttonBackEditor).click();
    }

    async submitBackPages() {        
        await this.driver.$(this.elements.buttonBackPage).waitForDisplayed();
        return await this.driver.$(this.elements.buttonBackPage).click();
    }

    async clickToEditPage(namePage) {   
        let elements = await this.driver.$$(this.elements.titleList);    
        let found = false;
        for (let element of elements) {
            let text = await element.getText();
            console.log(text);
            if (text.includes(namePage)) {
                console.log('The error message is displayed:', namePage);
                found = true;                
                await element.click();
                break;
            }
        }
     
        if (!found) {
            throw new Error('The error message is not displayed: ' + title);
        }      
    }

    async setTitle(title) {        
        await this.driver.$(this.elements.pageTitle).waitForDisplayed();
        await this.driver.$(this.elements.pageTitle).setValue(title); 
    }

    async setDescription(description) {        
        await this.driver.$(this.elements.pageDescription).waitForDisplayed();
        await this.driver.$(this.elements.pageDescription).setValue(description); 
    }

    async getTitleSelector() {   
        try {
            let element = await this.driver.$('li a h3.gh-content-entry-title'/*pagePage.getTitleSelector()*/);
            await element.waitForDisplayed();    
            let text = await element.getText();
            return text;
        } catch (error) {
            console.error("Error al obtener el selector del título:", error);
            throw error; 
        }        
    }
    
}

module.exports = PagePage;