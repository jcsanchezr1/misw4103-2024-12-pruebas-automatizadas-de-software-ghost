Feature: Pages

@user1 @web
Scenario: Creación exitosa de un page, visualización del page creado en la sección de Pages:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 5 seconds
  And I enter page title "Page1"
  And I wait for 1 seconds
  And I enter description page "description Page 1"
  And I wait for 2 seconds
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
  And I validate the title of page "Page1"

@user2 @web
Scenario: Creación exitosa de un page, desde editor
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds
  When I click pages
  And I wait for 3 seconds
  And I click new page
  And I wait for 3 seconds
  And I enter page title "Page2"
  And I wait for 1 seconds
  And I enter description page "description Page 2"
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
  And I validate the title of page "Page2"  

@user3 @web
Scenario: Modificación exitosa de un page:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 5 seconds
  And I enter page title "Page3"
  And I wait for 1 seconds
  And I enter description page "description Page 3"
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
  And I select page to edit "Page3"  
  And I wait for 2 seconds
  And I enter page title "Page4"
  And I wait for 1 seconds
  And I enter description page "description Page 4"
  And I wait for 2 seconds
  And I click to update page
  And I wait for 3 seconds  
  Then I click back to pages  
  And I wait for 5 seconds
  And I validate the title of page "Page4"

@user4 @web
Scenario: Eliminar de manera exitosa una page
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 5 seconds
  And I enter page title "Page5"
  And I wait for 1 seconds
  And I enter description page "description Page 5"
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
  And I select page to edit "Page5"  
  And I wait for 2 seconds
  And I click page settings
  And I wait for 1 seconds
  And I click delete page
  And I wait for 2 seconds
  And I click delete confirmation page
  And I wait for 3 seconds  
  Then I validate the title of the page does not exist "Page5"  

