Feature: Google search

    Scenario: Search Google with cucumber testing keyword
        Given I visit Google
        When I search for "cucumber testing" keyword
        And I click on the first link in search result
        Then the "https://cucumber.io/" page is opened