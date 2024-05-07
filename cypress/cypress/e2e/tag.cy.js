import properties from "./properties.json";
import LoginPage from "./model/loginPage";
import PagePage from "./model/pagePage";
import TagPage from "./model/tagPage";
import PostPage from "./model/postPage";


const tagPage = new TagPage();
const loginPage = new LoginPage();
const pagePage = new PagePage();
const  postPage = new PostPage();
const newArr=[];

function wait(waitTime, path='' ){
  newArr.push('')
  let val= 'Tag/tag/'+newArr.length
  cy.wait(waitTime);
  return cy.screenshot(val);
}

describe("Funcionalidad de Tag", (z ) => {
  beforeEach(() => {
    // Given I navigate to page "<URL>"
    loginPage.VisitURL(properties.URL);
    wait(1000);
    // And I enter email "<EMAIL>"
    loginPage.typeEmail(properties.EMAIL);
    // And I enter password "<PASSWORD>"
    loginPage.typePassword(properties.PASSWORD);
    // And I click sign in
    loginPage.clickSignInButton();
    wait(1000);
  });

  it("1.1 Creación y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
    //When i click tags
    tagPage.clickTagsPage();
    wait(1000);
    let arr = [];
    arr = tagPage.getNames();
    //AND i click new tag
    tagPage.clickNewTag();
    wait(1000);
    //And I enter tag title "Tag1"
    tagPage.typeName("Tag1");
    //AND And I click Save
    tagPage.clickSave();
    wait(1000);
    tagPage.isSaved();
    wait(1000);
    //AND I click back to tags
    tagPage.clickTagsPage();
    wait(1000)
    let arr2 = tagPage.getNames();
    wait(1000).then(() => {
     //Then I validate the title of tag "Tag1"
     let flag= tagPage.compareNames(arr,arr2);
      expect(flag).to.be.true;
    });
    //When I click post
    wait(1000);
    postPage.submitLinkPosts();
    wait(1000);
    //And I click new post
    postPage.submitNewPosts();
    wait(1000);
    //And I click settings of post
    postPage.selectPostSettings();
    wait(1000);
    //And I enter tag "Tag1" in the settings of post
    postPage.typeTag("Tag1");
    wait(1000);
    let arrTag= postPage.getListOfTags();
    wait(1000).then(() => {
        //Then I validate if the tag "Tag1" is in the post creation
        let flag= postPage.compareTags(arrTag, arr2, "Tag1");
        expect(flag).to.be.true;
    });

  });

  // it("1.2 Creación y visualización de un tag de manera exitosa, visualización en un page creation:", () => {
  //   //When I click tags
  //   tagPage.clickTagsPage();
  //   wait(1000);
  //   let arr = [];
  //   arr = tagPage.getNames();
  //   // And I click new tag
  //   tagPage.clickNewTag();
  //   wait(1000);
  //   // And I enter tag title "Tag1"
  //   tagPage.typeName("Tag1");
  //   //And I click Save
  //   tagPage.clickSave();
  //   wait(1000);
  //   tagPage.isSaved();
  //   wait(1000);
  //   //And I click back to tags
  //   tagPage.clickTagsPage();
  //   wait(1000)
  //   let arr2 = tagPage.getNames();
  //   wait(1000).then(() => {
  //    //Then I validate the title of tag "Tag1"
  //    let flag= tagPage.compareNames(arr,arr2);
  //     expect(flag).to.be.true;
  //   });
  //   //AND I click pages
  //   wait(1000);
  //   pagePage.submitLinkPages();
  //   wait(1000);
  //   //And I click new page
  //   pagePage.submitNewPage();
  //   wait(1000);
  //   //And I click page settings-
  //   pagePage.submitSettingsPage();
  //   wait(1000);
  //   // And I enter tag "Tag1" in the settings of pages
  //   pagePage.typeTag("Tag1");
  //   wait(1000);
  //   let arrTag= pagePage.getListOfTags();
  //   wait(1000).then(() => {
  //       // Then I validate if the tag "Tag1" is in the page creation
  //       let flag= pagePage.compareTags(arrTag, arr2);
  //       expect(flag).to.be.true;
  //   });
  // });

  // it("1.3 Edición y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
  //   //When I click tags
  //   tagPage.clickTagsPage();
  //   wait(1000);
  //   let arr= tagPage.getNames();

  //   //And I select tag to edit "Tag1"   
  //   tagPage.validateATagExists("Tag1").click();
  //   wait(1000);
  //   tagPage.validateTagInfo("Tag1");

  //   // And I modify the name and slug of the tag to "Tag2"
  //   tagPage.ChangeTagNameAndSlug("Tag2", "Tag2");

  //   //And I click Save
  //   tagPage.clickSave();
  //   wait(1000);
  //   tagPage.isSaved();
  //   wait(1000);

  //   //And I click back to tags
  //   tagPage.clickTagsPage();
  //   wait(1000);

  //   let arr2 = tagPage.getNames();
  //   wait(1000).then(() => {
  //       //Then I validate the title of tag "Tag2"
  //       let flag= tagPage.verifyEditedTag(arr,arr2);
  //       expect(flag).to.be.true;
  //   });

  //   //When I click post
  //   wait(1000);
  //   postPage.submitLinkPosts();
  //   wait(1000);
  //   // And I click new post
  //   postPage.submitNewPosts();
  //   wait(1000);
  //   // And I click settings of post
  //   postPage.selectPostSettings();
  //   wait(1000);
  //   // And I enter tag "Tag2" in the settings of post
  //   postPage.typeTag("Tag2");
  //   wait(1000);
  //   let arrTag= postPage.getListOfTags();
  //   wait(1000).then(() => {
  //       //Then I validate if the tag "Tag2" is in the post creation
  //       let flag= postPage.compareTags(arrTag, arr2, "Tag2");
  //       expect(flag).to.be.true;
  //   });
  //  });
  //  it("1.4 Eliminación y no visualización de un tag de manera exitosa:", () => {
  //   // When I click tags
  //   tagPage.clickTagsPage();
  //   wait(1000);
  //   let arr= tagPage.getNames();
	// //  And I select tag to edit "Tag2"   
  //   tagPage.validateATagExists("Tag2").click();
  //   wait(1000);
  //   tagPage.validateTagInfo("Tag2");
  //   wait(1000);
	// // And I click delete tag
  //   tagPage.clickDelete();
  //   wait(1000);
  //   // And I click delete confirmation tag

  //   tagPage.verifyDeleteButton();
  //   tagPage.clickConfirmDelete();
  //   wait(1000);
  //   tagPage.verifyTagName();
  //   let arr2 = tagPage.getNames();
	// //  Then I validate the title of the tag does not exist "Tag2"
  //   wait(200).then(() => {
  //      let flag = tagPage.veriFyDeletedTag(arr,arr2);
  //       expect(flag).to.be.true;
  //   });
  //  });
 });

