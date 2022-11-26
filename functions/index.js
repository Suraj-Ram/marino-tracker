// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async function (req, res) {
  // Grab the text parameter.
  const original = req.query.text;

  functions.logger.log("Received: ", original);
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin
    .firestore()
    .collection("messages")
    .add({ original: original });
  // Send back a message that we've successfully written the message
  res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

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
  dbEntry["createdAt"] = admin.firestore.Timestamp.now();

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

  return dbEntry;
}

exports.htmlScrape1 = functions.pubsub
  .schedule("every 15 minutes")
  .onRun(async (context) => {
    const dbEntry = await main();

    const writeResult = await admin
      .firestore()
      .collection("scheduled-2")
      .add(dbEntry);

    functions.logger.log("Wrote entry. Id: " + writeResult.id);
  });
