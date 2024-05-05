Feature: Tags


@user1 @web
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
  When I click post
  And I wait for 3 seconds
  And I click new post
  And I wait for 5 seconds
  And I click settings of post
  And I wait for 3 seconds
  And I enter tag "Tag1" in the settings of post
  And I wait for 5 seconds
  And I validate if the tag "Tag1" is in the post creation
  And I wait for 3 seconds

@user2 @web
Scenario: Creación y visualización de un tag de manera exitosa, visualización en un pages creation:
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
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 3 seconds
  And I click page settings
  And I wait for 3 seconds
  And I enter tag "Tag1" in the settings of pages
  And I wait for 5 seconds
  And I validate if the tag "Tag1" is in the page creation
  And I wait for 3 seconds

@user3 @web
Scenario: Edición y visualización de un tag de manera exitosa, visualización en un post creation:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 30 seconds
  When I click tags
  And I wait for 2 seconds
  And I select tag to edit "Tag1"   
  And I wait for 2 seconds
  And I wait for 3 seconds
  And I modify the name and slug of the tag to "Tag2"
  And I wait for 3 seconds
  And I click Save
  And I wait for 2 seconds
  And I click back to tags
  And I wait for 2 seconds
  And I validate the title of tag "Tag2"
  And I wait for 2 seconds
  When I click post
  And I wait for 3 seconds
  And I click new post
  And I wait for 2 seconds
  And I click settings of post
  And I wait for 3 seconds
  And I enter tag "Tag2" in the settings of post
  And I wait for 2 seconds
  And I validate if the tag "Tag2" is in the post creation
  And I wait for 2 seconds

@user4 @web
Scenario: Eliminación y no visualización de un tag de manera exitosa:
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 50 seconds
  When I click tags
  And I wait for 2 seconds
  And I select tag to edit "Tag2"   
  And I wait for 2 seconds
  And I click delete tag
  And I wait for 3 seconds
  And I click delete confirmation tag
  And I wait for 3 seconds
  Then I validate the title of the tag does not exist "Tag2"

  
