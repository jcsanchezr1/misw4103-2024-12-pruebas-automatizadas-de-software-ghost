import properties from './properties.json';
import PostPage from './model/postPage';
import CommonFunction from "./model/commonFunction";

const postPage = new PostPage();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe("Funcionalidad de Post", () => {
    let pseudoPost; 3000

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
        cy.request('https://my.api.mockaroo.com/pages.json?key=d87073e0').then((response) => {
            pseudoPost = response.body;
        });
    });


    it('Creación exitosa de un post, visualización del post modificado en post list', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click posts
        postPage.submitLinkPosts();
        commonFunction.wait(1000);
        //And I click new post
        postPage.submitNewPosts();
        commonFunction.wait(1000);
        //And I enter post title
        postPage.setPostTitle(pseudoPost.page_name);
        commonFunction.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc
        postPage.setPostDesc(pseudoPost.page_description);
        commonFunction.wait(1000);
        //And I submit the  post
        postPage.submitPublishPost();
        commonFunction.wait(1000);
        //And I continue to the final post
        postPage.continueFinalPost();
        commonFunction.wait(2000);
        //And I submit post right now
        postPage.submitPublishPostRN();
        commonFunction.wait(1000);
        //Then I click back to editor
        postPage.backToEditorPost();
        commonFunction.wait(1000);
        //And I click back to posts
        postPage.backToPost();
        commonFunction.wait(1000);
        //And I look for the element in the list
        let listPosts = postPage.validatePostName();
        commonFunction.wait(3000).then(() => {
            let found = postPage.validateExistPostTitle(listPosts, pseudoPost.page_name);
            expect(found).to.be.true;
        });

    });


    it('Modificación exitosa de un post, visualización del post modificado en post list', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click posts
        postPage.submitLinkPosts();
        commonFunction.wait(1000);
        //And I click new post
        postPage.submitNewPosts();
        commonFunction.wait(1000)
        //And I enter post title
        postPage.setPostTitle(pseudoPost.page_name);
        commonFunction.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc
        postPage.setPostDesc(pseudoPost.page_description);
        commonFunction.wait(1000);
        //And I submit the  post
        postPage.submitPublishPost();
        commonFunction.wait(1000);
        //And I continue to the final post
        postPage.continueFinalPost();
        commonFunction.wait(2000);
        //And I submit post right now
        postPage.submitPublishPostRN();
        commonFunction.wait(1000);
        //And I click back to editor
        postPage.backToEditorPost();
        commonFunction.wait(1000);
        //And I insert the updated value
        postPage.setPostTitle(pseudoPost.new_page_name);
        commonFunction.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc
        postPage.setPostDesc(pseudoPost.new_page_description);
        commonFunction.wait(1000);
        //And I click update button
        postPage.updatePost()
        commonFunction.wait(1000);
        //Then I click back to posts
        postPage.backToPost();
        commonFunction.wait(1000);
        //And I look for the element in the list
        let listPosts = postPage.validatePostName();
        commonFunction.wait(3000).then(() => {
            let found = postPage.validateExistPostTitle(listPosts, pseudoPost.new_page_name);
            expect(found).to.be.true;
        });

    });

    it('Eliminación exitosa de un post, no visualización del post eliminado en post list', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click posts
        postPage.submitLinkPosts();
        commonFunction.wait(1000);
        let arr= postPage.validatePostName();
        //And I click new post
        postPage.submitNewPosts();
        commonFunction.wait(1000)
        //And I enter post title
        postPage.setPostTitle(pseudoPost.page_name);
        commonFunction.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc
        postPage.setPostDesc(pseudoPost.page_description);
        commonFunction.wait(1000);
        //And I submit the  post
        postPage.submitPublishPost();
        commonFunction.wait(1000);
        //And I continue to the final post
        postPage.continueFinalPost();
        commonFunction.wait(2000);
        //And I submit post right now
        postPage.submitPublishPostRN();
        commonFunction.wait(1000);
        //And I click back to editor
        postPage.backToEditorPost();
        commonFunction.wait(1000);
        //And I click post settings
        postPage.selectPostSettings();
        commonFunction.wait(1000);
        //And I click delete post option
        postPage.selectDeletePost();
        commonFunction.wait(1000);
        //And I confirm delete post
        postPage.confirmDeletePost();
        commonFunction.wait(1000);
        //Then I validate the title of the post does not exist "Post3"
        let arr2= postPage.validatePostName();
        commonFunction.wait(3000).then(() => {
            let found = postPage.verifyDeletedPost(arr, arr2);
            expect(found).to.be.false;
        });

    });

    it('Despublicación exitosa de un post', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL)
        //When I click posts
        postPage.submitLinkPosts();
        commonFunction.wait(1000);
        //And I click new post
        postPage.submitNewPosts();
        commonFunction.wait(1000)
        //And I enter post title
        postPage.setPostTitle(pseudoPost.page_name);
        commonFunction.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc
        postPage.setPostDesc(pseudoPost.page_description);
        commonFunction.wait(1000);
        //And I submit the  post
        postPage.submitPublishPost();
        commonFunction.wait(1000);
        //And I continue to the final post
        postPage.continueFinalPost();
        commonFunction.wait(2000);
        //And I submit post right now
        postPage.submitPublishPostRN();
        commonFunction.wait(1000);
        //And I click back to editor
        postPage.backToEditorPost();
        commonFunction.wait(1000);
        //And I select the unpublish option
        postPage.selectUnpublish();
        commonFunction.wait(1000);
        //And I confirm the unpublish option
        postPage.selectUnpublishConfirmation();
        commonFunction.wait(1000);
        //Then I submit the  post
        postPage.submitPublishPost();
        commonFunction.wait(1000);

    });

});

