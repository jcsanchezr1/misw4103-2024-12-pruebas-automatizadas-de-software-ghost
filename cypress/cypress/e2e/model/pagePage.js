class PagePage {
  constructor() {
    this.elements = {
      sideBarlink: 'a[href="#/pages/"]',
      buttonNewMember: ".view-actions a.gh-btn-primary",
      buttonPublishPage:
        ".flex.items-center.pe-auto.h-100 button.gh-publish-trigger",
      buttonSettingsPage: "button.settings-menu-toggle",
      buttonDeletePage: ".gh-btn.settings-menu-delete-button",
      buttonDeleteConfirmation:
        "div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon:nth-of-type(2)",
      buttonContinueFinalReview: ".gh-publish-cta button",
      buttonBackDashBoard: ".gh-publish-confirmation button",
      buttonBackEditor: ".gh-publish-header button",
      buttonConfirmPublish: ".gh-publish-cta button:first-child",
      buttonBackPage: "a.gh-btn-editor.gh-editor-back-button",
      buttonUpdatePage:
        ".flex.items-center.pe-auto.h-100 button.gh-editor-save-trigger",
      pageTitle: ".ember-text-area",
      pageDescription: '[data-kg="editor"]:has(p)',
      titleList: "li a h3.gh-content-entry-title",
      tagSelector: "#tag-input > ul > input",
      listTags: ".ember-power-select-option",
    };
  }

  submitLinkPages() {
    cy.get(this.elements.sideBarlink).click();
  }

  submitNewPage() {
    cy.get(this.elements.buttonNewMember).click();
  }

  submitPublish() {
    cy.get(this.elements.buttonPublishPage).click();
  }

  submitUpdatePage() {
    cy.get(this.elements.buttonUpdatePage).click();
  }

  submitSettingsPage() {
    cy.get(this.elements.buttonSettingsPage).click();
  }

  submitDeletePage() {
    cy.get(this.elements.buttonDeletePage).click();
  }

  buttonDeleteConfirmation() {
    cy.get(this.elements.buttonDeleteConfirmation).click();
  }

  submitFinalReview() {
    cy.get(this.elements.buttonContinueFinalReview).click();
  }

  submitConfirmReview() {
    cy.get(this.elements.buttonConfirmPublish).click();
  }

  submitBackDashboard() {
    cy.get(this.elements.buttonBackDashBoard).click();
  }

  submitBackEditor() {
    cy.get(this.elements.buttonBackEditor).click();
  }

  submitBackPages() {
    cy.get(this.elements.buttonBackPage).click();
  }

  validateExistTitle(listPges, pageTitle) {
    let found = false;
    for (let el of listPges) {
      if (el.includes(pageTitle)) {
        found = true;
        break;
      }
    }
    return found;
  }

  clickToEditPage(namePage) {
    cy.get(this.elements.titleList)
      .each(($element) => {
        cy.wrap($element)
          .invoke("text")
          .then((text) => {
            console.log(text);
            if (text.includes(namePage)) {
              console.log("The error message is displayed:", namePage);
              cy.wrap($element).as("pageElement").click();
            }
          });
      })
      .then(() => {
        // After the loop, check if element was found
        cy.get("@pageElement").then(($pageElement) => {
          if (!$pageElement || $pageElement.length === 0) {
            throw new Error("The error message is not displayed: " + namePage);
          }
        });
      });
  }

  setTitle(title) {
    cy.get(this.elements.pageTitle).type(title);
  }

  setDescription(description) {
    cy.get(this.elements.pageDescription).type(description);
  }

  validateName() {
    let listPges = [];
    cy.get(this.elements.titleList).each((element) => {
      const text = Cypress.$(element).text().trim();
      listPges.push(text);
    });
    return listPges;
  }

  getTitleSelector() {
    try {
      let element = cy.get("li a h3.gh-content-entry-title");
      element.waitForDisplayed();
      let text = element.getText();
      return text;
    } catch (error) {
      console.error("Error al obtener el selector del título:", error);
      throw error;
    }
  }
  typeTag(tag) {
    cy.get(this.elements.tagSelector).type(tag);
  }

  getListOfTags() {
    let arr = [];
        cy.get(this.elements.listTags).each((element) => {
          const text = Cypress.$(element).text().trim();
          arr.push(text);
        });
    return arr;
  }

  compareTags(arr, arr2) {
    let newArr = [];
    let secondArr = [];
    for (let el of arr) {
      if (el === "Tag1") {
        newArr.push(el);
      }
    }
    for (let el of arr2) {
      if (el === "Tag1") {
        secondArr.push(el);
      }
    }
    if (newArr.length === secondArr.length) {
      return true;
    }
    return false;
  }
}



module.exports = PagePage;
