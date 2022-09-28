Feature: Create a product and see on the list

    Background: The user is logged and in the page for create a new product
        Given The user is logged into BetLeague
        When  the user open the dashboard
        When  the user choose a kind of auction
        Then  the page will redirect to a form with the options
            | options     |
            | Nombre      |
            | Categoria   |
            | Descripcion |
            | Valoracion  |
    
    # @TABetleague
    Scenario: The user create a new product
        When  the user fills the entire form and create the product
        Then  the page will show the product in a new page
    
    # @TABetleague
    Scenario: Create an empty product
        When  the user doesn't fills the entire form and create the product
        Then  the page will show an error message of empty product