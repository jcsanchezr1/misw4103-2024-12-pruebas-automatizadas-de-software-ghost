const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');

const TagPage = require('../model/tagPage');

let tagPage;

BeforeAll(async function () {
    tagPage = new TagPage();
})

When('I click tags', async function() {
    tagPage.setDriver(this.driver);    
    tagPage.ClickTagPages();
});

When('I click back to tags', async function() {
    tagPage.ClickTagPages();
});

When('I click new tag', async function() {
    tagPage.CreateNewTag();   
});

When('I enter tag title {string}', async function (title) {
    tagPage.setTitle(title); 
});

When('I click Save', async function() {
    tagPage.save();   
});

Then('I validate the title of tags {string}', async function(title) {   
    let elements = await this.driver.$$('li a h3.gh-content-entry-title');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(title)) {
            console.log('The error message is displayed:', title);
            found = true;
            break;
        }
    }
     
     if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});

Then('I validate that the button save text should be {string}', async function (expectedText) {
    let element = await this.driver.$(tagPage.elements.saved);
    await element.waitForDisplayed();
    const actualText = await element.getText();
    if (actualText !== expectedText) {
        throw new Error(`Expected button text to be "${expectedText}" but found "${actualText}"`);
    }
});

Then('I validate the title of tag {string}', async function(title) {       
    let elements = await this.driver.$$('.gh-tag-list-name');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        if (text.includes(title)) {
            found = true;
            break;
        }
    }
     if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});

Then('I text for the tag {Tag1}', async function(slug) {
    
});
