import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // timeout: 0,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event-details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event-details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-btn");
    const eventDetails = await page.$(".event-details");
    expect(eventDetails).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250,
      // timeout: 0,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });
  afterAll(() => {
    browser.close();
  });

  test("when user hasn't searched for a city, show upcoming events from all cities", async () => {
    const events = await page.$$eval(".event", (e) => e.length);
    expect(events).toBe(32);
  });

  test("user should see a list of suggestions when they search for a city", async () => {
    const suggestions = await page.$(".suggestions");
    await page.click(".city");
    expect(suggestions).toBeDefined();
  });

  test("user can select a city from the suggested list", async () => {
    await page.type(".city", "Berlin");
    const suggestion = await page.$(".suggestion");
    await page.click(".suggestion");
    expect(suggestion).toBeDefined();
  });
});
