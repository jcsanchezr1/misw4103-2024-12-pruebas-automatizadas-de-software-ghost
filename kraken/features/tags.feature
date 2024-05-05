Feature: Tags

@user2 @web
Scenario: Creación y visualización de un tag de manera exitosa, visualización en un post creation:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 2 seconds
  When I click tags
  And I wait for 2 seconds
  And I click new tag
  And I wait for 2 seconds
  And I enter tag title "Tag1"
  And I wait for 2 seconds
  And I click Save
  And I wait for 2 seconds
  And I click back to tags
  And I wait for 2 seconds
  And I validate the title of tag "Tag1"
  And I wait for 2 seconds
  And I click back to post
  And I wait for 10 seconds


  
