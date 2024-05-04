class TagPage {
  constructor() {
    this.elements = {
      tagsPage:
        "body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a",
      newTag:
        "body > div.gh-app > div > main > section > div > header > section > a",
      name: "#tag-name",
      save: "body > div.gh-app > div > main > section > form > div.gh-canvas-header > header > section > button",
      saved: "span > svg",
      getNames: ".gh-tag-list-name",
      slug: "#tag-slug",
      deleteButton: "body > div.gh-app > div > main > section > div > button",
      displayDelete: "body > div.epm-modal-container > div > div",
      confirmDelete:
        "body > div.epm-modal-container > div > div > div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon.ember-view",
      tagName: "body > div.gh-app > div > main > section > div > header > h2",
    };
  }

  clickTagsPage() {
    cy.get(this.elements.tagsPage).click();
  }

  clickNewTag() {
    cy.get(this.elements.newTag).click();
  }

  typeName(name) {
    cy.get(this.elements.name).type(name);
  }

  clickSave() {
    cy.get(this.elements.save).click();
  }

  isSaved() {
    cy.get(this.elements.saved).should("be.visible");
  }

  getNames() {
    let arr = [];
    cy.get("body").then((body) => {
      if (body.find(this.elements.getNames).length > 0) {
        let elements = cy.get(this.elements.getNames);
        elements.each((element) => {
          const text = Cypress.$(element).text().trim();
          arr.push(text);
        });
      }
    });
    return arr;
  }

  compareNames(arr, arr2) {
    let flag = false;
    if (arr2[arr2.length - 1] === "Tag1" && arr2.length > arr.length) {
      flag = true;
    }
    return flag;
  }

  validateATagExists(name) {
    return cy.get(this.elements.getNames).contains(name);
  }

  validateTagInfo(info) {
    cy.get(this.elements.name).should("have.value", info);
  }

  ChangeTagNameAndSlug(name, slug) {
    cy.get(this.elements.name).clear();
    cy.get(this.elements.slug).clear();
    cy.get(this.elements.name).type(name);
    cy.get(this.elements.slug).type(slug);
  }

  clickDelete() {
    cy.get(this.elements.deleteButton).click();
  }
  verifyDeleteButton() {
    cy.get(this.elements.displayDelete).should("be.visible");
  }
  clickConfirmDelete() {
    cy.get(this.elements.confirmDelete).click();
  }
  verifyTagName() {
    cy.get(this.elements.tagName).should("contain", "Tags");
  }
}
module.exports = TagPage;
