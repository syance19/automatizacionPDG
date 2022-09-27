Feature: Payment

    Background: The user is logged
        Given The user is logged into BetLeague


    # @TABetleague
    Scenario: The page show an error if the user dont have payment saved
        When the user open the payment list page
        Then the page will show an error message
        When the user close the pop-up with the error
        Then the page will show an empty table

    # @TABetleague
    Scenario: The user creates a new payment method
        When the user open the payment create page
        Then the page will show a new page with a card
        When the user clicks on plus icon
        Then the page will show a form for create a payment method
        When the user fills the entire form 