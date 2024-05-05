import properties from "./properties.json";
import LoginPage from "./model/loginPage";
// import TagPage from "./model/tagPage";
import PagePage from "./model/pagePage";

const tagPage = new TagPage();
const loginPage = new LoginPage();
const pagePage = new PagePage();

describe("Funcionalidad de Tag", (z ) => {
  beforeEach(() => {
    //Given un usuario admin logueado en Ghost
    loginPage.VisitURL(properties.URL);
    cy.wait(1000);
    loginPage.typeEmail(properties.EMAIL);
    loginPage.typePassword(properties.PASSWORD);
    loginPage.clickSignInButton();
    cy.wait(1000);
  });

//   it("1.1 Creación y visualización de un tag de manera exitosa, visualización en un post creation:", () => {
//     //When el usuario navega en la sección de tags
//     tagPage.clickTagsPage();
//     cy.wait(1000);
//     let arr = [];
//     arr = tagPage.getNames();
//     //AND el usuario da clic en el botón de nuevo tag
//     tagPage.clickNewTag();
//     cy.wait(1000);
//     //AND inserta la información permitida - campo nombre con un nombre "Tag1"
//     tagPage.typeName("Tag1");
//     //AND da clic en el botón de guardar
//     tagPage.clickSave();
//     cy.wait(1000);
//     //Then el botón new tag cambia a "saved"
//     tagPage.isSaved();
//     cy.wait(1000);
//     //AND se navega en la sección de tags
//     tagPage.clickTagsPage();
//     cy.wait(1000)
//     let arr2 = tagPage.getNames();
//     cy.wait(1000).then(() => {
//      //AND el tag se encuentra en la lista de tags creados - tag "Tag1" en la lista   
//      let flag= tagPage.compareNames(arr,arr2);
//       expect(flag).to.be.true;
//     });
//     //AND Al ir al post creation, es posible agregar el tag a un nuevo post  - Agregar el "Tag1"

//   });  //AND Al ir al page creation, es posible agregar el tag a un nuevo Page  - Agregar el "Tag1"
  
  it("1.2 Creación y visualización de un tag de manera exitosa, visualización en un page creation:", () => {
    //When el usuario navega en la sección de tags
    tagPage.clickTagsPage();
    cy.wait(1000);
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
     //AND el tag se encuentra en la lista de tags creados - tag "Tag1" en la lista   
     let flag= tagPage.compareNames(arr,arr2);
      expect(flag).to.be.true;
    });
    //AND Al ir al post creation, es posible agregar el tag a un nuevo post  - Agregar el "Tag1"
    cy.wait(1000);
    pagePage.submitLinkPages();
    cy.wait(1000);
    pagePage.submitNewPage();
    cy.wait(1000);
    pagePage.submitSettingsPage();
    cy.wait(1000);
    pagePage.typeTag("Tag1");
    cy.wait(1000);
    let arrTag= pagePage.getListOfTags();
    cy.wait(1000).then(() => {
        //AND el tag "Tag1" se encuentra en la sección de Post settings - tags del post
        let flag= pagePage.compareTags(arrTag, arr2);
        expect(flag).to.be.true;
    });
    
  }); 
//   it("1.3", () => {
//     //When el usuario navega en la sección de tags
//     tagPage.clickTagsPage();
//     cy.wait(1000);
//     let arr= tagPage.getNames();

//     //AND selecciona el tag "Tag1" en el listado de tags
//     tagPage.validateATagExists("Tag1").click();
//     cy.wait(1000);

//     //AND La información precargada del tag se muestra
//     tagPage.validateTagInfo("Tag1");
    
//     //AND Modifica el nombre y el slug del "Tag1" por "Tag2" en los dos campos
//     tagPage.ChangeTagNameAndSlug("Tag2", "Tag2");

//     //AND guarda la información del tag modificado con la opción guardar
//     tagPage.clickSave();
//     cy.wait(1000);

//     //Then el botón new tag cambia a "saved"
//     tagPage.isSaved();
//     cy.wait(1000);

//     //AND se navega en la sección de tags 
//     tagPage.clickTagsPage();
//     cy.wait(1000);

//     let arr2 = tagPage.getNames();
//     cy.wait(1000).then(() => {
//         //AND el tag se encuentra en la lista de tags creados - tag "Tag2" en la lista
//         let flag= tagPage.verifyEditedTag(arr,arr2);
//         expect(flag).to.be.true;
//     });

//   });
//    it("1.4", () => {
//     // WHEN navega en la sección de tags
//     tagPage.clickTagsPage();
//     cy.wait(1000);
//     let arr= tagPage.getNames();
// 	// AND selecciona el tag "Tag2" en el listado de tags
//     tagPage.validateATagExists("Tag2").click();
//     cy.wait(1000);
// 	// AND La información precargada del tag se muestra
//     tagPage.validateTagInfo("Tag2");
//     cy.wait(1000);
//     // AND Al final de la página se presenta la opción "Delete tag"
// 	// AND Seleccionar la opción "Delete tag"
//     tagPage.clickDelete();
//     cy.wait(1000);
// 	// AND Un mensaje de confirmación se despliega con opciones "Cancel" y "Delete"
//     tagPage.verifyDeleteButton();
// 	// AND Seleccionar la opción "Delete"
//     tagPage.clickConfirmDelete();
//     cy.wait(1000);
// 	// THEN El sistema redirecciona al listado de tags
//     tagPage.verifyTagName();

//     let arr2 = tagPage.getNames();
// 	// AND El "Tag2" no se encuentra en la lista de tags
//     cy.wait(200).then(() => {
//        let flag = tagPage.veriFyDeletedTag(arr,arr2);
//         expect(flag).to.be.true;
//     });
//    });
 });

