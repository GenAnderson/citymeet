import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    let citySearchInput;

    given("the user entered a city name", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      citySearchInput = AppDOM.querySelector("#city-search");
      await userEvent.type(citySearchInput, "Berlin");
    });

    when("the results appear", async () => {
      const resultsList = within(citySearchInput).queryAllByRole("listitem");
      await userEvent.click(resultsList[0]);
    });

    then("the event element does not show it's details by default", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = AppDOM.querySelector("#event-list");
      const event = eventList.querySelectorAll(".event");
      const eventDetails = event[0].querySelector(".event-details");

      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let citySearchInput;

    given("the user entered a city name", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      citySearchInput = AppDOM.querySelector("#city-search");

      await userEvent.type(citySearchInput, "Berlin");
    });

    when("the user selects an event from the results", async () => {
      const resultsList = within(citySearchInput).queryAllByRole("listitem");
      await userEvent.click(resultsList[0]);
    });

    then("the event will expand to show its details", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = AppDOM.querySelector("#event-list");
      const event = eventList.querySelectorAll(".event");
      const button = event[0].querySelector(".details-btn");

      await userEvent.click(button);

      await waitFor(() => {
        expect(event[0].querySelector(".event-details")).toBeInTheDocument();
      });
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;

    given("the user has selected an event from the results list", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      const citySearchInput = AppDOM.querySelector("#city-search");
      await userEvent.type(citySearchInput, "Berlin");

      const resultsList = within(citySearchInput).queryAllByRole("listitem");
      await userEvent.click(resultsList[0]);

      const eventList = AppDOM.querySelector("#event-list");
      const event = eventList.querySelectorAll(".event");
      button = event[0].querySelector(".details-btn");

      await userEvent.click(button);
    });

    when("the user clicks on the event again", async () => {
      await userEvent.click(button);
    });

    then("the event will collapse and hide its details", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = AppDOM.querySelector("#event-list");
      const event = eventList.querySelectorAll(".event");

      await waitFor(() => {
        expect(
          event[0].querySelector(".event-details")
        ).not.toBeInTheDocument();
      });
    });
  });
});
