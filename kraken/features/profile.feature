Feature: Profile

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
  And I enter the new password "password1234"
  And I wait for 2 seconds
  And I both enter and confirm the new password "password1234"
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
  And I enter password "password1234"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds

@user3 @web
Scenario: Cambiar password de forma fallida por error de longitud en la nueva contraseña
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
  And I enter old password "<PASSWORD>"
  And I wait for 2 seconds
  And I enter the new password "123456789"
  And I wait for 2 seconds
  And I both enter and confirm the new password "123456789"
  And I wait for 4 seconds
  And I click confirm password
  And I wait for 10 seconds
  Then I validate the error message password "Password must be at least 10 characters long."
  And I wait for 2 seconds
  And I click close and save
  And I wait for 5 seconds
  And I click profile
  And I wait for 3 seconds
  And I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And I enter password "123456789"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds

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
  And I enter old password "OldPswInvalido"
  And I wait for 2 seconds
  And I enter the new password "EstoEsUnPswValido!"
  And I wait for 2 seconds
  And I both enter and confirm the new password "EstoEsUnPswValido!"
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
  And I enter password "OldPswInvalido"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds

