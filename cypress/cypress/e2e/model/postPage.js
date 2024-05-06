class PostPage {
  constructor() {
    this.elements = {
      sideBarPostlink: 'li a[href="#/posts/"]',
      buttonNewPost: "a.gh-btn-primary",
      postTitle: ".ember-text-area",
      postDescription: '[data-kg="editor"]:has(p)',
      buttonPublishPost: ".gh-publish-trigger",
      buttonContinueFinalReviewPost: ".gh-btn-black",
      buttonPublishPostRN: ".gh-btn-pulse",
      buttonBackEditorPost: ".gh-publish-confirmation button",
      buttonBackPost: "a.gh-editor-back-button",
      titlePostList: ".gh-content-entry-title",
      sideBarSitelink: 'li a[href="#/site/"]',
      postInViewSite: "h2.post-card-title",
      buttonUpdatePost: ".gh-editor-save-trigger",
      buttonSettingsPost: "button.settings-menu-toggle",
      buttonDeletePost: ".gh-btn.settings-menu-delete-button",
      buttonDeletePostConfirmation:
        "div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon:nth-of-type(2)",
      buttonUnpublish: ".gh-unpublish-trigger",
      buttonUnpublishConfirmation: "button.gh-revert-to-draft",
      statusCheck: "div.gh-editor-post-status",
      tagSelector: "#tag-input > ul > input",
      listTags: ".ember-power-select-option",
    };
  }

  submitLinkPosts() {
    cy.get(this.elements.sideBarPostlink).click();
  }

  submitNewPosts() {
    cy.get(this.elements.buttonNewPost).click();
  }

  setPostTitle(title) {
    cy.get(this.elements.postTitle).type(title);
  }

  selectPostDesc(title) {
    cy.get(this.elements.postDescription).click();
  }

  setPostDesc(description) {
    cy.get(this.elements.postDescription).type(description);
  }

  submitPublishPost() {
    cy.get(this.elements.buttonPublishPost).click();
  }

  continueFinalPost() {
    cy.get(this.elements.buttonContinueFinalReviewPost).click();
  }

  submitPublishPostRN() {
    cy.get(this.elements.buttonPublishPostRN).click();
  }

  backToEditorPost() {
    cy.get(this.elements.buttonBackEditorPost).click();
  }

  backToPost() {
    cy.get(this.elements.buttonBackPost).click();
  }

  updatePost() {
    cy.get(this.elements.buttonUpdatePost).click();
  }

  selectPostSettings() {
    cy.get(this.elements.buttonSettingsPost).click();
  }

  selectDeletePost() {
    cy.get(this.elements.buttonDeletePost).click();
  }

  confirmDeletePost() {
    cy.get(this.elements.buttonDeletePostConfirmation).click();
  }

  selectUnpublish() {
    cy.get(this.elements.buttonUnpublish).click();
  }

  selectUnpublishConfirmation() {
    cy.get(this.elements.buttonUnpublishConfirmation).click();
  }

  validateExistPostTitle(listPosts, postTitle) {
    let found = false;
    for (let el of listPosts) {
      if (el.includes(postTitle)) {
        found = true;
        break;
      }
    }
    return found;
  }
  typeTag(tag) {
    cy.get(this.elements.tagSelector).type(tag);
  }

  validatePostName() {
    let listPosts = [];
    cy.get(this.elements.titlePostList).each((element) => {
      const text = Cypress.$(element).text().trim();
      listPosts.push(text);
    });
    return listPosts;
  }
  getListOfTags() {
    let arr = [];
    cy.get(this.elements.listTags).each((element) => {
      const text = Cypress.$(element).text().trim();
      arr.push(text);
    });
    return arr;
  }
  compareTags(arr, arr2,nameTag) {
    let newArr = [];
    let secondArr = [];
    for (let el of arr) {
      if (el === nameTag) {
        newArr.push(el);
      }
    }
    for (let el of arr2) {
      if (el === nameTag) {
        secondArr.push(el);
      }
    }
    if (newArr.length === secondArr.length) {
      return true;
    }
    return false;
  }
  verifyDeletedPost(arr, arr2) {
    let obj = {};
    let flag = false;
    if (arr.length > arr2.length) {
      for (let el of arr) {
        obj[el] = obj[el] ? obj[el] + 1 : 1;
      }
      let obj2 = {};
      for (let el of arr2) {
        obj2[el] = obj2[el] ? obj2[el] + 1 : 1;
      }
      for (let key in obj) {
        if (obj2[key] == obj[key] - 1) {
          flag = true;
          break;
        }
        if (!obj2[key]) {
          flag = true;
          break;
        }
      }
    }
    return flag;
  }
}

module.exports = PostPage;
