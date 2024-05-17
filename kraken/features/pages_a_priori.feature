Feature: Pages A priori

@user1 @web
Scenario Outline: Creación exitosa de un page y visualización del page creado en la sección de Pages
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 20 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 5 seconds
  And I enter page title "<PAGE_NAME>"
  And I wait for 2 seconds
  And I enter description page "<PAGE_DESCRIPTION>"
  And I wait for 3 seconds
  And I click publish page
  And I wait for 3 seconds
  And I click continue final review page
  And I wait for 4 seconds  
  And I click publish final review page
  And I wait for 5 seconds 
  Then I click back to dashboard
  And I wait for 5 seconds
  And I click pages
  And I wait for 5 seconds
  And I validate the title of page "<PAGE_NAME>"
  And I wait for 2 seconds

  Examples:
    | URL                                                | EMAIL            | PASSWORD          | PAGE_NAME       | PAGE_DESCRIPTION     |
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Blatrol Bladder Relief   | Disp fx of left tibial spine, init for opn fx type 3A/B/C |


@user2 @web
Scenario: Creación exitosa de un page, desde editor
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 20 seconds
  When I click pages
  And I wait for 3 seconds
  And I click new page
  And I wait for 3 seconds
  And I enter page title "<PAGE_NAME>"
  And I wait for 1 seconds
  And I enter description page "<PAGE_DESCRIPTION>"
  And I wait for 2 seconds
  And I click publish page
  And I wait for 2 seconds
  And I click continue final review page
  And I wait for 4 seconds
  And I click publish final review page
  And I wait for 3 seconds    
  Then I click back to editor
  And I wait for 2 seconds 
  And I click back to pages  
  And I wait for 5 seconds
  And I validate the title of page "<PAGE_NAME>"
  And I wait for 2 seconds  

  Examples:
    | URL                                                | EMAIL            | PASSWORD          | PAGE_NAME       | PAGE_DESCRIPTION     |
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Ondansetron  | Burn of third degree of left ear, initial encounter |

@user3 @web
Scenario: Modificación exitosa de un page
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 20 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 5 seconds
  And I enter page title "<PAGE_NAME>"
  And I wait for 1 seconds
  And I enter description page "<PAGE_DESCRIPTION>"
  And I wait for 2 seconds
  And I click publish page
  And I wait for 3 seconds
  And I click continue final review page
  And I wait for 4 seconds  
  And I click publish final review page
  And I wait for 4 seconds 
  And I click back to dashboard
  And I wait for 5 seconds 
  And I click pages
  And I wait for 4 seconds
  And I select page to edit "<PAGE_NAME>"
  And I wait for 2 seconds
  And I enter page title "<NEW_PAGE_NAME>"
  And I wait for 1 seconds
  And I enter description page "<NEW_PAGE_DESCRIPTION>"
  And I wait for 2 seconds
  And I click to update page
  And I wait for 3 seconds  
  Then I click back to pages  
  And I wait for 5 seconds
  And I validate the title of page "<NEW_PAGE_NAME>"
  And I wait for 2 seconds

  Examples:
    | URL                                                | EMAIL            | PASSWORD          | PAGE_NAME       | PAGE_DESCRIPTION     | NEW_PAGE_NAME  | NEW_PAGE_DESCRIPTION  | 
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Qdryl Allergy  | Oth fx shaft of radius, left arm, init for opn fx type I/2 | galantamine hydrobromide | Strain extn musc/fasc/tend l little fngr at wrs/hnd lv, sqla  | 

@user4 @web
Scenario: Eliminar de manera exitosa una page
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 20 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 5 seconds
  And I enter page title "<PAGE_NAME>"
  And I wait for 1 seconds
  And I enter description page "<PAGE_DESCRIPTION>"
  And I wait for 2 seconds
  And I click publish page
  And I wait for 3 seconds
  And I click continue final review page
  And I wait for 4 seconds  
  And I click publish final review page
  And I wait for 4 seconds 
  And I click back to dashboard
  And I wait for 5 seconds 
  And I click pages
  And I wait for 4 seconds
  And I select page to edit "<PAGE_NAME>"  
  And I wait for 2 seconds
  And I click page settings
  And I wait for 1 seconds
  And I click delete page
  And I wait for 2 seconds
  And I click delete confirmation page
  And I wait for 3 seconds  
  Then I validate the title of the page does not exist "<PAGE_NAME>"
  And I wait for 2 seconds

  Examples:
    | URL                                                | EMAIL            | PASSWORD          | PAGE_NAME       | PAGE_DESCRIPTION     |
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Allergy Composition  | Unspecified blood type |