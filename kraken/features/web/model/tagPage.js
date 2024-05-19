const { When, Then } = require("@cucumber/cucumber");
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
      buttonDeleteTag: "div > button.gh-btn.gh-btn-red.gh-btn-icon > span",
      buttonDeleteConfirmation: "div.modal-footer > button.gh-btn-red",
      titleList: ".gh-tag-list-name",
      tagSelector: "#tag-input > ul > input"
    };
  }

  setDriver(driver) {
    this.driver = driver;
  }

  async ClickTagPages() {
    await this.driver.$(this.elements.tagsPage).waitForDisplayed();
    //await this.driver.$(this.elements.sideBarlink).waitForExist();
    return await this.driver.$(this.elements.tagsPage).click();
  }
  async CreateNewTag() {
    await this.driver.$(this.elements.newTag).waitForDisplayed();
    return await this.driver.$(this.elements.newTag).click();
  }
  async setTitle(title) {
    await this.driver.$(this.elements.name).waitForDisplayed();
    await this.driver.$(this.elements.name).setValue(title);
  }
  async save() {
    await this.driver.$(this.elements.save).waitForDisplayed();
    return await this.driver.$(this.elements.save).click();
  }
  async clickToEditPage(nameTag) {
    let elements = await this.driver.$$(this.elements.titleList);
    let found = false;
    for (let element of elements) {
      let text = await element.getText();
      console.log(text);
      if (text.includes(nameTag)) {
        console.log("The error message is displayed:", nameTag);
        found = true;
        await element.click();
        break;
      }
    }
    if (!found) {
      throw new Error("The error message is not displayed: " + nameTag);
    }
  }

  async submitEditTag(title) {
  await this.driver.$(this.elements.name).waitForDisplayed();
  await this.driver.$(this.elements.name).setValue(title);
  await this.driver.$(this.elements.slug).waitForDisplayed();
  await this.driver.$(this.elements.slug).setValue(title);
  }

  async submitDeletePage() {
    await this.driver.$(this.elements.deleteButton).waitForDisplayed();
    return await this.driver.$(this.elements.deleteButton).click();
  }

  async buttonDeleteConfirmation() {
    await this.driver.$(this.elements.confirmDelete).waitForDisplayed();
    return await this.driver.$(this.elements.confirmDelete).click();
  }
  async setTag(tag) {
    await this.driver.$(this.elements.tagSelector).waitForDisplayed();
    await this.driver.$(this.elements.tagSelector).setValue(tag);
}
}

module.exports = TagPage;
