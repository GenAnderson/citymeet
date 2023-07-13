import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";

describe("<Event/> component", () => {
  let EventItem;
  beforeEach(() => {
    EventItem = render(<Event event={mockData[0]} />);
  });

  test("render event", () => {
    expect(EventItem.queryByText(mockData[0].summary)).toBeInTheDocument();
  });

  test("render location", () => {
    expect(EventItem.queryByText(mockData[0].location)).toBeInTheDocument();
  });

  test("render start time", () => {
    const date = new Date(mockData[0].created).toLocaleDateString();
    expect(EventItem.container.querySelector(".created").textContent).toBe(
      date
    );
  });

  test("render button", () => {
    expect(EventItem.getByRole("button")).toBeInTheDocument();
  });

  test("by default, event's details should be hidden", () => {
    expect(
      EventItem.container.querySelector(".event-details")
    ).not.toBeInTheDocument();
  });

  test("show and hide the details section when the user clicks on the button (twice)", async () => {
    const button = EventItem.getByRole("button");

    // first click to show details
    userEvent.click(button);
    await waitFor(() => {
      expect(
        EventItem.container.querySelector(".event-details")
      ).toBeInTheDocument();
    });
    expect(EventItem.getByRole("button").textContent).toBe("hide details");

    // second click to hide details
    userEvent.click(button);
    await waitFor(() => {
      expect(
        EventItem.container.querySelector(".event-details")
      ).not.toBeInTheDocument();
    });
    expect(EventItem.getByRole("button").textContent).toBe("show details");
  });
});
