Feature: Elements on User Profile

    Background: The user logged
        Given The user is logged into BetLeague

    # @TABetleague
    Scenario: The elements are displayed
        Then  The user should see the navbar with the options
            | options  |
            | BLOG     |
            | VIDEOS   |
            | SUBASTAS |
            | PERFIL   |
        And   The elipsis with logout option
        And   a modal with a button and profile photo loader

    # @TABetleague
    Scenario: The user modifies his personal data on the page
        When  the user open the dashboard on modify data
        Then  the page will show a form with the next options
            | options            |
            | Nombre             |
            | Apellido           |
            | Cedula             |
            | Telefono           |
            | Correo             |
            | Contraseña         |
            | Repetir Contrasena |
        When the user fill the information
        Then the page will redirect to the user profile