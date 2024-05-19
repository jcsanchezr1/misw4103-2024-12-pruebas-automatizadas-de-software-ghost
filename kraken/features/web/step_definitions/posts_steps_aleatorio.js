const { Given, When, Then, Before} = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const PostsPage = require('../model/postPage');
const { faker } = require('@faker-js/faker');

let postsPage;
let post_title;

BeforeAll(async function () {
    postsPage = new PostsPage();

})

Before(async function () {
    post_title = faker.lorem.word();
    post_description = faker.lorem.sentence();
    new_post_name = faker.lorem.word();
    new_post_description = faker.lorem.sentence();
})


When('Aleatorio: I click post', async function() {
    postsPage.setDriver(this.driver);
    postsPage.submitLinkPost();
});

When('Aleatorio: I click new post', async function() {
    postsPage.submitNewPost();
});

When('Aleatorio: I enter post title', async function() {
    postsPage.setPostTitle(post_title);
});

When('Aleatorio: I update the post title', async function () {
    postsPage.setPostTitle(new_post_name);
});

When('Aleatorio: I select the  post description', async function(){
    postsPage.selectPostDesc();
});

When('Aleatorio: I enter post description', async function() {
    postsPage.setPostDescription(post_description);
});

When('Aleatorio: I update the post description', async function () {
    postsPage.setPostDescription(new_post_description);
});

When('Aleatorio: I click publish post', async function() {
    postsPage.submitPublishPost();
});

When('Aleatorio: I click final review post', async function() {
    postsPage.submitFinalReviewPost();
});

When('Aleatorio: I click publish post right now', async function() {
    postsPage.submitPublishPostRN();
});

When('Aleatorio: I click back to editor post', async function() {
    postsPage.submitBackEditorPost();
});

When('Aleatorio: I click back to post', async function() {
    postsPage.submitBackPost();
});

When('Aleatorio: I click view site', async function() {
    postsPage.submitLinkSite();
});


When('Aleatorio: I click to update the post', async function() {
    postsPage.updatePost();
});

When('Aleatorio: I click settings of post', async function() {
    postsPage.settingsPost();
});

When('Aleatorio: I click delete post', async function() {
    postsPage.deletePost();
});

When('Aleatorio: I click delete post confirmation', async function() {
    postsPage.deletePostConfirmation();
});

When('Aleatorio: I click unpublish post', async function() {
    postsPage.unpublishPost();
});

When('Aleatorio: I confirm unpublish post', async function() {
    postsPage.unpublishPostConfirmation();
});

When('Aleatorio: I enter tag {string} in the settings of post', async function (title) {
    postsPage.setTag(title); 
});

Then('Aleatorio: I check the post in the list', async function() {

    let elements = await this.driver.$$(postsPage.elements.titlePostList);
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(post_title)) {
            console.log('The created post is displayed:', post_title);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is not displayed: ' + post_title);
    }
    console.assert(found,"The created post is not displayed")
});

Then('Aleatorio: I check the updated post in the list', async function() {

    let elements = await this.driver.$$(postsPage.elements.titlePostList);
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(new_post_name)) {
            console.log('The created post is displayed:', new_post_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is not displayed: ' + new_post_name);
    }
    console.assert(found,"The created post is not displayed")
});

Then('Aleatorio: I check the post is not in the list', async function() {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = true;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(post_title)) {
            console.log('The created post is displayed:', post_title);
            found = false;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is displayed: ' + post_title);
    }
    console.assert(found,"The created post is displayed")
});

Then('Aleatorio: I validate if the tag {string} is in the post creation', async function(title) {
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