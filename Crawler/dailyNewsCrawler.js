export default async function dailyNewsCrawler(browser) {
  console.log("---------------");
  console.log("start daily news Crawler");
  const page = await browser.newPage({ headless: false });
  await page.goto("https://engoo.com/app/daily-news");
  console.log("Go to daily news website");
  await page.setViewport({ width: 1280, height: 1024 });
  console.log("set wide viewport 1280x1024");
  const searchResultSelector = "main div div div a";

  await page.waitForSelector(searchResultSelector);
  await new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 3000);
  });
  console.log("wait for the dom element create");
  await page.click(searchResultSelector);
  console.log("click the link");
  let url = page.url();
  console.log(
    `get the url ${url} and return the url, close daily news Crawler`
  );
  console.log("---------------");
  return url;
}
