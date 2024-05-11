import properties from './properties.json';
import PostPageOld from './model/postPageOld';
import CommonFunction from './model/commonFunction';

const postPageOld = new PostPageOld();
const commonFunction = new CommonFunction();

let parentFolder = '';

describe("Funcionalidad de Post old", (z ) => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
    });


    it('Creación exitosa de un post, visualización del post creado en post list', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        //When I click posts
        postPageOld.submitLinkPosts();
        commonFunction.wait(1000);
        //And I click new post
        postPageOld.submitNewPosts();
        commonFunction.wait(1000);
        //And I enter post title "Post1"
        postPageOld.setPostTitle("Post1");
        commonFunction.wait(1000);
        //And I select description post
        postPageOld.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc "DescPost1"
        postPageOld.setPostDesc("DescPost1");
        commonFunction.wait(1000);
        //And I click on Publish options
        postPageOld.submitPublishPost();
        commonFunction.wait(1000);
        //And I continue to the final post
        postPageOld.continueFinalPost();
        commonFunction.wait(1000);
        //Then I click back to editor
        postPageOld.backToPost();
        commonFunction.wait(1000);
        //And I validate the element in the post list
        let listPosts = postPageOld.validatePostName();
        commonFunction.wait(3000).then(() => {
            let found = postPageOld.validateExistPostTitle(listPosts, "Post1");
            expect(found).to.be.true;
        });

    });



    it('Modificación exitosa de un post, visualización del post modificado en post list', () => {
        parentFolder = Cypress.mocha.getRunner().suite.ctx._runnable.parent.title + '/' + Cypress.mocha.getRunner().suite.ctx._runnable.title + '/';
        commonFunction.setPath(parentFolder)
        //Given un usuario admin logueado en Ghost
        commonFunction.login(properties.URL_OLD)
        //When I click posts
        postPageOld.submitLinkPosts();
        commonFunction.wait(1000);
        //And I click new post
        postPageOld.submitNewPosts();
        commonFunction.wait(1000);
        //And I enter post title "Post2"
        postPageOld.setPostTitle("Post2");
        commonFunction.wait(1000);
        //And I select description post
        postPageOld.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc "DescPost2"
        postPageOld.setPostDesc("DescPost2");
        commonFunction.wait(1000);
        //And I click on Publish options
        postPageOld.submitPublishPost();
        commonFunction.wait(2000);
        //And I continue to the final post
        postPageOld.continueFinalPost();
        commonFunction.wait(2000);
        //And I update the post title
        postPageOld.setPostTitle(" Updated");
        commonFunction.wait(1000);
        //And I select description post
        postPageOld.selectPostDesc();
        commonFunction.wait(1000);
        //And I update the post description
        postPageOld.setPostDesc(" Updated");
        commonFunction.wait(1000);
        //And I click on Publish options
        postPageOld.submitPublishPost();
        commonFunction.wait(2000);
        //And I continue to the final post
        postPageOld.continueFinalPost();
        commonFunction.wait(2000);
        //Then I click back to editor
        postPageOld.backToPost();
        commonFunction.wait(1000);
        let listPosts = postPageOld.validatePostName();
        commonFunction.wait(3000).then(() => {
            let found = postPageOld.validateExistPostTitle(listPosts, "Post2 Updated");
            expect(found).to.be.true;
        });

    });
});