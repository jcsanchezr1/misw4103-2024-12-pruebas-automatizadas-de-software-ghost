Feature: Tags_aleatorio


@user1 @web
Scenario: Creación y visualización de un tag de manera exitosa, visualización en un post creation
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 5 seconds
  When Aleatorio: I click tags
  And I wait for 5 seconds
  And Aleatorio: I click new tag
  And I wait for 2 seconds
  And Aleatorio: I enter tag title
  And I wait for 2 seconds
  And Aleatorio: I click Save
  And I wait for 2 seconds
  And Aleatorio: I click back to tags
  And I wait for 2 seconds
  And Aleatorio: I validate the title of the tag
  And I wait for 2 seconds
  When I click post
  And I wait for 3 seconds
  And I click new post
  And I wait for 5 seconds
  And I click settings of post
  And I wait for 5 seconds
  And Aleatorio: I enter the tag in the settings of post
  And I wait for 5 seconds
  And Aleatorio: I validate if the tag is in the post creation
  And I wait for 3 seconds
  And I click back to post
  And I wait for 3 seconds
  When Aleatorio: I click tags
  And I wait for 10 seconds
  And Aleatorio: I select tag
  And I wait for 2 seconds
  And Aleatorio: I click delete tag
  And I wait for 3 seconds
  And Aleatorio: I click delete confirmation tag
  And I wait for 3 seconds

@user2 @web
Scenario: Creación y visualización de un tag de manera exitosa, visualización en un pages creation
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 15 seconds
  When Aleatorio: I click tags
  And I wait for 15 seconds
  And Aleatorio: I click new tag
  And I wait for 2 seconds
  And Aleatorio: I enter tag title
  And I wait for 2 seconds
  And Aleatorio: I click Save
  And I wait for 2 seconds
  And Aleatorio: I click back to tags
  And I wait for 2 seconds
  And Aleatorio: I validate the title of the tag
  And I wait for 2 seconds
  When I click pages
  And I wait for 5 seconds
  And I click new page
  And I wait for 3 seconds
  And I click page settings
  And I wait for 3 seconds
  And Aleatorio: I enter tag in the settings of pages
  And I wait for 5 seconds
  And Aleatorio: I validate if the tag is in the page creation
  And I wait for 3 seconds
  And I click back to pages
  And I wait for 3 seconds
  When Aleatorio: I click tags
  And I wait for 10 seconds
  And Aleatorio: I select tag
  And I wait for 2 seconds
  And Aleatorio: I click delete tag
  And I wait for 3 seconds
  And Aleatorio: I click delete confirmation tag
  And I wait for 3 seconds

@user3 @web
Scenario: Edición y visualización de un tag de manera exitosa, visualización en un post creation
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 30 seconds
  When Aleatorio: I click tags
  And I wait for 10 seconds
  And Aleatorio: I click new tag
  And I wait for 2 seconds
  And Aleatorio: I enter tag title
  And I wait for 2 seconds
  And Aleatorio: I click Save
  And I wait for 2 seconds
  And Aleatorio: I click back to tags
  And I wait for 2 seconds
  And Aleatorio: I validate the title of the tag
  And I wait for 2 seconds
  And Aleatorio: I select tag
  And I wait for 5 seconds
  And Aleatorio: I modify the name and slug of the tag
  And I wait for 3 seconds
  And Aleatorio: I click Save
  And I wait for 2 seconds
  And Aleatorio: I click back to tags
  And I wait for 2 seconds
  And Aleatorio: I validate the title of the edited tag
  And I wait for 2 seconds
  When I click post
  And I wait for 3 seconds
  And I click new post
  And I wait for 2 seconds
  And I click settings of post
  And I wait for 3 seconds
  And Aleatorio: I enter the edited tag in the settings of post
  And I wait for 2 seconds
  And Aleatorio: I validate if the edited tag is in the post creation
  And I wait for 3 seconds
  And I click back to post
  And I wait for 3 seconds
  When Aleatorio: I click tags
  And I wait for 10 seconds
  And Aleatorio: I select tag to edit
  And I wait for 2 seconds
  And Aleatorio: I click delete tag
  And I wait for 3 seconds
  And Aleatorio: I click delete confirmation tag
  And I wait for 3 seconds

   @user4 @web
Scenario: Eliminación y no visualización de un tag de manera exitosa
  Given I navigate to page "<URL>"
  And I wait
  And I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click sign in
  And I wait for 50 seconds
  When Aleatorio: I click tags
  And I wait for 30 seconds
  And Aleatorio: I click new tag
  And I wait for 2 seconds
  And Aleatorio: I enter tag title
  And I wait for 2 seconds
  And Aleatorio: I click Save
  And I wait for 2 seconds
  And Aleatorio: I click back to tags
  And I wait for 2 seconds
  And Aleatorio: I validate the title of the tag
  And I wait for 2 seconds
  And Aleatorio: I select tag
  And I wait for 2 seconds
  And Aleatorio: I click delete tag
  And I wait for 3 seconds
  And Aleatorio: I click delete confirmation tag
  And I wait for 3 seconds
  Then Aleatorio: I validate the title of the tag does not exist
  And I wait for 3 seconds