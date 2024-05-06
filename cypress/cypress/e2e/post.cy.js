import properties from './properties.json';
import LoginPage from './model/loginPage';
import PostPage from './model/postPage';

const postPage = new PostPage();
const loginPage = new LoginPage();

describe('Funcionalidad de Post', () => {
    beforeEach(() => {
        //Given un usuario admin logueado en Ghost
        loginPage.VisitURL(properties.URL);
        cy.wait(1000);
        loginPage.typeEmail(properties.EMAIL);
        loginPage.typePassword(properties.PASSWORD);
        loginPage.clickSignInButton();
        cy.wait(1000);
    });

    it('Creación exitosa de un post, visualización del post creado en post list', () => {
        //When I click posts
        postPage.submitLinkPosts();
        cy.wait(1000);
        //And I click new post
        postPage.submitNewPosts();
        cy.wait(1000)
        //And I enter post title "Post1"
        postPage.setPostTitle("Post1");
        cy.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        cy.wait(1000);
        //And I enter post desc "DescPost1"
        postPage.setPostDesc("DescPost1");
        cy.wait(1000);
        //And I submit the  post
        postPage.submitPublishPost();
        cy.wait(1000);
        //And I continue to the final post
        postPage.continueFinalPost();
        cy.wait(2000);
        //And I submit post right now
        postPage.submitPublishPostRN();
        cy.wait(1000);
        //Then I click back to editor
        postPage.backToEditorPost();
        cy.wait(1000);
        //And I click back to posts
        postPage.backToPost();
        cy.wait(1000);


        //And I look for the element in the list
        let listPosts = postPage.validatePostName();
        cy.wait(3000).then(() => {
            let found = postPage.validateExistPostTitle(listPosts, "Post1");
            expect(found).to.be.true;
        });



    });

    it('Modificación exitosa de un post, visualización del post modificado en post list', () => {
        //When I click posts
        postPage.submitLinkPosts();
        cy.wait(1000);
        //And I click new post
        postPage.submitNewPosts();
        cy.wait(1000)
        //And I enter post title "Post2"
        postPage.setPostTitle("Post2");
        cy.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        cy.wait(1000);
        //And I enter post desc "DescPost2"
        postPage.setPostDesc("DescPost2");
        cy.wait(1000);
        //And I submit the  post
        postPage.submitPublishPost();
        cy.wait(1000);
        //And I continue to the final post
        postPage.continueFinalPost();
        cy.wait(2000);
        //And I submit post right now
        postPage.submitPublishPostRN();
        cy.wait(1000);
        //And I click back to editor
        postPage.backToEditorPost();
        cy.wait(1000);
        //And I insert the updated value
        postPage.setPostTitle(" Updated");
        cy.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        cy.wait(1000);
        //And I enter post desc "Updated"
        postPage.setPostDesc(" Updated");
        cy.wait(1000);
        //And I click update button
        postPage.updatePost()
        cy.wait(1000);
        //Then I click back to posts
        postPage.backToPost();
        cy.wait(1000);
        //And I look for the element in the list
        let listPosts = postPage.validatePostName();
        cy.wait(3000).then(() => {
            let found = postPage.validateExistPostTitle(listPosts, " Updated");
            expect(found).to.be.true;
        });

    });

        it('Eliminación exitosa de un post, no visualización del post eliminado en post list', () => {
            //When I click posts
            postPage.submitLinkPosts();
            cy.wait(1000);
            let arr= postPage.validatePostName();
            //And I click new post
            postPage.submitNewPosts();
            cy.wait(1000)
            //And I enter post title "Post3"
            postPage.setPostTitle("Post3");
            cy.wait(1000);
            //And I select description post
            postPage.selectPostDesc();
            cy.wait(1000);
            //And I enter post desc "DescPost3"
            postPage.setPostDesc("DescPost3");
            cy.wait(1000);
            //And I submit the  post
            postPage.submitPublishPost();
            cy.wait(1000);
            //And I continue to the final post
            postPage.continueFinalPost();
            cy.wait(2000);
            //And I submit post right now
            postPage.submitPublishPostRN();
            cy.wait(1000);
            //And I click back to editor
            postPage.backToEditorPost();
            cy.wait(1000);
            //And I click post settings
            postPage.selectPostSettings();
            cy.wait(1000);
            //And I click delete post option
            postPage.selectDeletePost();
            cy.wait(1000);
            //And I confirm delete post
            postPage.confirmDeletePost();
            cy.wait(1000);
            //Then I validate the title of the post does not exist "Post3"
            let arr2= postPage.validatePostName();
            cy.wait(3000).then(() => {
                let found = postPage.verifyDeletedPost(arr, arr2);
                expect(found).to.be.false;
            });



        });

            it('Despublicación exitosa de un post', () => {
                //When I click posts
                postPage.submitLinkPosts();
                cy.wait(1000);
                //And I click new post
                postPage.submitNewPosts();
                cy.wait(1000)
                //And I enter post title "Post3"
                postPage.setPostTitle("Post4");
                cy.wait(1000);
                //And I select description post
                postPage.selectPostDesc();
                cy.wait(1000);
                //And I enter post desc "DescPost3"
                postPage.setPostDesc("DescPost4");
                cy.wait(1000);
                //And I submit the  post
                postPage.submitPublishPost();
                cy.wait(1000);
                //And I continue to the final post
                postPage.continueFinalPost();
                cy.wait(2000);
                //And I submit post right now
                postPage.submitPublishPostRN();
                cy.wait(1000);
                //And I click back to editor
                postPage.backToEditorPost();
                cy.wait(1000);
                //And I select the unpublish option
                postPage.selectUnpublish();
                cy.wait(1000);
                //And I confirm the unpublish option
                postPage.selectUnpublishConfirmation();
                cy.wait(1000);
                //Then I am able to see the publish button again
                //And I submit the  post
                postPage.submitPublishPost();
                cy.wait(1000);



            });



});