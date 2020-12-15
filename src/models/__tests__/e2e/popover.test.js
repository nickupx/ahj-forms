import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 25,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('should render', async () => {
    await page.goto(baseUrl);
    await page.evaluate(() => {
      const button = document.querySelector('#button');
      button.click();
    });
    await page.waitForSelector('#popover');
  });
});