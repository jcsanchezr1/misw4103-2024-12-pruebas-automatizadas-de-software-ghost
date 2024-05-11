import properties from "./properties.json";
import PagePage from "./model/pagePage";
import TagPage from "./model/tagPage";
import PostPage from "./model/postPage";
import CommonFunction from "./model/commonFunction";


const tagPage = new TagPage();
const pagePage = new PagePage();
const  postPage = new PostPage();

const commonFunction = new CommonFunction();

let parentFolder = '';


describe("Funcionalidad de Tag", (z ) => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    Cypress.Screenshot.defaults({
      overwrite: true,
    })
  });

  it("1.1 Creación y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL)
    //When i click tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000);
    let arr = [];
    arr = tagPage.getNames();
    //AND i click new tag
    tagPage.clickNewTag();
    commonFunction.wait(1000);
    //And I enter tag title "Tag1"
    tagPage.typeName("Tag1");
    //AND  I click Save
    tagPage.clickSave();
    commonFunction.wait(1000);
    tagPage.isSaved();
    commonFunction.wait(1000);
    //AND I click back to tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000)
    let arr2 = tagPage.getNames();
    commonFunction.wait(1000).then(() => {
     //Then I validate the title of tag "Tag1"
     let flag= tagPage.compareNames(arr,arr2);
      expect(flag).to.be.true;
    });
    //When I click post
    commonFunction.wait(1000);
    postPage.submitLinkPosts();
    commonFunction.wait(1000);
    //And I click new post
    postPage.submitNewPosts();
    commonFunction.wait(1000);
    //And I click settings of post
    postPage.selectPostSettings();
    commonFunction.wait(1000);
    //And I enter tag "Tag1" in the settings of post
    postPage.typeTag("Tag1");
    commonFunction.wait(1000);
    let arrTag= postPage.getListOfTags();
    commonFunction.wait(1000).then(() => {
        //Then I validate if the tag "Tag1" is in the post creation
        let flag= postPage.compareTags(arrTag, arr2, "Tag1");
        expect(flag).to.be.true;
    });

  });

  it("1.2 Creación y visualización de un tag de manera exitosa, visualización en un page creation:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL)
    //When I click tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000);
    let arr = [];
    arr = tagPage.getNames();
    // And I click new tag
    tagPage.clickNewTag();
    commonFunction.wait(1000);
    // And I enter tag title "Tag1"
    tagPage.typeName("Tag1");
    //And I click Save
    tagPage.clickSave();
    commonFunction.wait(1000);
    tagPage.isSaved();
    commonFunction.wait(1000);
    //And I click back to tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000)
    let arr2 = tagPage.getNames();
    commonFunction.wait(1000).then(() => {
    //  Then I validate the title of tag "Tag1"
      let flag= tagPage.compareNames(arr,arr2);
      expect(flag).to.be.true;
    });
    //AND I click pages
    commonFunction.wait(1000);
    pagePage.submitLinkPages();
    commonFunction.wait(1000);
    //And I click new page
    pagePage.submitNewPage();
    commonFunction.wait(1000);
    //And I click page settings-
    pagePage.submitSettingsPage();
    commonFunction.wait(1000);
    // And I enter tag "Tag1" in the settings of pages
    pagePage.typeTag("Tag1");
    commonFunction.wait(1000);
    let arrTag= pagePage.getListOfTags();
    commonFunction.wait(1000).then(() => {
    //  Then I validate if the tag "Tag1" is in the page creation
      let flag= pagePage.compareTags(arrTag, arr2);
      expect(flag).to.be.true;
    });
  });

  it("1.3 Edición y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL)
    //When I click tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000);
    let arr= tagPage.getNames();

    //And I select tag to edit "Tag1"
    tagPage.validateATagExists("Tag1").click();
    commonFunction.wait(1000);
    tagPage.validateTagInfo("Tag1");

    // And I modify the name and slug of the tag to "Tag2"
    tagPage.ChangeTagNameAndSlug("Tag2", "Tag2");

    //And I click Save
    tagPage.clickSave();
    commonFunction.wait(1000);
    tagPage.isSaved();
    commonFunction.wait(1000);

    //And I click back to tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000);

    let arr2 = tagPage.getNames();
    commonFunction.wait(1000).then(() => {
    //  Then I validate the title of tag "Tag2"
      let flag= tagPage.verifyEditedTag(arr,arr2);
      expect(flag).to.be.true;
    });

    //When I click post
    commonFunction.wait(1000);
    postPage.submitLinkPosts();
    commonFunction.wait(1000);
    // And I click new post
    postPage.submitNewPosts();
    commonFunction.wait(1000);
    // And I click settings of post
    postPage.selectPostSettings();
    commonFunction.wait(1000);
    // And I enter tag "Tag2" in the settings of post
    postPage.typeTag("Tag2");
    commonFunction.wait(1000);
    let arrTag= postPage.getListOfTags();
    commonFunction.wait(1000).then(() => {
    //  Then I validate if the tag "Tag2" is in the post creation
      let flag= postPage.compareTags(arrTag, arr2, "Tag2");
      expect(flag).to.be.true;
    });
  });
  it("1.4 Eliminación y no visualización de un tag de manera exitosa:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL)
    // When I click tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000);
    let arr= tagPage.getNames();
    //And I select tag to edit "Tag2"
    tagPage.validateATagExists("Tag2").click();
    commonFunction.wait(1000);
    tagPage.validateTagInfo("Tag2");
    commonFunction.wait(1000);
    //And I click delete tag
    tagPage.clickDelete();
    commonFunction.wait(1000);
    // And I click delete confirmation tag

    tagPage.verifyDeleteButton();
    tagPage.clickConfirmDelete();
    commonFunction.wait(1000);
    tagPage.verifyTagName();
    let arr2 = tagPage.getNames();
    //Then I validate the title of the tag does not exist "Tag2"
    commonFunction.wait(200).then(() => {
      let flag = tagPage.veriFyDeletedTag(arr,arr2);
      expect(flag).to.be.true;
    });
  });
 });

