const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const config = require('./config');

const url = 'https://www.curseforge.com/wow/addons/' + config.addonsList[0];

puppeteer.use(StealthPlugin());

puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.title();
  console.log(title);

  await browser.close();
});
