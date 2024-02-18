export default async function personalMBACrawler(browser, elNumber) {
  console.log("---------------");
  console.log("start The Personal MBA Crawler");
  const page = await browser.newPage();
  await page.goto("https://personalmba.com/working-with-yourself/", {
    waitUntil: "domcontentloaded",
  });
  console.log("Go to The Personal MBA website");
  const searchResultSelector = `#term-list ul li:nth-child(${elNumber}) a`;
  await page.click(searchResultSelector);
  console.log("click the link");
  let url = page.url();
  console.log(
    `get the url ${url} and return the url, close The Personal MBA Crawler`
  );
  console.log("---------------");
  return url;
}
