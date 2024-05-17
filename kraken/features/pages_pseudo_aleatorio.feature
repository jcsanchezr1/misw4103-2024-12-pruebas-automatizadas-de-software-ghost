Feature: Pages

@user1 @web
Scenario: Creación exitosa de un page y visualización del page creado en la sección de Pages
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 20 seconds
  When Pseudo: I click pages
  And I wait for 5 seconds
  And Pseudo: I click new page
  And I wait for 5 seconds
  And Pseudo: I enter page title
  And I wait for 2 seconds
  And Pseudo: I enter description page
  And I wait for 3 seconds
  And Pseudo: I click publish page
  And I wait for 3 seconds
  And Pseudo: I click continue final review page
  And I wait for 4 seconds  
  And Pseudo: I click publish final review page
  And I wait for 5 seconds 
  Then Pseudo: I click back to dashboard
  And I wait for 5 seconds
  And Pseudo: I click pages
  And I wait for 5 seconds
  And Pseudo: I validate the title of page
  And I wait for 2 seconds

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
  When Pseudo: I click pages
  And I wait for 3 seconds
  And Pseudo: I click new page
  And I wait for 3 seconds
  And Pseudo: I enter page title
  And I wait for 1 seconds
  And Pseudo: I enter description page
  And I wait for 2 seconds
  And Pseudo: I click publish page
  And I wait for 2 seconds
  And Pseudo: I click continue final review page
  And I wait for 4 seconds
  And Pseudo: I click publish final review page
  And I wait for 3 seconds    
  Then Pseudo: I click back to editor
  And I wait for 2 seconds 
  And Pseudo: I click back to pages  
  And I wait for 5 seconds
  And Pseudo: I validate the title of page
  And I wait for 2 seconds  

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
  When Pseudo: I click pages
  And I wait for 5 seconds
  And Pseudo: I click new page
  And I wait for 5 seconds
  And Pseudo: I enter page title
  And I wait for 1 seconds
  And Pseudo: I enter description page
  And I wait for 2 seconds
  And Pseudo: I click publish page
  And I wait for 3 seconds
  And Pseudo: I click continue final review page
  And I wait for 4 seconds  
  And Pseudo: I click publish final review page
  And I wait for 4 seconds 
  And Pseudo: I click back to dashboard
  And I wait for 5 seconds 
  And Pseudo: I click pages
  And I wait for 4 seconds
  And Pseudo: I select page to edit
  And I wait for 2 seconds
  And Pseudo: I enter page title to edit
  And I wait for 1 seconds
  And Pseudo: I enter description page to edit
  And I wait for 2 seconds
  And Pseudo: I click to update page
  And I wait for 3 seconds  
  Then Pseudo: I click back to pages  
  And I wait for 5 seconds
  And Pseudo: I validate the title of page to edit
  And I wait for 2 seconds

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
  When Pseudo: I click pages
  And I wait for 5 seconds
  And Pseudo: I click new page
  And I wait for 5 seconds
  And Pseudo: I enter page title
  And I wait for 1 seconds
  And Pseudo: I enter description page
  And I wait for 2 seconds
  And Pseudo: I click publish page
  And I wait for 3 seconds
  And Pseudo: I click continue final review page
  And I wait for 4 seconds  
  And Pseudo: I click publish final review page
  And I wait for 4 seconds 
  And Pseudo: I click back to dashboard
  And I wait for 5 seconds 
  And Pseudo: I click pages
  And I wait for 4 seconds
  And Pseudo: I select page to edit  
  And I wait for 2 seconds
  And Pseudo: I click page settings
  And I wait for 1 seconds
  And Pseudo: I click delete page
  And I wait for 2 seconds
  And Pseudo: I click delete confirmation page
  And I wait for 3 seconds  
  Then Pseudo: I validate the title of the page does not exist
  And I wait for 2 seconds 