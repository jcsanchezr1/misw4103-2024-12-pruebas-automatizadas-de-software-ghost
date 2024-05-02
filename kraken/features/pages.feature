Feature: Pages

@user1 @web
Scenario: Creación exitosa de un page, visualización del page creado en la sección de Pages:
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 10 seconds
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
  And I wait for 3 seconds  
  And I click publish final review page
  And I wait for 5 seconds 
  Then I click back to dashboard
  And I click pages
  And I wait for 5 seconds
  And I validate the title of page "Page1"

@user2 @web
Scenario: Creación exitosa de un page, visualización del page en un nuevo tab:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 10 seconds
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
  And I wait for 2 seconds
  And I click publish final review page
  And I wait for 3 seconds    
  Then I click back to editor
  And I wait for 2 seconds 
  And I click back to pages  
  And I wait for 5 seconds
  And I validate the title of page "Page2"  
