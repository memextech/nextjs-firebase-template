const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // For hero image - landing page
  const heroPage = await browser.newPage();
  await heroPage.setViewportSize({ width: 1200, height: 800 });
  await heroPage.goto('https://fullstacktemplate-a3e1c.web.app');
  await heroPage.waitForLoadState('networkidle');
  await heroPage.screenshot({ path: 'public/images/hero-image.png', fullPage: false });
  console.log('Hero image captured');
  
  // For card image - capture a square portion of the landing page that includes more UI elements
  const cardPage = await browser.newPage();
  await cardPage.setViewportSize({ width: 800, height: 800 });
  await cardPage.goto('https://fullstacktemplate-a3e1c.web.app');
  await cardPage.waitForLoadState('networkidle');
  
  // Take a screenshot of a square portion of the page that includes the hero section
  await cardPage.screenshot({ 
    path: 'public/images/card-image.png', 
    clip: { 
      x: 200,  // Start from the center-left
      y: 100,  // Start from the top, but include some of the header
      width: 500, 
      height: 500 
    } 
  });
  console.log('Card image captured');
  
  await browser.close();
  console.log('Screenshots taken successfully!');
})();
