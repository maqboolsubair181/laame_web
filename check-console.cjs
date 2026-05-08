const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Listen to console logs
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  console.log("Page loaded. Checking buttons...");
  
  // Try to click the first product card
  try {
    await page.click('.product-card');
    console.log("Clicked product card successfully");
  } catch (e) {
    console.log("Could not click product card:", e.message);
  }

  await browser.close();
})();
