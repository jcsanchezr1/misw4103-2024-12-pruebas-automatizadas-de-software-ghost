const { Given, When, Then, Before} = require('@cucumber/cucumber');
const { BeforeAll } = require('@cucumber/cucumber');
const PostsPage = require('../model/postPage');

let postsPage;

BeforeAll(async function () {
    postsPage = new PostsPage();
})

When('A priori:  I click post', async function() {
    postsPage.setDriver(this.driver);
    postsPage.submitLinkPost();
});

When('A priori:  I click new post', async function() {
    postsPage.submitNewPost();
});

When('A priori:  I enter post title {string}', async function(title) {
    postsPage.setPostTitle(title);
});


When('A priori:  I select the  post description', async function(){
    postsPage.selectPostDesc();
});

When('A priori:  I enter post description {string}', async function(description) {
    postsPage.setPostDescription(description);
});


When('A priori:  I click publish post', async function() {
    postsPage.submitPublishPost();
});

When('A priori:  I click final review post', async function() {
    postsPage.submitFinalReviewPost();
});

When('A priori:  I click publish post right now', async function() {
    postsPage.submitPublishPostRN();
});

When('A priori:  I click back to editor post', async function() {
    postsPage.submitBackEditorPost();
});

When('A priori:  I click back to post', async function() {
    postsPage.submitBackPost();
});

When('A priori:  I click view site', async function() {
    postsPage.submitLinkSite();
});


When('A priori:  I click to update the post', async function() {
    postsPage.updatePost();
});

When('A priori:  I click settings of post', async function() {
    postsPage.settingsPost();
});

When('A priori:  I click delete post', async function() {
    postsPage.deletePost();
});

When('A priori:  I click delete post confirmation', async function() {
    postsPage.deletePostConfirmation();
});

When('A priori:  I click unpublish post', async function() {
    postsPage.unpublishPost();
});

When('A priori:  I confirm unpublish post', async function() {
    postsPage.unpublishPostConfirmation();
});

When('A priori:  I enter tag {string} in the settings of post', async function (title) {
    postsPage.setTag(title);
});


Then('A priori:  I check the post in the list {string}', async function(title) {

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

Then('A priori:  I check the post is not in the list {string}', async function(title) {

    let elements = await this.driver.$$('li a h3.gh-content-entry-title');
    let found = true;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(title)) {
            console.log('The created post is displayed:', title);
            found = false;
            break;
        }
    }

    if (!found) {
        throw new Error('The created post is displayed: ' + title);
    }
    console.assert(found,"The created post is displayed")
});

Then('A priori:  I validate if the tag {string} is in the post creation', async function(title) {
    let elements = await this.driver.$$('.ember-power-select-option');
    let found = false;
    for (let element of elements) {
        let text = await element.getText();
        console.log(text);
        if (text.includes(pseudoPost.page_name)) {
            found = true;
            break;
        }
    }
    if (!found) {
        throw new Error('The error message is not displayed: ' + pseudoPost.page_name);
    }
});