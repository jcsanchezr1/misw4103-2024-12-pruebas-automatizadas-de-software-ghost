import properties from './properties.json';
import LoginPageOld from './model/loginPageOld';
import PostPageOld from './model/postPageOld';

const postPageOld = new PostPageOld();
const loginPageOld = new LoginPageOld();
const newArr=[];

function wait(waitTime, path='' ){
    newArr.push('')
    let val= 'Post/post/'+newArr.length
    cy.wait(waitTime);
    return cy.screenshot(val);
}

describe("Funcionalidad de Post", (z ) => {
    beforeEach(() => {
        Cypress.Screenshot.defaults({
            overwrite: true,
        })
        //Given un usuario admin logueado en Ghost
        loginPageOld.VisitURL(properties.URL_OLD);
        wait(1000);
        loginPageOld.typeEmail(properties.EMAIL);
        loginPageOld.typePassword(properties.PASSWORD);
        loginPageOld.clickSignInButton();
        wait(1000);
    });


    it('Creación exitosa de un post, visualización del post creado en post list', () => {
        //When I click posts
        postPageOld.submitLinkPosts();
        wait(1000);
        //And I click new post
        postPageOld.submitNewPosts();
        wait(1000)
        //And I enter post title "Post1"
        postPageOld.setPostTitle("Post1");
        wait(1000);
        //And I select description post
        postPageOld.selectPostDesc();
        wait(1000);
        //And I enter post desc "DescPost1"
        postPageOld.setPostDesc("DescPost1");
        wait(1000);
        //And I click on Publish options
        postPageOld.submitPublishPost();
        wait(2000);
        //And I continue to the final post
        postPageOld.continueFinalPost();
        wait(2000);
        //Then I click back to editor
        postPageOld.backToPost();
        wait(1000);
        //And I validate the element in the post list
        let listPosts = postPageOld.validatePostName();
        wait(3000).then(() => {
            let found = postPageOld.validateExistPostTitle(listPosts, "Post1");
            expect(found).to.be.true;
        });

    });



    it('Modificación exitosa de un post, visualización del post modificado en post list', () => {
        //When I click posts
        postPageOld.submitLinkPosts();
        wait(1000);
        //And I click new post
        postPageOld.submitNewPosts();
        wait(1000)
        //And I enter post title "Post2"
        postPageOld.setPostTitle("Post2");
        wait(1000);
        //And I select description post
        postPageOld.selectPostDesc();
        wait(1000);
        //And I enter post desc "DescPost2"
        postPageOld.setPostDesc("DescPost2");
        wait(1000);
        //And I click on Publish options
        postPageOld.submitPublishPost();
        wait(2000);
        //And I continue to the final post
        postPageOld.continueFinalPost();
        wait(2000);
        //And I update the post title
        postPageOld.setPostTitle(" Updated");
        wait(1000);
        //And I select description post
        postPageOld.selectPostDesc();
        wait(1000);
        //And I update the post description
        postPageOld.setPostDesc(" Updated");
        wait(1000);
        //And I click on Publish options
        postPageOld.submitPublishPost();
        wait(2000);
        //And I continue to the final post
        postPageOld.continueFinalPost();
        wait(2000);
        //Then I click back to editor
        postPageOld.backToPost();
        wait(1000);
        let listPosts = postPageOld.validatePostName();
        wait(3000).then(() => {
            let found = postPageOld.validateExistPostTitle(listPosts, "Post2 Updated");
            expect(found).to.be.true;
        });

    });
});