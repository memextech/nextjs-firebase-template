const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  
  // For card image - create a landscape image from the top of the page
  const cardPage = await browser.newPage();
  await cardPage.setViewportSize({ width: 1200, height: 800 });
  await cardPage.goto('https://fullstacktemplate-a3e1c.web.app');
  await cardPage.waitForLoadState('networkidle');
  
  // Take a screenshot of the top portion of the page in landscape orientation
  await cardPage.screenshot({ 
    path: 'public/images/card-image-landscape.png', 
    clip: { 
      x: 0,
      y: 0,
      width: 800, 
      height: 400 
    } 
  });
  console.log('New landscape card image captured from top of page');
  
  await browser.close();
  console.log('Screenshots taken successfully!');
})();
