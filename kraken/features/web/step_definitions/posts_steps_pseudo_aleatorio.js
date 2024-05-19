const { Given, When, Then, Before} = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const PostsPage = require('../model/postPage');
const { faker } = require('@faker-js/faker');
const axios = require("axios");

let postsPage;
let pseudoPost;

BeforeAll(async function () {
    postsPage = new PostsPage();
})

Before(async function () {
    try {
        const response = await axios.get('https://my.api.mockaroo.com/posts.json?key=d5e48ec0');
        pseudoPost = response.data;
    } catch (error) {
        console.error("Error fetching pseudoPost: ", error);
    }
})


When('Pseudo: I click post', async function() {
    postsPage.setDriver(this.driver);
    postsPage.submitLinkPost();
});

When('Pseudo: I click new post', async function() {
    postsPage.submitNewPost();
});

When('Pseudo: I enter post title', async function() {
    postsPage.setPostTitle(pseudoPost.post_name);
});

When('Pseudo: I update the post title', async function () {
    postsPage.setPostTitle(pseudoPost.new_post_name);
});

When('Pseudo: I select the  post description', async function(){
    postsPage.selectPostDesc();
});

When('Pseudo: I enter post description', async function() {
    postsPage.setPostDescription(pseudoPost.post_description);
});

When('Pseudo: I update the post description', async function () {
    postsPage.setPostDescription(pseudoPost.new_post_description);
});

When('Pseudo: I click publish post', async function() {
    postsPage.submitPublishPost();
});

When('Pseudo: I click final review post', async function() {
    postsPage.submitFinalReviewPost();
});

When('Pseudo: I click publish post right now', async function() {
    postsPage.submitPublishPostRN();
});

When('Pseudo: I click back to editor post', async function() {
    postsPage.submitBackEditorPost();
});

When('Pseudo: I click back to post', async function() {
    postsPage.submitBackPost();
});

When('Pseudo: I click view site', async function() {
    postsPage.submitLinkSite();
});


When('Pseudo: I click to update the post', async function() {
    postsPage.updatePost();
});

When('Pseudo: I click settings of post', async function() {
    postsPage.settingsPost();
});

When('Pseudo: I click delete post', async function() {
    postsPage.deletePost();
});

When('Pseudo: I click delete post confirmation', async function() {
    postsPage.deletePostConfirmation();
});

When('Pseudo: I click unpublish post', async function() {
    postsPage.unpublishPost();
});

When('Pseudo: I confirm unpublish post', async function() {
    postsPage.unpublishPostConfirmation();
});

When('Pseudo: I enter tag {string} in the settings of post', async function (title) {
    postsPage.setTag(title);
});

Then('Pseudo: I check the post in the list', async function() {

    let elements = await this.driver.$$(postsPage.elements.titlePostList);
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPost.post_name)) {
            console.log('The created post is displayed:', pseudoPost.post_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is not displayed: ' + pseudoPost.post_name);
    }
    console.assert(found,"The created post is not displayed")
});

Then('Pseudo: I check the updated post in the list', async function() {

    let elements = await this.driver.$$(postsPage.elements.titlePostList);
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPost.new_post_name)) {
            console.log('The created post is displayed:', pseudoPost.new_post_name);
            found = true;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is not displayed: ' + pseudoPost.new_post_name);
    }
    console.assert(found,"The created post is not displayed")
});

Then('Pseudo: I check the post is not in the list', async function() {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = true;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPost.post_name)) {
            console.log('The created post is displayed:', pseudoPost.post_name);
            found = false;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is displayed: ' + pseudoPost.post_name);
    }
    console.assert(found,"The created post is displayed")
});

Then('Pseudo: I validate if the tag {string} is in the post creation', async function(title) {
    let elements = await this.driver.$$('.ember-power-select-option');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPost.post_name)) {
            found = true;
            break;
        }
    }
    if (!found) {
        throw new Error('The error message is not displayed: ' + pseudoPost.post_name);
    }
});