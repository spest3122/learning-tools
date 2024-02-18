import puppeteer from "puppeteer";
import fs from "fs";
import allEarsEnglishCrawler from "./Crawler/allEarsCrawler.js";
import dailyNewsCrawler from "./Crawler/dailyNewsCrawler.js";
import personalMBACrawler from "./Crawler/personalMBACrawler.js";

async function main() {
  try {
    const file = fs.readFileSync("./config.json");
    const parseFile = JSON.parse(file);

    const browser = await puppeteer.launch();
    let allEarsEnglishResult = await allEarsEnglishCrawler(
      browser,
      parseFile["allEarsEnglishSequence"]
    );
    let dailyNewsResult = await dailyNewsCrawler(browser);
    let personalMBAResult = await personalMBACrawler(
      browser,
      parseFile["personalMBASequence"]
    );
    await browser.close();

    parseFile["allEarsEnglishSequence"]++;
    parseFile["personalMBASequence"]++;
    const nowDate = new Date();
    const mm = String(nowDate.getMonth() + 1).padStart(2, "0");
    const dd = String(nowDate.getDate()).padStart(2, "0");
    parseFile["nowDate"] = `${mm}/${dd}`;
    fs.writeFileSync("./config.json", JSON.stringify(parseFile));
    console.log(
      `
${parseFile["nowDate"]}
*Podcast*
${allEarsEnglishResult}
*News*
${dailyNewsResult}
*Books*
${personalMBAResult}
      `
    );
  } catch (error) {
    throw error;
  }
}

main();
