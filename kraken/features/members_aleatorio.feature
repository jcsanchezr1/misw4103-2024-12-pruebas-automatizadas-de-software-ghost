Feature: Members Aleatorio

  @user1 @web
  Scenario: Como usuario inicio sesion, creo nuevo miembro de manera exitosa y lo elimino de manera exitosa
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 10 seconds
    When Aleatorio: I click members
    And I wait for 5 seconds
    And Aleatorio: I click new member
    And I wait for 5 seconds
    And Aleatorio: I enter member name
    And I wait for 3 seconds
    And Aleatorio: I enter member email
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 5 seconds
    Then Aleatorio: I validate the label of the new member should be
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name
    And I wait for 5 seconds
    And Aleatorio: I click first row on table members
    And I wait for 5 seconds
    And Aleatorio: I click on the member actions button
    And I wait for 5 seconds
    And Aleatorio: I click on the delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the confirm delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the show all members button
    And I wait for 5 seconds
    Then Aleatorio: I validate that the table not contains the name
    And I wait for 5 seconds


  @user2 @web
  Scenario: Como usuario inicio sesion, creo nuevo miembro de manera exitosa, creo nuevo miembro de manera fallida y lo elimino de manera exitosa
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 10 seconds
    When Aleatorio: I click members
    And I wait for 5 seconds
    And Aleatorio: I click new member
    And I wait for 5 seconds
    And Aleatorio: I enter member name
    And I wait for 3 seconds
    And Aleatorio: I enter member email
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 5 seconds
    And Aleatorio: I validate the label of the new member should be
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name
    And I wait for 5 seconds
    And Aleatorio: I click new member
    And I wait for 5 seconds
    And Aleatorio: I enter member name
    And I wait for 3 seconds
    And Aleatorio: I enter member email
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 5 seconds
    Then Aleatorio: I validate the error message "Member already exists. Attempting to add member with existing email address"
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I click leave button
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name
    And I wait for 5 seconds
    And Aleatorio: I click first row on table members
    And I wait for 5 seconds
    And Aleatorio: I click on the member actions button
    And I wait for 5 seconds
    And Aleatorio: I click on the delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the confirm delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the show all members button
    And I wait for 5 seconds
    Then Aleatorio: I validate that the table not contains the name
    And I wait for 5 seconds

  @user3 @web
  Scenario: Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera exitosa y lo elimino de manera exitosa
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 10 seconds
    When Aleatorio: I click members
    And I wait for 5 seconds
    And Aleatorio: I click new member
    And I wait for 5 seconds
    And Aleatorio: I enter member name
    And I wait for 3 seconds
    And Aleatorio: I enter member email
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 5 seconds
    And Aleatorio: I validate the label of the new member should be
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name
    And I wait for 5 seconds
    And Aleatorio: I click first row on table members
    And I wait for 5 seconds
    And Aleatorio: I enter member name edited
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 5 seconds
    Then Aleatorio: I validate the label of the new member should be edited
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with edited
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name edited
    And I wait for 5 seconds
    And Aleatorio: I click first row on table members
    And I wait for 5 seconds
    And Aleatorio: I click on the member actions button
    And I wait for 5 seconds
    And Aleatorio: I click on the delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the confirm delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the show all members button
    And I wait for 5 seconds
    Then Aleatorio: I validate that the table not contains the name edited
    And I wait for 5 seconds


  @user4 @web
  Scenario: Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera fallida y lo elimino de manera exitosa
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<EMAIL>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click sign in
    And I wait for 10 seconds
    And Aleatorio: I click members
    And I wait for 5 seconds
    And Aleatorio: I click new member
    And I wait for 5 seconds
    And Aleatorio: I enter member name
    And I wait for 3 seconds
    And Aleatorio: I enter member email
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 5 seconds
    And Aleatorio: I validate the label of the new member should be
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name
    And I wait for 5 seconds
    And Aleatorio: I click first row on table members
    And I wait for 5 seconds
    When Aleatorio: I enter member invalid email
    And I wait for 3 seconds
    And Aleatorio: I click save member
    And I wait for 3 seconds
    Then Aleatorio: I validate the error message "Invalid Email."
    And I wait for 2 seconds
    And Aleatorio: I click members back
    And I wait for 5 seconds
    And Aleatorio: I click leave button
    And I wait for 5 seconds
    And Aleatorio: I fill the filter text field with
    And I wait for 5 seconds
    And Aleatorio: I validate that the table contains the name
    And I wait for 5 seconds
    And Aleatorio: I click first row on table members
    And I wait for 5 seconds
    And Aleatorio: I click on the member actions button
    And I wait for 5 seconds
    And Aleatorio: I click on the delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the confirm delete member button
    And I wait for 5 seconds
    And Aleatorio: I click on the show all members button
    And I wait for 5 seconds
    Then Aleatorio: I validate that the table not contains the name
    And I wait for 5 seconds