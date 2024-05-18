const { Given, When, Then } = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const PostsPage = require('../model/postPage');
const { faker } = require('@faker-js/faker');

let postsPage;
let date;

BeforeAll(async function () {
    postsPage = new PostsPage();
    date = Date.now();
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",faker.internet.email());
})

When('I click post', async function() {
    postsPage.setDriver(this.driver);
    postsPage.submitLinkPost();
});

When('I click new post', async function() {
    postsPage.submitNewPost();
});

When('I enter post title {string}', async function (title) {
    postsPage.setPostTitle(title + date);
});

When('I select the  post description', async function(){
    postsPage.selectPostDesc();
});

When('I enter post description {string}', async function (title) {
    postsPage.setPostDescription(title + date);
});

When('I click publish post', async function() {
    postsPage.submitPublishPost();
});

When('I click final review post', async function() {
    postsPage.submitFinalReviewPost();
});

When('I click publish post right now', async function() {
    postsPage.submitPublishPostRN();
});

When('I click back to editor post', async function() {
    postsPage.submitBackEditorPost();
});

When('I click back to post', async function() {
    postsPage.submitBackPost();
});

When('I click view site', async function() {
    postsPage.submitLinkSite();
});

When('I click to edit the post', async function() {
    postsPage.clickToEditPost();
});

When('I click to update the post', async function() {
    postsPage.updatePost();
});

When('I click settings of post', async function() {
    postsPage.settingsPost();
});

When('I click delete post', async function() {
    postsPage.deletePost();
});

When('I click delete post confirmation', async function() {
    postsPage.deletePostConfirmation();
});

When('I click unpublish post', async function() {
    postsPage.unpublishPost();
});

When('I confirm unpublish post', async function() {
    postsPage.unpublishPostConfirmation();
});

When('I enter tag {string} in the settings of post', async function (title) {
    postsPage.setTag(title); 
});

Then('I check the post in the list {string}', async function(title) {

    let elements = await this.driver.$$(postsPage.elements.titlePostList);

    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(title)) {
            console.log('The created post is displayed:', title);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is not displayed: ' + title);
    }
    console.assert(found,"The created post is not displayed")
});


Then('I check the post is not in the list {string}', async function(title) {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = true;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(title + date)) {
            console.log('The created post is displayed:', title + date);
            found = false;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is displayed: ' + title + date);
    }
    console.assert(found,"The created post is displayed")
});

Then('I validate if the tag {string} is in the post creation', async function(title) {   
    let elements = await this.driver.$$('.ember-power-select-option');    
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(title)) {
            found = true;
            break;
        }
    }
     if (!found) {
        throw new Error('The error message is not displayed: ' + title);
    }
});