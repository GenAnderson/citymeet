import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });

  test('has an element with "texbox" role', () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test("input field default value is 32", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox").value).toBe("32");
  });

  test("value in NumberOfEvents changes to what user inputs", async () => {
    const valueTextBox = NumberOfEventsComponent.queryByRole("textbox");
    await userEvent.type(valueTextBox, "{backspace}{backspace}10");
    expect(NumberOfEventsComponent.queryByRole("textbox").value).toBe("10");
  });
});
