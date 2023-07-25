Feature: Show or hide an events details
  Scenario: An event element is collapsed by default
    Given the user entered a city name
    When the results appear
    Then the event element does not show it's details by default

  Scenario: User can expand an event to see its details
    Given the user entered a city name
    When the user selects an event from the results
    Then the event will expand to show its details

  Scenario: User can collapse an event to hide its details
    Given the user has selected an event from the list
    When the user clicks on the event again
    Then the event will collapse and hide its details