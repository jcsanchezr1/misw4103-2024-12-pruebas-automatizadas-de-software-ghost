Feature: Members

@user1 @web
Scenario: Como usuario inicio sesion y creo de nuevo miembro de manera exitosa
  Given I navigate to page "<URL>"
  And I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 10 seconds
  When I click members
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "name1"
  And I enter member email "name1@uniandes.edu.co"
  And I click save member
  And I wait for 5 seconds
  Then I validate the label of the new member should be "name1"
  And I click members back
  And I wait for 5 seconds
  And I fill the filter text field with "name1"
  And I wait for 5 seconds
  And I validate that the table contains the name "name1"
  And I wait for 5 seconds

@user2 @web
Scenario: Como usuario inicio sesion y creo de nuevo miembro existente de manera fallida
  Given I navigate to page "<URL>"
  And I enter email "<EMAIL>"
  And I enter password "<PASSWORD>"
  And I click sign in
  And I wait for 10 seconds
  When I click members
  And I wait for 5 seconds
  And I click new member
  And I enter member name "name2"
  And I enter member email "name2@uniandes.edu.co"
  And I click save member
  And I wait for 5 seconds
  And I validate the label of the new member should be "name2"
  And I click members back
  And I fill the filter text field with "name2"
  And I wait for 5 seconds
  And I validate that the table contains the name "name2"
  And I click new member
  And I enter member name "name3"
  And I enter member email "name2@uniandes.edu.co"
  And I click save member
  And I wait for 5 seconds
  Then I validate that the button text should be "Retry"
  And I validate the error message "Member already exists. Attempting to add member with existing email address"
  And I click members back
  And I click leave button
  And I wait for 5 seconds