const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // For card image - create a more visually appealing square image
  const cardPage = await browser.newPage();
  await cardPage.setViewportSize({ width: 1200, height: 1200 });
  await cardPage.goto('https://fullstacktemplate-a3e1c.web.app');
  await cardPage.waitForLoadState('networkidle');
  
  // Take a screenshot of the features section which should be more visually interesting
  await cardPage.evaluate(() => {
    window.scrollTo(0, 400); // Scroll down to the features section
  });
  
  await cardPage.waitForTimeout(500); // Wait for scroll to complete
  
  // Take a screenshot of a square portion that includes features
  await cardPage.screenshot({ 
    path: 'public/images/card-image-new.png', 
    clip: { 
      x: 300,
      y: 200,
      width: 600, 
      height: 600 
    } 
  });
  console.log('New card image captured');
  
  await browser.close();
  console.log('Screenshots taken successfully!');
})();
