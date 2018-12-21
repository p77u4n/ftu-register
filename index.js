import puppeteer from 'puppeter';

const url =  "http://tinchi2.ftu.edu.vn";

puppeteer.launch().then(async browser => {
  console.log('auto register credits begin');
  const page = await browser.newPage();      
  await loadPage(page, url);
});

const loadPage = async (page, url) => {
  try {
    page.once("load", () => console.log(`${url} page loaded OK`));
    await page.goto(url, { timeout: 0 });
    
  } catch (err) {
    throw err;
  }
};








