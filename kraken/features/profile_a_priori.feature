Feature: Profile

@user1 @web
Scenario: Cambiar nombre de manera éxitosa
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 35 seconds
  When I click profile
  And I wait for 3 seconds
  And I click on your profile
  And I wait for 3 seconds
  And I change FullName "<FULL_NAME>"
  And I wait for 3 seconds
  And I click Save button
  And I wait for 3 seconds
  And I click back on profile
  And I wait for 3 seconds
  Then I validate the name has been changed "<FULL_NAME>"
  And I wait for 3 seconds

Examples:
    | URL                                                | EMAIL            | PASSWORD          | FULL_NAME       | INVALID_PASSWORD     | PASSWORD_NUMBER | DIFERENT_PASSWORD |
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Delly           | password123          | 3468134312      |pO7&A!8K\)zUD#i |


@user2 @web
Scenario: Cambiar password de forma fallida por error insecure
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
  And I enter old password "<PASSWORD>"
  And I wait for 2 seconds
  And I enter the new password "<INVALID_PASSWORD>"
  And I wait for 2 seconds
  And I both enter and confirm the new password "<INVALID_PASSWORD>"
  And I wait for 4 seconds
  And I click confirm password
  And I wait for 10 seconds    
  Then I validate the error message password "Sorry, you cannot use an insecure password."
  And I wait for 2 seconds 
  And I click close and save 
  And I wait for 5 seconds  
  And I click profile
  And I wait for 3 seconds
  And I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<INVALID_PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds

Examples:
    | URL                                                | EMAIL            | PASSWORD          | FULL_NAME       | INVALID_PASSWORD     | PASSWORD_NUMBER | DIFERENT_PASSWORD |
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Chris           | password123          | 9733824240      |hC08VB*7 |

@user4 @web
Scenario: Cambiar password de forma fallida por error old password incorrecto
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
  And I enter old password "<INVALID_PASSWORD>"
  And I wait for 2 seconds
  And I enter the new password "<DIFERENT_PASSWORD>"
  And I wait for 2 seconds
  And I both enter and confirm the new password "<DIFERENT_PASSWORD>"
  And I wait for 4 seconds
  And I click confirm password
  And I wait for 10 seconds    
  Then I validate the error message old password alert "Your password is incorrect. Your password is incorrect."
  And I wait for 5 seconds 
  And I click close and save 
  And I wait for 5 seconds  
  And I click profile
  And I wait for 3 seconds
  And I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "<INVALID_PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds 

Examples:
    | URL                                                | EMAIL            | PASSWORD          | FULL_NAME       | INVALID_PASSWORD     | PASSWORD_NUMBER | DIFERENT_PASSWORD |
    | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Chris           | password123          | 0890995222      |jzN0@jj9YE\68y |     


