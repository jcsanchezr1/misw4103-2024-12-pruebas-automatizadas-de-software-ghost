import properties from './properties.json';
import PostPage from './model/postPage';
import CommonFunction from "./model/commonFunction";
import {faker} from '@faker-js/faker';

// import { fakerES_MX as faker } from '@faker-js/faker';

const postPage = new PostPage();
const commonFunction = new CommonFunction();
let title = faker.lorem.sentence();
let sentenceCount= {min: 2, max: 4};
let desc = faker.lorem.paragraph(sentenceCount);
let parentFolder = '';

describe("Funcionalidad de Post", () => {
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
        commonFunction.login(properties.URL)
        //When I click posts
        postPage.submitLinkPosts();
        commonFunction.wait(1000);
        //And I click new post
        postPage.submitNewPosts();
        commonFunction.wait(1000);
        //And I enter post title "Post1"
        postPage.setPostTitle(title);
        commonFunction.wait(1000);
        //And I select description post
        postPage.selectPostDesc();
        commonFunction.wait(1000);
        //And I enter post desc "DescPost1"
        postPage.setPostDesc(desc);
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
            let found = postPage.validateExistPostTitle(listPosts, title);
            expect(found).to.be.true;
        });

    });
});