export default async function allEarsEnglishCrawler(browser, elNumber) {
  console.log("---------------");
  console.log("start All Ears English Crawler");
  const page = await browser.newPage();
  await page.goto("https://www.allearsenglish.com/episode-archive/");
  console.log("Go to all ears english episode archive website");
  const searchResultSelector = `.custom-archive-list li:nth-child(${elNumber}) a`;
  await page.waitForSelector(searchResultSelector);
  console.log("wait for the dom element create");
  await page.click(searchResultSelector);
  console.log("click the link");
  let url = page.url();
  console.log(
    `get the url ${url} and return the url, close allEars English Crawler`
  );
  console.log("---------------");
  return url;
}
