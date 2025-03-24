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
  
  // For card image - more focused on the header/logo
  const cardPage = await browser.newPage();
  await cardPage.setViewportSize({ width: 600, height: 600 });
  await cardPage.goto('https://fullstacktemplate-a3e1c.web.app');
  await cardPage.waitForLoadState('networkidle');
  // Focus on the header area
  const headerElement = await cardPage.$('header');
  if (headerElement) {
    await headerElement.screenshot({ path: 'public/images/card-image.png' });
    console.log('Card image captured');
  } else {
    console.log('Header element not found');
    // Take a screenshot of the top portion as fallback
    await cardPage.screenshot({ path: 'public/images/card-image.png', clip: { x: 0, y: 0, width: 400, height: 400 } });
    console.log('Card image captured (fallback)');
  }
  
  await browser.close();
  console.log('Screenshots taken successfully!');
})();
