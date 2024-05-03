Feature: Members

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
  When I click members
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "name1"
  And I wait for 3 seconds
  And I enter member email "name1@uniandes.edu.co"
  And I wait for 3 seconds
  And I click save member
  And I wait for 5 seconds
  Then I validate the label of the new member should be "name1"
  And I click members back
  And I wait for 5 seconds
  And I fill the filter text field with "name1"
  And I wait for 5 seconds
  And I validate that the table contains the name "name1"
  And I wait for 5 seconds
  And I click first row on table members
  And I wait for 5 seconds
  And I click on the member actions button
  And I wait for 5 seconds
  And I click on the delete member button
  And I wait for 5 seconds
  And I click on the confirm delete member button
  And I wait for 5 seconds
  And I click on the show all members button
  And I wait for 5 seconds
  And I validate that the table not contains the name "name1"
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
  When I click members
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "name2"
  And I wait for 3 seconds
  And I enter member email "name2@uniandes.edu.co"
  And I wait for 3 seconds
  And I click save member
  And I wait for 5 seconds
  And I validate the label of the new member should be "name2"
  And I wait for 2 seconds
  And I click members back
  And I wait for 5 seconds
  And I fill the filter text field with "name2"
  And I wait for 5 seconds
  And I validate that the table contains the name "name2"
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "name2"
  And I wait for 3 seconds
  And I enter member email "name2@uniandes.edu.co"
  And I wait for 3 seconds
  And I click save member
  And I wait for 5 seconds
  Then I validate the error message "Member already exists. Attempting to add member with existing email address"
  And I click members back
  And I wait for 5 seconds
  And I click leave button
  And I wait for 5 seconds
  And I fill the filter text field with "name2"
  And I wait for 5 seconds
  And I validate that the table contains the name "name2"
  And I wait for 5 seconds
  And I click first row on table members
  And I wait for 5 seconds
  And I click on the member actions button
  And I wait for 5 seconds
  And I click on the delete member button
  And I wait for 5 seconds
  And I click on the confirm delete member button
  And I wait for 5 seconds
  And I click on the show all members button
  And I wait for 5 seconds
  And I validate that the table not contains the name "name2"
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
  When I click members
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "name3"
  And I wait for 3 seconds
  And I enter member email "name3@uniandes.edu.co"
  And I wait for 3 seconds
  And I click save member
  And I wait for 5 seconds
  And I validate the label of the new member should be "name3"
  And I wait for 2 seconds
  And I click members back
  And I wait for 5 seconds
  And I fill the filter text field with "name3"
  And I wait for 5 seconds
  And I validate that the table contains the name "name3"
  And I wait for 5 seconds
  And I click first row on table members
  And I wait for 5 seconds
  And I enter member name "name3Modified"
  And I wait for 3 seconds
  And I click save member
  And I wait for 5 seconds
  Then I validate the label of the new member should be "name3Modified"
  And I click members back
  And I wait for 5 seconds
  And I fill the filter text field with "name3Modified"
  And I wait for 5 seconds
  And I validate that the table contains the name "name3Modified"
  And I wait for 5 seconds
  And I click first row on table members
  And I wait for 5 seconds
  And I click on the member actions button
  And I wait for 5 seconds
  And I click on the delete member button
  And I wait for 5 seconds
  And I click on the confirm delete member button
  And I wait for 5 seconds
  And I click on the show all members button
  And I wait for 5 seconds
  And I validate that the table not contains the name "name3Modified"
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
  And I click members
  And I wait for 5 seconds
  And I click new member
  And I wait for 5 seconds
  And I enter member name "name4"
  And I wait for 3 seconds
  And I enter member email "name4@uniandes.edu.co"
  And I wait for 3 seconds
  And I click save member
  And I wait for 5 seconds
  And I validate the label of the new member should be "name4"
  And I wait for 2 seconds
  And I click members back
  And I wait for 5 seconds
  And I fill the filter text field with "name4"
  And I wait for 5 seconds
  And I validate that the table contains the name "name4"
  And I wait for 5 seconds
  And I click first row on table members
  And I wait for 5 seconds
  When I enter member email "correoNoValido"
  And I wait for 3 seconds
  And I click save member
  And I wait for 3 seconds
  Then I validate the error message "Invalid Email."
  And I click members back
  And I wait for 5 seconds
  And I click leave button
  And I wait for 5 seconds
  And I fill the filter text field with "name4"
  And I wait for 5 seconds
  And I validate that the table contains the name "name4"
  And I wait for 5 seconds
  And I click first row on table members
  And I wait for 5 seconds
  And I click on the member actions button
  And I wait for 5 seconds
  And I click on the delete member button
  And I wait for 5 seconds
  And I click on the confirm delete member button
  And I wait for 5 seconds
  And I click on the show all members button
  And I wait for 5 seconds
  And I validate that the table not contains the name "name4"
  And I wait for 5 seconds