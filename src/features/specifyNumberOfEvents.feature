Feature: Specify number of events
  Scenario: When user hasn’t specified a number, 32 is the default number
    Given main page is open
    When no number entered
    Then 32 events will be listed by default

  Scenario: User can change the number of events they want to see
    Given main page is open
    When user enters a number
    Then events will list by the number they specified