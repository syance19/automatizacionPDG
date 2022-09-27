Feature: Elements on the list of products and their functions


    Background: The user is logged and is on the auction page
        Given The user is logged into BetLeague
        And   The user is on auction page

    # @TABetleague
    Scenario: Elements are displayed, clickeable and available
        Then the products are shown in a list
        And  the dropdown filter has the next options
            | options                    |
            | FiltroPorDefault           |
            | FiltrarPorMasReciente      |
            | FiltrarPorMasAntiguo       |
            | FiltrarDeMayorAMenorPrecio |
            | FiltrarDeMenorAMayorPrecio |

    # @TABetleague
    Scenario: Apply Filters
        When the user type on input filter
        Then the page will show the result
        When the user clicks on clear filter
        Then the page will show the list of all the products

    # @TABetleague
    Scenario: View Detail of product
        When the user clicks on view more detail
        Then the page will show a new page
        And  the info must match from the list
        When the user clicks on back to list
        Then the products are shown in a list

    # @TABetleague
    Scenario:  The categories are presente on the page
        Then the categories are shown in a list
        And  the list has the next options
            | options         |
            | Arte            |
            | Cripto          |
            | Tecnologia      |
            | Antiguedades    |
            | RopaDiseño      |
            | OtrasCategorias |

    # @TABetleague
    Scenario: Other categories are displayed
        When  The user clikcs on other categories
        Then  The page will show a pop-up

    Scenario: See available and next auctions
        When The user clikcs on next auctions
        Then The page will show the product or products
        And  The products will show the date that are open

    Scenario: See available and next auctions
        When The user clikcs on next auctions
        Then The page will show a message for no existing products

    Scenario: See available and next auctions
        When The user clikcs on current actions
        Then The page will show the product or products

