const fetch = require("node-fetch");
const cheerio = require("cheerio");

const labels = [
  "marino_2nd_floor",
  "marino_gym",
  "marino_3rd_floor_weight",
  "marino_3rd_floor_cardio",
  "marino_track",
  "squash_4th_floor",
];

async function main() {
  const DATA_URL =
    "https://connect2concepts.com/connect2/?type=circle&key=2A2BE0D8-DF10-4A48-BEDD-B3BC0CD628E7";
  const siteContent = await fetch(DATA_URL);
  const htmlText = await siteContent.text();
  const $ = cheerio.load(htmlText);

  let dbEntry = {};
  dbEntry["createdAt"] = Date.now();

  $(".col-md-3.col-sm-6").each((labelIdx, element) => {
    const divEl = $(element).html();
    const divEl$ = cheerio.load(divEl);
    let percentage, lastCount, lastUpdated;

    divEl$("div").each((idx, element) => {
      if (idx == 0) {
        // Get percentage
        percentage = $(element).attr("data-percent");
      } else if (idx == 1) {
        // Get title
        const rawText = $(element).text();
        const lastCountUpdated = rawText.split("Last Count: ")[1];
        lastCount = lastCountUpdated.split("Updated: ")[0];
        lastUpdated = lastCountUpdated.split("Updated: ")[1];
      }
      dbEntry[labels[labelIdx]] = { lastCount, percentage, lastUpdated };
    });
  });

  console.table(dbEntry);
}

main();
