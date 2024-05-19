Feature: Members A priori

  @user1 @web
  Scenario Outline: Como usuario inicio sesion, creo nuevo miembro de manera exitosa y lo elimino de manera exitosa
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
    And I enter member name "<MEMBER_NAME>"
    And I wait for 3 seconds
    And I enter member email "<MEMBER_EMAIL>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 5 seconds
    Then I validate the label of the new member should be "<MEMBER_NAME>"
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_NAME>"
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
    Then I validate that the table not contains the name "<MEMBER_NAME>"
    And I wait for 5 seconds

    Examples:
      | URL                                            | EMAIL           | PASSWORD         | MEMBER_NAME | MEMBER_LAST_NAME | MEMBER_EMAIL          | MEMBER_INVALID_EMAIL |
      | https://ghost-rrgn.onrender.com/ghost/#/signin | conan@gmail.com | Automatizadas01* | Minetta     | Downing          | mdowning0@dropbox.com | Apt 1959             |


  @user2 @web
  Scenario Outline: Como usuario inicio sesion, creo nuevo miembro de manera exitosa, creo nuevo miembro de manera fallida y lo elimino de manera exitosa
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
    And I enter member name "<MEMBER_NAME>"
    And I wait for 3 seconds
    And I enter member email "<MEMBER_EMAIL>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 5 seconds
    And I validate the label of the new member should be "<MEMBER_NAME>"
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I click new member
    And I wait for 5 seconds
    And I enter member name "<MEMBER_NAME>"
    And I wait for 3 seconds
    And I enter member email "<MEMBER_EMAIL>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 5 seconds
    Then I validate the error message "Member already exists. Attempting to add member with existing email address"
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I click leave button
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_NAME>"
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
    Then I validate that the table not contains the name "<MEMBER_NAME>"
    And I wait for 5 seconds

    Examples:
      | URL                                            | EMAIL           | PASSWORD         | MEMBER_NAME | MEMBER_LAST_NAME | MEMBER_EMAIL           | MEMBER_INVALID_EMAIL |
      | https://ghost-rrgn.onrender.com/ghost/#/signin | conan@gmail.com | Automatizadas01* | Hollis      | Nelson           | hnelson1@tuttocitta.it | 9th Floor            |

  @user3 @web
  Scenario Outline: Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera exitosa y lo elimino de manera exitosa
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
    And I enter member name "<MEMBER_NAME>"
    And I wait for 3 seconds
    And I enter member email "<MEMBER_EMAIL>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 5 seconds
    And I validate the label of the new member should be "<MEMBER_NAME>"
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I click first row on table members
    And I wait for 5 seconds
    And I enter member name "<MEMBER_LAST_NAME>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 5 seconds
    Then I validate the label of the new member should be "<MEMBER_LAST_NAME>"
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_LAST_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_LAST_NAME>"
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
    Then I validate that the table not contains the name "<MEMBER_LAST_NAME>"
    And I wait for 5 seconds

    Examples:
      | URL                                            | EMAIL           | PASSWORD         | MEMBER_NAME | MEMBER_LAST_NAME | MEMBER_EMAIL          | MEMBER_INVALID_EMAIL |
      | https://ghost-rrgn.onrender.com/ghost/#/signin | conan@gmail.com | Automatizadas01* | Sanson      | Hindenberger     | shindenberger2@pen.io | PO Box 18037         |


  @user4 @web
  Scenario Outline: Como usuario inicio sesion, creo nuevo miembro de manera exitosa, lo edito de manera fallida y lo elimino de manera exitosa
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
    And I enter member name "<MEMBER_NAME>"
    And I wait for 3 seconds
    And I enter member email "<MEMBER_EMAIL>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 5 seconds
    And I validate the label of the new member should be "<MEMBER_NAME>"
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I click first row on table members
    And I wait for 5 seconds
    When I enter member email "<MEMBER_INVALID_EMAIL>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 3 seconds
    Then I validate the error message "Invalid Email."
    And I wait for 2 seconds
    And I click members back
    And I wait for 5 seconds
    And I click leave button
    And I wait for 5 seconds
    And I fill the filter text field with "<MEMBER_NAME>"
    And I wait for 5 seconds
    And I validate that the table contains the name "<MEMBER_NAME>"
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
    Then I validate that the table not contains the name "<MEMBER_NAME>"
    And I wait for 5 seconds

    Examples:
      | URL                                            | EMAIL           | PASSWORD         | MEMBER_NAME | MEMBER_LAST_NAME | MEMBER_EMAIL          | MEMBER_INVALID_EMAIL |
      | https://ghost-rrgn.onrender.com/ghost/#/signin | conan@gmail.com | Automatizadas01* | Cati        | Ferroli          | cferroli3@youtube.com | Apt 14               |