Feature: Posts Pseudo Aleatorio

  @user1 @web
  Scenario: Creación exitosa de un post, visualización del post creado en post list
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When Pseudo: I click post
    And I wait for 6 seconds
    And Pseudo: I click new post
    And I wait for 5 seconds
    And Pseudo: I enter post title
    And I wait for 1 seconds
    And Pseudo: I select the  post description
    And I wait for 1 seconds
    And Pseudo: I enter post description
    And I wait for 3 seconds
    And Pseudo: I click publish post
    And I wait for 7 seconds
    And Pseudo: I click final review post
    And I wait for 7 seconds
    And Pseudo: I click publish post right now
    And I wait for 7 seconds
    And Pseudo: I click back to editor post
    And I wait for 5 seconds
    And Pseudo: I click back to post
    And I wait for 3 seconds
    Then Pseudo: I check the post in the list
    And I wait for 2 seconds


  @user2 @web
  Scenario: Modificación exitosa de un post, visualización del post modificado en post list
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When Pseudo: I click post
    And I wait for 6 seconds
    And Pseudo: I click new post
    And I wait for 5 seconds
    And Pseudo: I enter post title
    And I wait for 1 seconds
    And Pseudo: I select the  post description
    And I wait for 1 seconds
    And Pseudo: I enter post description
    And I wait for 3 seconds
    And Pseudo: I click publish post
    And I wait for 7 seconds
    And Pseudo: I click final review post
    And I wait for 7 seconds
    And Pseudo: I click publish post right now
    And I wait for 7 seconds
    And Pseudo: I click back to editor post
    And I wait for 5 seconds
    And Pseudo: I update the post title
    And I wait for 1 seconds
    And Pseudo: I select the  post description
    And I wait for 1 seconds
    And Pseudo: I update the post description
    And I wait for 3 seconds
    And Pseudo: I click to update the post
    And I wait for 5 seconds
    And Pseudo: I click back to post
    And I wait for 5 seconds
    Then Pseudo: I check the updated post in the list
    And I wait for 2 seconds


  @user3 @web
  Scenario: Eliminaciòn exitosa de un post, visualización del post eliminado en post list
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When Pseudo: I click post
    And I wait for 6 seconds
    And Pseudo: I click new post
    And I wait for 5 seconds
    And Pseudo: I enter post title
    And I wait for 1 seconds
    And Pseudo: I select the  post description
    And I wait for 1 seconds
    And Pseudo: I enter post description
    And I wait for 3 seconds
    And Pseudo: I click publish post
    And I wait for 7 seconds
    And Pseudo: I click final review post
    And I wait for 7 seconds
    And Pseudo: I click publish post right now
    And I wait for 7 seconds
    And Pseudo: I click back to editor post
    And I wait for 5 seconds
    And Pseudo: I click settings of post
    And I wait for 2 seconds
    And Pseudo: I click delete post
    And I wait for 2 seconds
    And Pseudo: I click delete post confirmation
    And I wait for 7 seconds
    Then Pseudo: I check the post is not in the list
    And I wait for 2 seconds


  @user4 @web
  Scenario: Despublicación exitosa de un post, visualización del post en post list
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When Pseudo: I click post
    And I wait for 6 seconds
    And Pseudo: I click new post
    And I wait for 5 seconds
    And Pseudo: I enter post title
    And I wait for 1 seconds
    And Pseudo: I select the  post description
    And I wait for 1 seconds
    And Pseudo: I enter post description
    And I wait for 3 seconds
    And Pseudo: I click publish post
    And I wait for 7 seconds
    And Pseudo: I click final review post
    And I wait for 7 seconds
    And Pseudo: I click publish post right now
    And I wait for 7 seconds
    And Pseudo: I click back to editor post
    And I wait for 7 seconds
    And Pseudo: I click unpublish post
    And I wait for 5 seconds
    And Pseudo: I confirm unpublish post
    And I wait for 5 seconds
    Then Pseudo: I click publish post
    And I wait for 2 seconds


