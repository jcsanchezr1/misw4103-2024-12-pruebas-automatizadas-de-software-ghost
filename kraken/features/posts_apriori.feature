Feature: Posts A priori

  @user1 @web
  Scenario Outline: Creación exitosa de un post, visualización del post creado en post list
    Given I navigate to page "<URL>"
    And I wait
    And I enter email "<EMAIL>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click sign in
    And I wait for 5 seconds
    When A priori:  I click post
    And I wait for 6 seconds
    And A priori:  I click new post
    And I wait for 5 seconds
    And A priori:  I enter post title "<POST_NAME>"
    And I wait for 1 seconds
    And A priori:  I select the  post description
    And I wait for 1 seconds
    And A priori:  I enter post description "<POST_DESCRIPTION>"
    And I wait for 3 seconds
    And A priori:  I click publish post
    And I wait for 7 seconds
    And A priori:  I click final review post
    And I wait for 7 seconds
    And A priori:  I click publish post right now
    And I wait for 7 seconds
    And A priori:  I click back to editor post
    And I wait for 5 seconds
    And A priori:  I click back to post
    And I wait for 3 seconds
    Then A priori:  I check the post in the list "<POST_NAME>"
    And I wait for 2 seconds

    Examples:
      | URL                                                | EMAIL            | PASSWORD          | POST_NAME       | POST_DESCRIPTION     |
      | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Allergy Composition   | Unspecified blood type,Metformin Hydrochloride |


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
    When A priori:  I click post
    And I wait for 6 seconds
    And A priori:  I click new post
    And I wait for 5 seconds
    And A priori:  I enter post title "<POST_NAME>"
    And I wait for 1 seconds
    And A priori:  I select the  post description
    And I wait for 1 seconds
    And A priori:  I enter post description "<POST_DESCRIPTION>"
    And I wait for 3 seconds
    And A priori:  I click publish post
    And I wait for 7 seconds
    And A priori:  I click final review post
    And I wait for 7 seconds
    And A priori:  I click publish post right now
    And I wait for 7 seconds
    And A priori:  I click back to editor post
    And I wait for 5 seconds
    And A priori:  I enter post title "<NEW_POST_NAME>"
    And I wait for 1 seconds
    And A priori:  I select the  post description
    And I wait for 1 seconds
    And A priori:  I enter post description "<NEW_POST_DESCRIPTION>"
    And I wait for 3 seconds
    And A priori:  I click to update the post
    And I wait for 5 seconds
    And A priori:  I click back to post
    And I wait for 5 seconds
    Then A priori:  I check the post in the list "<NEW_POST_NAME>"
    And I wait for 2 seconds

    Examples:
      | URL                                                | EMAIL            | PASSWORD          | POST_NAME       | POST_DESCRIPTION     | NEW_POST_NAME  | NEW_POST_DESCRIPTION  |
      | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | LIVESTS Moist Liquid  | Nondisp unsp fracture of left great toe, init for opn fx | SUDDEN NAUSEA | Superficial frostbite of unspecified ear  |


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
    When A priori:  I click post
    And I wait for 6 seconds
    And A priori:  I click new post
    And I wait for 5 seconds
    And A priori:  I enter post title "<POST_NAME>"
    And I wait for 1 seconds
    And A priori:  I select the  post description
    And I wait for 1 seconds
    And A priori:  I enter post description "<POST_DESCRIPTION>"
    And I wait for 3 seconds
    And A priori:  I click publish post
    And I wait for 7 seconds
    And A priori:  I click final review post
    And I wait for 7 seconds
    And A priori:  I click publish post right now
    And I wait for 7 seconds
    And A priori:  I click back to editor post
    And I wait for 5 seconds
    And A priori:  I click settings of post
    And I wait for 2 seconds
    And A priori:  I click delete post
    And I wait for 2 seconds
    And A priori:  I click delete post confirmation
    And I wait for 7 seconds
    Then A priori:  I check the post is not in the list "<POST_NAME>"
    And I wait for 2 seconds

    Examples:
      | URL                                                | EMAIL            | PASSWORD          | POST_NAME       | POST_DESCRIPTION     |
      | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Omeprazole   | Contusion of unspecified intra-abdominal organ |



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
    When A priori:  I click post
    And I wait for 6 seconds
    And A priori:  I click new post
    And I wait for 5 seconds
    And A priori:  I enter post title "<POST_NAME>"
    And I wait for 1 seconds
    And A priori:  I select the  post description
    And I wait for 1 seconds
    And A priori:  I enter post description "<POST_DESCRIPTION>"
    And I wait for 3 seconds
    And A priori:  I click publish post
    And I wait for 7 seconds
    And A priori:  I click final review post
    And I wait for 7 seconds
    And A priori:  I click publish post right now
    And I wait for 7 seconds
    And A priori:  I click back to editor post
    And I wait for 7 seconds
    And A priori:  I click unpublish post
    And I wait for 5 seconds
    And A priori:  I confirm unpublish post
    And I wait for 5 seconds
    Then A priori:  I click publish post
    And I wait for 2 seconds

    Examples:
      | URL                                                | EMAIL            | PASSWORD          | POST_NAME       | POST_DESCRIPTION     |
      | https://ghost-rrgn.onrender.com/ghost/#/signin     | conan@gmail.com  | Automatizadas01*  | Lisinopril   | Displ longitud fx l patella, subs for clos fx w delay heal |

