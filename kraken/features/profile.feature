Feature: Pages


@user2 @web
Scenario: Creación exitosa de un page, visualización del page en un nuevo tab:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds
  When I click profile
  And I wait for 3 seconds
  And I click on your profile
  And I wait for 3 seconds
  And I click change password
  And I wait for 3 seconds
  And I enter old password "<PASSWORD>"
  And I wait for 2 seconds
  And I enter the new password "password1234"
  And I wait for 2 seconds
  And I both enter and confirm the new password "password1234"
  And I wait for 4 seconds
  And I click confirm password
  And I wait for 10 seconds    
  Then I validate the error message password "Sorry, you cannot use an insecure password."
  And I wait for 2 seconds 
  And I click close and save 
  And I wait for 10 seconds
  And I click close setting
  And I wait for 5 seconds
  And I click profile
  And I wait for 3 seconds
  And I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "password1234"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds

