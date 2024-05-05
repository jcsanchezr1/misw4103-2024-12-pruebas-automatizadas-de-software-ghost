Feature: Profile

@user2 @web
Scenario: Cambiar nombre de manera éxitosa
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 15 seconds
  When I click profile
  And I wait for 3 seconds
  And I click on your profile
  And I wait for 3 seconds
  And I change FullName "Felipeee"
  And I wait for 3 seconds
  And I click Save button
  And I wait for 3 seconds
  And I click back on profile
  And I wait for 3 seconds
  Then I validate the name has been changed "Felipeee"
