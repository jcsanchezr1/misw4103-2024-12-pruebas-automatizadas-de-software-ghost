const { When, Then } = require('@cucumber/cucumber');
class PostsPage {

    constructor() {
        this.elements = {
            sideBarPostlink: 'li a[href="#/posts/"]',
            buttonNewPost: 'a.gh-btn-primary',
            postTitle: '.ember-text-area',
            postDescription: '[data-kg="editor"]:has(p)',
            buttonPublishPost: '.gh-publish-trigger',
            buttonContinueFinalReviewPost: '.gh-btn-black',
            buttonPublishPostRN: '.gh-btn-pulse',
            buttonBackEditorPost: '.gh-back-to-editor',
            buttonBackPost:'a.gh-btn-editor.gh-editor-back-button',
            titlePostList:'.gh-content-entry-title',
            sideBarSitelink: 'li a[href="#/site/"]',
            postInViewSite: 'h2.post-card-title',
            buttonUpdatePost:'.gh-editor-save-trigger',
            buttonSettingsPost: 'button.settings-menu-toggle',
            buttonDeletePost: '.gh-btn.settings-menu-delete-button',
            buttonDeletePostConfirmation: 'div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon:nth-of-type(2)',
            buttonUnpublish: '.gh-unpublish-trigger',
            buttonUnpublishConfirmation: 'button.gh-unpublish-trigger',
            statusCheck:'div.gh-editor-post-status',
            tagSelector: "#tag-input > ul > input",
        };
    }

    setDriver(driver) {
        this.driver = driver;
    }

    async submitLinkPost() {
        await this.driver.$(this.elements.sideBarPostlink).waitForDisplayed();
        return await this.driver.$(this.elements.sideBarPostlink).click();
    }

    async submitNewPost() {
        await this.driver.$(this.elements.buttonNewPost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonNewPost).click();
    }
    async setPostTitle(title) {
        await this.driver.$(this.elements.postTitle).waitForDisplayed();
        await this.driver.$(this.elements.postTitle).setValue(title);
    }

    async selectPostDesc() {
        await this.driver.$(this.elements.postDescription).waitForDisplayed();
        await this.driver.$(this.elements.postDescription).click();
    }

    async setPostDescription(description) {
        await this.driver.$(this.elements.postDescription).waitForDisplayed();
        await this.driver.$(this.elements.postDescription).setValue(description);
    }

    async submitPublishPost() {
        await this.driver.$(this.elements.buttonPublishPost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonPublishPost).click();
    }

    async submitFinalReviewPost() {
        await this.driver.$(this.elements.buttonContinueFinalReviewPost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonContinueFinalReviewPost).click();
    }

    async submitPublishPostRN() {
        await this.driver.$(this.elements.buttonPublishPostRN).waitForDisplayed();
        return await this.driver.$(this.elements.buttonPublishPostRN).click();
    }

    async submitBackEditorPost() {
        await this.driver.$(this.elements.buttonBackEditorPost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonBackEditorPost).click();
    }

    async submitBackPost() {
        await this.driver.$(this.elements.buttonBackPost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonBackPost).click();
    }

    async submitLinkSite() {
        await this.driver.$(this.elements.sideBarSitelink).waitForDisplayed();
        return await this.driver.$(this.elements.sideBarSitelink).click();
    }

    async updatePost() {
        await this.driver.$(this.elements.buttonUpdatePost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonUpdatePost).click();
    }

    async settingsPost() {
        await this.driver.$(this.elements.buttonSettingsPost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonSettingsPost).click();
    }

    async deletePost() {
        await this.driver.$(this.elements.buttonDeletePost).waitForDisplayed();
        return await this.driver.$(this.elements.buttonDeletePost).click();
    }

    async deletePostConfirmation() {
        await this.driver.$(this.elements.buttonDeletePostConfirmation).waitForDisplayed();
        return await this.driver.$(this.elements.buttonDeletePostConfirmation).click();
    }

    async unpublishPost() {
        await this.driver.$(this.elements.buttonUnpublish).waitForDisplayed();
        return await this.driver.$(this.elements.buttonUnpublish).click();
    }

    async unpublishPostConfirmation() {
        await this.driver.$(this.elements.buttonUnpublishConfirmation).waitForDisplayed();
        return await this.driver.$(this.elements.buttonUnpublishConfirmation).click();
    }
    async setTag(tag) {
        await this.driver.$(this.elements.tagSelector).waitForDisplayed();
        await this.driver.$(this.elements.tagSelector).setValue(tag);
    }

    async SubmitBackToPost() {
        await this.driver.$(this.elements.sideBarPostlink).waitForDisplayed();
        return await this.driver.$(this.elements.sideBarPostlink).click();
    }
}

module.exports = PostsPage;