Feature: Posts


  @user1 @web

  Scenario: Creación exitosa de un post, visualización del post creado en post list:
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When I click post
    And I wait for 6 seconds
    And I click new post
    And I wait for 5 seconds
    And I enter post title "Post1"
    And I wait for 1 seconds
    And I select the  post description
    And I wait for 1 seconds
    And I enter post description "Description Post 1"
    And I wait for 3 seconds
    And I click publish post
    And I wait for 7 seconds
    And I click final review post
    And I wait for 7 seconds
    And I click publish post right now
    And I wait for 7 seconds
    And I click back to editor post
    And I wait for 5 seconds
    And I click back to post
    And I wait for 3 seconds
    Then I check the post in the list "Post1"

  @user2 @web

  Scenario: Modificación exitosa de un post, visualización del post modificado en post list:
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When I click post
    And I wait for 6 seconds
    And I click new post
    And I wait for 5 seconds
    And I enter post title "Post2"
    And I wait for 1 seconds
    And I select the  post description
    And I wait for 1 seconds
    And I enter post description "Description Post 2"
    And I wait for 3 seconds
    And I click publish post
    And I wait for 5 seconds
    And I click final review post
    And I wait for 7 seconds
    And I click publish post right now
    And I wait for 7 seconds
    And I click back to editor post
    And I wait for 5 seconds
    And I enter post title "Post3"
    And I wait for 1 seconds
    And I select the  post description
    And I wait for 1 seconds
    And I enter post description " Updated"
    And I wait for 3 seconds
    And I click to update the post
    And I wait for 5 seconds
    And I click back to post
    And I wait for 3 seconds
    Then I check the post in the list "Post3"

  @user3 @web
  Scenario: Eliminaciòn exitosa de un post, visualización del post eliminado en post list:
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When I click post
    And I wait for 6 seconds
    And I click new post
    And I wait for 5 seconds
    And I enter post title "Post"
    And I wait for 1 seconds
    And I select the  post description
    And I wait for 1 seconds
    And I enter post description "Description Post"
    And I wait for 3 seconds
    And I click publish post
    And I wait for 5 seconds
    And I click final review post
    And I wait for 7 seconds
    And I click publish post right now
    And I wait for 7 seconds
    And I click back to editor post
    And I wait for 5 seconds
    And I click settings of post
    And I click delete post
    And I click delete post confirmation
    And I wait for 7 seconds
    Then I check the post is not in the list "Post"


  @user4 @web

  Scenario: Despublicación exitosa de un post, visualización del post en post list:
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When I click post
    And I wait for 6 seconds
    And I click new post
    And I wait for 5 seconds
    And I enter post title "Post5"
    And I wait for 1 seconds
    And I select the  post description
    And I wait for 1 seconds
    And I enter post description "Description Post 5"
    And I wait for 3 seconds
    And I click publish post
    And I wait for 7 seconds
    And I click final review post
    And I wait for 7 seconds
    And I click publish post right now
    And I wait for 7 seconds
    And I click back to editor post
    And I wait for 7 seconds
    And I click unpublish post
    And I wait for 5 seconds
    And I confirm unpublish post
    And I wait for 5 seconds
    Then I click publish post

