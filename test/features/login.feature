Feature: Login flow into BetLeague
  # @TABetleague
  Scenario: The user can logged if have a existing account
    Given The user is on the login page
    When The user login with username and password
    Then The user should see a modal with the username

  # @TABetleague
  Scenario: The user can not login if don't have a exisiting account
    Given The user is on the login page
    When The user login with incorrect username and password
    Then the page will show an error message for user not found

  # @TABetleague
  Scenario: The user can logged if have an admin user
    Given The user is on the login page
    When The user login with username and password from admin
    Then The user should see a modal with the username
    When the admin opens the dashboard
    And  The admin will see the next options to perform
      | options       |
      | Inicio        |
      | VerUsuarios   |
      | VerSubastas   |
      | VerCategorias |

  # @TABetleague
  Scenario: The user register then the admin delete his user
    Given The user is on the login page
    When  The new user register on the page
    And   confirms the register
    Then The user should see a modal with the username
    When The user logout from the page
    Then The page will show the landing page
    When The user login with username and password from admin
    And  open the dashboard for managment user
    Then The page will show a table with all the users in the system
    When  delete the user that just registered
    And  The user logout from the page
    And The user login with delete username and password
    # Then the page will show an error message for user not found