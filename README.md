# Meet App

Users can search for a city and get a list of events hosted in there.

Serverless, PWA using React and a TDD approach

### FEATURE 1: FILTER EVENTS BY CITY

**_User Story: As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city._**

**Scenario 1**: When user hasn’t searched for a city, show upcoming events from all cities.
**Given** user hasn't searched for any city
**When** the user opens the app
**Then** the user should see a list of all upcoming events

**Scenario 2**: User should see a list of suggestions when they search for a city.
**Given** the main page is open
**When** user starts typing in the city textbox
**Then** the user should see a list of cities (suggestions) that match what they've typed

**Scenario 3**: User can select a city from the suggested list.
**Given** the user was typing "Berlin" in the city textbox
**When** the user selects a city (like Berlin or Germany) from the list
**Then** their city should be changed to that city (say Berlin or Germany) and the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

**_User Story: As a user, I should be able to show/hide event details, so that I can see more information of events I'm interested in._**

**Scenario 1**: An event element is collapsed by default
**Given** the user entered a city name
**When** the results appear
**Then** the event element does not show it's details by default

**Scenario 2**: User can expand an event to see its details
**Given** the user entered a city name
**When** the user selects an event from the results
**Then** the event will expand to show its details

**Scenario 3**: User can collapse an event to hide its details
**Given** the user has selected an event from the results list
**When** the user clicks on the event again
**Then** the event will collapse and hide its details

### FEATURE 3: SPECIFY NUMBER OF EVENTS

**_User Story: As a user, I should be able to specify the number of events shown, so that I can control how many events I see._**

**Scenario 1**: When user hasn’t specified a number, 32 is the default number
**Given** no number was specified
**When** the user searches a city
**Then** 32 events will be listed at a time

**Scenario 2**: User can change the number of events they want to see
**Given** user enters a number
**When** the user searches a city
**Then** events will list by the number they specified

### FEATURE 4: USE THE APP WHEN OFFLINE

**_User Story: As a user, I should be able to use the app offline, so that I still have access to view events when I don't have an internet connection._**

**Scenario 1**: Show cached data when there’s no internet connection
**Given** the user has no internet connection
**When** they open the app
**Then** they will still have access to the cached data

**Scenario 2**: Show error when user changes the settings (city, time range)
**Given** the user changed their app's settings
**When** the user next accesses the app
**Then** an error will appear

### FEATURE 5: DATA VISUALIZATION

**_User Story: As a user, I should be able see a chart of upcoming events in each city, so I get to see the app in data perspective._**

**Scenario 1**: Show a chart with the number of upcoming events in each city
**Given** the user is on the main page with no selected city
**When** the user wants to see the number of events between cities
**Then** they should be able to see a chart with that information
