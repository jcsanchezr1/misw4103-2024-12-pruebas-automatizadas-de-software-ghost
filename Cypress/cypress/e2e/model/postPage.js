class PostPage {
    constructor() {        
        this.elements = {
            postPage:'body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > a:nth-child(1)',
            newPost: 'body > div.gh-app > div > main > section > div > header > section > a',
            PostTitle: '#ember473 > div.gh-koenig-editor.relative.w-100.vh-100.overflow-x-hidden.overflow-y-auto.z-0 > div.gh-koenig-editor-pane.flex.flex-column.mih-100 > textarea',
        
        };
    
}
clickPostPage() {
    cy.get(this.elements.postPage).click();
}
clickNewPost() {
    cy.get(this.elements.newPost).click();
}
typePostTitle(title) {
    cy.get(this.elements.PostTitle).type(title);
}

}
module.exports = PostPage;