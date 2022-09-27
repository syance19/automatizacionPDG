Feature: Admin actions and permissions


    Background: The user is logged as an admin
        Given The user is on the login page
        When The user login with username and password from admin

    # @TABetleague
    Scenario: The admin create a new category
        When the admin opens the dashboard on create category option
        Then the page will show a table with the categories
        When the admin clicks on new category botton
        Then the page will show a form for create a new category
        When the user types the category and create
        And the category is on the table

    # @TABetleague
    Scenario: Create a empty categroy
        When the admin opens the dashboard on create category option
        Then the page will show a table with the categories
        When the admin clicks on new category botton
        Then the page will show a form for create a new category
        When the user types an empty  category and create
        Then the page shows an error