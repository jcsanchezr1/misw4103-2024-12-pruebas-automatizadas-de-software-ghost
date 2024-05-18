Feature: Pages Aleatorio

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
  When Aleatorio: I click pages
  And I wait for 5 seconds
  And Aleatorio: I click new page
  And I wait for 5 seconds
  And Aleatorio: I enter page title
  And I wait for 2 seconds
  And Aleatorio: I enter description page
  And I wait for 3 seconds
  And Aleatorio: I click publish page
  And I wait for 3 seconds
  And Aleatorio: I click continue final review page
  And I wait for 4 seconds  
  And Aleatorio: I click publish final review page
  And I wait for 5 seconds 
  Then Aleatorio: I click back to dashboard
  And I wait for 5 seconds
  And Aleatorio: I click pages
  And I wait for 5 seconds
  And Aleatorio: I validate the title of page
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
  When Aleatorio: I click pages
  And I wait for 3 seconds
  And Aleatorio: I click new page
  And I wait for 3 seconds
  And Aleatorio: I enter page title
  And I wait for 1 seconds
  And Aleatorio: I enter description page
  And I wait for 2 seconds
  And Aleatorio: I click publish page
  And I wait for 2 seconds
  And Aleatorio: I click continue final review page
  And I wait for 4 seconds
  And Aleatorio: I click publish final review page
  And I wait for 3 seconds    
  Then Aleatorio: I click back to editor
  And I wait for 2 seconds 
  And Aleatorio: I click back to pages  
  And I wait for 5 seconds
  And Aleatorio: I validate the title of page
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
  When Aleatorio: I click pages
  And I wait for 5 seconds
  And Aleatorio: I click new page
  And I wait for 5 seconds
  And Aleatorio: I enter page title
  And I wait for 1 seconds
  And Aleatorio: I enter description page
  And I wait for 2 seconds
  And Aleatorio: I click publish page
  And I wait for 3 seconds
  And Aleatorio: I click continue final review page
  And I wait for 4 seconds  
  And Aleatorio: I click publish final review page
  And I wait for 4 seconds 
  And Aleatorio: I click back to dashboard
  And I wait for 5 seconds 
  And Aleatorio: I click pages
  And I wait for 4 seconds
  And Aleatorio: I select page to edit
  And I wait for 2 seconds
  And Aleatorio: I enter page title to edit
  And I wait for 1 seconds
  And Aleatorio: I enter description page to edit
  And I wait for 2 seconds
  And Aleatorio: I click to update page
  And I wait for 3 seconds  
  Then Aleatorio: I click back to pages  
  And I wait for 5 seconds
  And Aleatorio: I validate the title of page to edit
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
  When Aleatorio: I click pages
  And I wait for 5 seconds
  And Aleatorio: I click new page
  And I wait for 5 seconds
  And Aleatorio: I enter page title
  And I wait for 1 seconds
  And Aleatorio: I enter description page
  And I wait for 2 seconds
  And Aleatorio: I click publish page
  And I wait for 3 seconds
  And Aleatorio: I click continue final review page
  And I wait for 4 seconds  
  And Aleatorio: I click publish final review page
  And I wait for 4 seconds 
  And Aleatorio: I click back to dashboard
  And I wait for 5 seconds 
  And Aleatorio: I click pages
  And I wait for 4 seconds
  And Aleatorio: I select page to edit  
  And I wait for 2 seconds
  And Aleatorio: I click page settings
  And I wait for 1 seconds
  And Aleatorio: I click delete page
  And I wait for 2 seconds
  And Aleatorio: I click delete confirmation page
  And I wait for 3 seconds  
  Then Aleatorio: I validate the title of the page does not exist
  And I wait for 2 seconds 