const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll, Before} = require('@cucumber/cucumber');
const axios = require('axios');

const TagPage = require('../model/tagPage');
const PagePage = require('../model/pagePage');
const PostsPage= require('../model/postPage');

let tagPage;
let pagePage;
let postsPage;
let pseudoTag;
let tagTitle;
let newTagTitle;


BeforeAll(async function () {
    tagPage = new TagPage();
    pagePage = new PagePage();
    postsPage = new PostsPage();
})

Before(async function () {
    try {
        const response = await axios.get('https://my.api.mockaroo.com/mock_data_tag.json?key=c1b1d870');
        pseudoTag = response.data;
        tagTitle = pseudoTag.TITLENAME;
        newTagTitle = pseudoTag.NEWTITLENAME;
    } catch (error) {
        console.error("Error fetching pseudoTag: ", error);
    }
})

When('Pseudo: I click tags', async function() {
    tagPage.setDriver(this.driver);    
    tagPage.ClickTagPages();
});

When('Pseudo: I click back to tags', async function() {
    tagPage.ClickTagPages();
});


When('Pseudo: I enter the tag in the settings of post', async function () {
    tagPage.setTag(tagTitle); 
});

When('Pseudo: I enter the edited tag in the settings of post', async function () {
    tagPage.setTag(newTagTitle); 
});

When('Pseudo: I click new tag', async function() {
    tagPage.CreateNewTag();   
});

When('Pseudo: I enter tag title', async function () {
    tagPage.setTitle(tagTitle); 
});

When('Pseudo: I click Save', async function() {
    tagPage.save();   
});

Then('Pseudo: I validate that the button save text should be the name', async function () {
    let element = await this.driver.$(tagPage.elements.saved);
    await element.waitForDisplayed();
    const actualText = await element.getText();
    if (actualText !== tagTitle) {
        throw new Error(`Expected button text to be "${tagTitle}" but found "${actualText}"`);
    }
});

Then('Pseudo: I validate the title of the tag', async function() {       
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

Then('Pseudo: I validate the title of the edited tag', async function() {       
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


When('Pseudo: I click delete tag', async function () {
    tagPage.submitDeletePage();
});

When('Pseudo: I select tag to edit', async function () {
    tagPage.clickToEditPage(newTagTitle);
});

When('Pseudo: I select tag', async function () {
    tagPage.clickToEditPage(tagTitle);
});

When('Pseudo: I click delete confirmation tag', async function () {
    tagPage.buttonDeleteConfirmation();
});

Then('Pseudo: I validate the title of the tag does not exist', async function () {
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


When('Pseudo: I modify the name and slug of the tag', async function () {
    tagPage.submitEditTag(newTagTitle);
});

Then('Pseudo: I validate if the tag is in the page creation', async function() {   
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

Then('Pseudo: I validate if the tag is in the post creation', async function() {   
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
When('Pseudo: I enter tag in the settings of pages', async function () {
    tagPage.setTag(tagTitle);
});


Then('Pseudo: I validate if the edited tag is in the post creation', async function() {   
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

 

