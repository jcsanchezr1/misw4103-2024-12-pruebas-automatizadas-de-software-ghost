import properties from "./properties.json";
import LoginPage from "./model/loginPage";
import TagPage from "./model/tagPage";

const tagPage = new TagPage();
const loginPage = new LoginPage();

describe("Funcionalidad de Tag", () => {
  beforeEach(() => {
    //Given un usuario admin logueado en Ghost
    loginPage.VisitURL(properties.URL);
    cy.wait(1000);
    loginPage.typeEmail(properties.EMAIL);
    loginPage.typePassword(properties.PASSWORD);
    loginPage.clickSignInButton();
    cy.wait(1000);
  });

  it("1.1", () => {
    //When el usuario navega en la sección de tags
    tagPage.clickTagsPage();
    let arr = [];
    arr = tagPage.getNames();
    //AND el usuario da clic en el botón de nuevo tag
    tagPage.clickNewTag();
    cy.wait(1000);
    //AND inserta la información permitida - campo nombre con un nombre "Tag1"
    tagPage.typeName("Tag1");
    //AND da clic en el botón de guardar
    tagPage.clickSave();
    cy.wait(1000);
    //Then el botón new tag cambia a "saved"
    tagPage.isSaved();
    cy.wait(1000);
    //AND se navega en la sección de tags
    tagPage.clickTagsPage();
    cy.wait(1000)
    let arr2 = tagPage.getNames();
    cy.wait(1000).then(() => {
        let flag = false;
        if (arr2[arr2.length - 1] === "Tag1" && arr2.length > arr.length) {flag = true;}
        expect(flag).to.be.true;
    });
  });
});
