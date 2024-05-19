const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before} = require('@cucumber/cucumber');
const { faker } = require('@faker-js/faker');

const TagPage = require('../model/tagPage');
const PagePage = require('../model/pagePage');
const PostsPage= require('../model/postPage');

let tagPage;
let pagePage;
let postsPage;
let tagTitle;
let newTagTitle;


BeforeAll(async function () {
    tagPage = new TagPage();
    pagePage = new PagePage();
    postsPage = new PostsPage();
})

Before(async function () {
    tagTitle = faker.random.word();
    newTagTitle = faker.random.word();
})

When('Aleatorio: I click tags', async function() {
    tagPage.setDriver(this.driver);    
    tagPage.ClickTagPages();
});

When('Aleatorio: I click back to tags', async function() {
    tagPage.ClickTagPages();
});


When('Aleatorio: I enter the tag in the settings of post', async function () {
    tagPage.setTag(tagTitle); 
});

When('Aleatorio: I enter the edited tag in the settings of post', async function () {
    tagPage.setTag(newTagTitle); 
});

When('Aleatorio: I click new tag', async function() {
    tagPage.CreateNewTag();   
});

When('Aleatorio: I enter tag title', async function () {
    tagPage.setTitle(tagTitle); 
});

When('Aleatorio: I click Save', async function() {
    tagPage.save();   
});

Then('Aleatorio: I validate that the button save text should be the name', async function () {
    let element = await this.driver.$(tagPage.elements.saved);
    await element.waitForDisplayed();
    const actualText = await element.getText();
    if (actualText !== tagTitle) {
        throw new Error(`Expected button text to be "${tagTitle}" but found "${actualText}"`);
    }
});

Then('Aleatorio: I validate the title of the tag', async function() {       
    let elements = await this.driver.$$('.gh-tag-list-name');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        if (text.includes(tagTitle)) {
            found = true;
            break;
        }
    }

     if (!found) {
        throw new Error('The error message is not displayed: ' + tagTitle);
    }
});

Then('Aleatorio: I validate the title of the edited tag', async function() {       
    let elements = await this.driver.$$('.gh-tag-list-name');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        if (text.includes(newTagTitle)) {
            found = true;
            break;
        }
    }

     if (!found) {
        throw new Error('The error message is not displayed: ' + newTagTitle);
    }
});


When('Aleatorio: I click delete tag', async function () {
    tagPage.submitDeletePage();
});

When('Aleatorio: I select tag to edit', async function () {
    tagPage.clickToEditPage(newTagTitle);
});

When('Aleatorio: I select tag', async function () {
    tagPage.clickToEditPage(tagTitle);
});

When('Aleatorio: I click delete confirmation tag', async function () {
    tagPage.buttonDeleteConfirmation();
});

Then('Aleatorio: I validate the title of the tag does not exist', async function () {
    let elements = await this.driver.$$('.gh-tag-list-name');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        if (text.includes()) {
            console.log('The error message is displayed:', tagTitle);
            throw new Error('The error message is not displayed: ' + tagTitle);
        }
    }

    if (!found) {
        console.log('The page does not exist:', tagTitle);
    }
}); 


When('Aleatorio: I modify the name and slug of the tag', async function () {
    tagPage.submitEditTag(newTagTitle);
});

Then('Aleatorio: I validate if the tag is in the page creation', async function() {   
    let elements = await this.driver.$$('.ember-power-select-option');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(tagTitle)) {
            found = true;
            break;
        }
    }
     if (!found) {
        throw new Error('The error message is not displayed: ' + tagTitle);
    }
});

Then('Aleatorio: I validate if the tag is in the post creation', async function() {   
    let elements = await this.driver.$$('.ember-power-select-option');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(tagTitle)) {
            found = true;
            break;
        }
    }
     if (!found) {
        throw new Error('The error message is not displayed: ' + tagTitle);
    }
});
When('Aleatorio: I enter tag in the settings of pages', async function () {
    tagPage.setTag(tagTitle);
});


Then('Aleatorio: I validate if the edited tag is in the post creation', async function() {   
    let elements = await this.driver.$$('.ember-power-select-option');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(newTagTitle)) {
            found = true;
            break;
        }
    }
     if (!found) {
        throw new Error('The error message is not displayed: ' + tagTitle);
    }
});

 

