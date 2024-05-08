class PagePageOld {
  constructor() {
    this.elements = {
      sideBarlink: 'ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a',
      buttonNewPage: 'section.view-actions a[href="#/editor/page/"]',
      buttonPublishPage: 'div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger > span',
      buttonConfirmPublish: 'footer.gh-publishmenu-footer > button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view > span',
      buttonUpdate: 'footer.gh-publishmenu-footer button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view > span',
      buttonBackPage: 'div.flex.items-center.pe-auto > div.f8.fw3.lh-copy.tracked-2.ma0.pa0.h9.br.b--lightgrey.pl3.pr4.flex.items-center.br2.br--left.bg-white > a.blue.link.fw4.flex.items-center.ember-view',
      buttonUpdatePage: 'section.view-actions.br2.bg-white > div.gh-publishmenu.ember-view > div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger > span',
      buttonSettingsPage: 'button.post-settings[title="Settings"]',
      buttonDeletePage: ".gh-btn.settings-menu-delete-button",
      buttonDeleteConfirmation: 'div.modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon:nth-of-type(2)',
      pageTitle: 'textarea.gh-editor-title[tabindex="1"][placeholder="Page Title"]',
      pageDescription: 'div.koenig-editor__editor[data-kg="editor"]',
      titleList: 'li a h3.gh-content-entry-title'
    };
  }

  submitLinkPages() {
    cy.get(this.elements.sideBarlink).click();
  }

  submitNewPage() {
    cy.get(this.elements.buttonNewPage).click();
  }

  submitPublish() {
    cy.get(this.elements.buttonPublishPage).click();
  }

  submitConfirmReview() {
    cy.get(this.elements.buttonConfirmPublish).click();
  }

  submitUpdate() {
    cy.get(this.elements.buttonUpdate).click();
  }

  submitUpdatePage() {
    cy.get(this.elements.buttonUpdatePage).click();
  }

  submitBackPages() {
    cy.get(this.elements.buttonBackPage).click();
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


  setTitle(title) {
    cy.get(this.elements.pageTitle).clear();
    cy.get(this.elements.pageTitle).type(title);
  }

  setDescription(description) {
    cy.get(this.elements.pageDescription).clear();
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
    let pageElementFound = false;

    cy.get(this.elements.titleList)
      .each(($element) => {
        cy.wrap($element)
          .invoke("text")
          .then((text) => {
            console.log(text);
            if (text.includes(namePage)) {
              console.log("The error message is displayed:", namePage);
              cy.wrap($element).as("pageElement");
              pageElementFound = true;
            }
          });
      })
      .then(() => {
        // After the loop, check if element was found
        if (!pageElementFound) {
          throw new Error("The error message is not displayed: " + namePage);
        }

        // Click on the page element
        cy.get("@pageElement").click();
      });
  }

}



module.exports = PagePageOld;
