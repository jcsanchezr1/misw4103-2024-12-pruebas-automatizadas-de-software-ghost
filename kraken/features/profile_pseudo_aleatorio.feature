Feature: Profile Pseudo Aleatorio

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
  When Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click on your profile
  And I wait for 3 seconds
  And Pseudo: I change FullName
  And I wait for 3 seconds
  And Pseudo: I click Save button
  And I wait for 3 seconds
  And Pseudo: I click back on profile
  And I wait for 3 seconds
  Then Pseudo: I validate the name has been changed
  And I wait for 3 seconds

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
  When Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click on your profile    
  And I wait for 3 seconds
  And Pseudo: I enter old password "<PASSWORD>"
  And I wait for 2 seconds
  And Pseudo: I enter the new password low security
  And I wait for 2 seconds
  And Pseudo: I both enter and confirm the new password
  And I wait for 4 seconds
  And Pseudo: I click confirm password
  And I wait for 10 seconds    
  Then Pseudo: I validate the error message password "Sorry, you cannot use an insecure password."
  And I wait for 2 seconds 
  And Pseudo: I click close and save 
  And I wait for 5 seconds  
  And Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And Pseudo: I enter password invalid password
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
  When Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click on your profile
  And I wait for 3 seconds
  And Pseudo: I enter old password "<PASSWORD>"
  And I wait for 2 seconds
  And Pseudo: I enter the new password with only numbers
  And I wait for 2 seconds
  And Pseudo: I both enter and confirm the new password
  And I wait for 4 seconds
  And Pseudo: I click confirm password
  And I wait for 10 seconds
  Then Pseudo: I validate the error message password "Password must be at least 10 characters long."
  And I wait for 2 seconds
  And Pseudo: I click close and save
  And I wait for 5 seconds
  And Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And Pseudo: I enter password invalid password
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
  When Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click on your profile    
  And I wait for 3 seconds
  And Pseudo: I enter old password invalid
  And I wait for 2 seconds
  And Pseudo: I enter the new password
  And I wait for 2 seconds
  And Pseudo: I both enter and confirm the new password
  And I wait for 4 seconds
  And Pseudo: I click confirm password
  And I wait for 10 seconds    
  Then Pseudo: I validate the error message old password alert "Your password is incorrect. Your password is incorrect."
  And I wait for 5 seconds 
  And Pseudo: I click close and save 
  And I wait for 5 seconds  
  And Pseudo: I click profile
  And I wait for 3 seconds
  And Pseudo: I click sign out
  And I wait for 10 seconds
  And I enter email "<EMAIL>"
  And I wait for 1 seconds
  And Pseudo: I enter password password not saved
  And I wait for 1 seconds
  And I click sign in
  And I wait for 3 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click sign in
  And I wait for 15 seconds 
