import properties from "./properties.json";

import CommonFunction from "./model/commonFunction";
import LoginPageOld from './model/loginPageOld';
import TagPageOld from "./model/tagPageOld";
import PostPageOld from "./model/postPageOld";

const loginPageOld = new LoginPageOld();
const tagPage = new TagPageOld();
const postPage = new PostPageOld();



const commonFunction = new CommonFunction();

let parentFolder = '';


describe("Funcionalidad de Tag Old", (z ) => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    Cypress.Screenshot.defaults({
      overwrite: true,
    })
  });

  it("Creación y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL_OLD)
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
    let arrTag= postPage.getListOfTags()
    commonFunction.wait(1000).then(() => {
      console.log(arrTag)
      console.log(arr2)
        //Then I validate if the tag "Tag1" is in the post creation
        let flag= postPage.compareTags(arrTag, arr2, "Tag1");
        expect(flag).to.be.true;
    });

  });

  it("Edición y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL_OLD)
    //When I click tags
    tagPage.clickTagsPage();
    commonFunction.wait(1000);
    let arr= tagPage.getNames();

    console.log(arr)

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
    console.log(arr2)
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


  it("Eliminación y no visualización de un tag de manera exitosa:", () => {
    parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
    commonFunction.setPath(parentFolder)
    //GIVEN un usuario admin logueado en Ghost
    commonFunction.login(properties.URL_OLD)
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
    let arr2 = tagPage.getNames();
    //Then I validate the title of the tag does not exist "Tag2"
    commonFunction.wait(200).then(() => {
      let flag = tagPage.veriFyDeletedTag(arr,arr2);
      expect(flag).to.be.true;
    });
  });
 });

