import { loadFeature, defineFeature } from "jest-cucumber";
import { within, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given("main page is open", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when("no number entered", () => {});

    then("32 events will be listed by default", () => {
      const numberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      expect(within(numberOfEventsDOM).queryByRole("textbox").value).toBe("32");
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    given("main page is open", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    let numberOfEventsDOM;
    let valueTextBox;
    when("user enters a number", async () => {
      const user = userEvent.setup();
      numberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      valueTextBox = within(numberOfEventsDOM).queryByRole("textbox");

      await user.type(valueTextBox, "{backspace}{backspace}10");
      expect(valueTextBox.value).toBe("10");
    });

    then("events will list by the number they specified", async () => {
      const EventsListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const eventItems = within(EventsListDOM).queryAllByRole("listitem");
        expect(eventItems.length).toBe(10);
      });
    });
  });
});
