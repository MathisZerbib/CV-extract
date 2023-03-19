// Import dependencies
const express = require("express");
const { createWorker } = require("tesseract.js");

const multer = require("multer");
const nlp = require("fr-compromise");
const path = require("path");
const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require("fs");
// const pdfImage = require("pdf-image").PDFImage;
// var pdf2img = require("pdf-img-convert");
var tokenizer = require("wink-tokenizer");
// Create it's instance.
var myTokenizer = tokenizer();

const winkNer = require("wink-ner");
const winkTokenizer = require("wink-tokenizer");
var trainingData = require("./training_data.json");

const myNER = winkNer();
myNER.learn(trainingData);

const options = {
  normalizeWhitespace: true,
  disableCombineTextItems: false,
  disableTrimSpacesBetweenWords: true,
};

// Initialize Express
const app = express();
const port = 3000; // Or any other port

// Setting up multer middleware to receive images.
const upload = multer({ dest: "uploads/" });

// Initialize results array
let results = [];

// Define a route for image recognition
// Define a route for image recognition
app.post("/recognize", upload.array("files[]"), async (req, res, next) => {
  let files = req.files;
  if (!files || !files.length) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  // Initialize results array
  let results = [];

  // Loop through all uploaded files
  for (let i = 0; i < files.length; i++) {
    if (isPdfMimeType(files[i].mimetype)) {
      const pdfData = fs.readFileSync(files[i].path);
      pdfExtract.extractBuffer(pdfData, {}, async (err, data) => {
        if (err) return console.log(err);
        let text = "";
        if (data.pages.length) {
          data.pages.forEach((page) => {
            page.content.forEach((content) => {
              text += content.str;
            });
          });
        }
        if (text.length > 0) {
          const { name, phone, email, skills, experience, cursus, raw } =
            await processText(text);

          // Create a new instance of wink-tokenizer and use it to tokenize a sentence
          const tokenizer = winkTokenizer();
          const tokens = tokenizer.tokenize(text);

          // Use recognize() to identify entities in the sentence based on the training data
          const entities = myNER.recognize(tokens);

          // Print the resulting array of tokens with entity information added
          // console.log(entities);
          const urls = [];
          const emails = [];
          const tag = trainingData
            .filter((data) => {
              return entities.find((entity) => {
                return (
                  entity.entityType === data.entityType &&
                  entity.value === data.text
                );
              });
            })
            .map((data) => {
              return data.uid;
            });

          const relevantEmail = entities
            .filter((entity) => entity.tag === "email")
            .map((entity) => {
              entity.value;
            });

          const relevantUrl = entities
            .filter((entity) => entity.tag === "url")
            .map((entity) => entity.value);
          // Print the relevant data

          if (relevantEmail.length > 0) {
            relevantUrl.forEach((url) => {
              urls.push(url);
            });
          }
          if (relevantUrl.length > 0) {
            relevantUrl.forEach((url) => {
              urls.push(url);
            });
          }

          results.push({
            name,
            phone,
            email,
            skills,
            experience,
            cursus,
            raw,
            tag,
            urls,
            emails,
          });
        }
        if (results.length === files.length) {
          res.status(200).json(results);
        }
      });
    } else if (isImageMimeType(files[i].mimetype)) {
      const worker = await createWorker({
        logger: (m) => console.log(m),
      });

      await worker.loadLanguage("fra");
      await worker.initialize("fra");

      const {
        data: { text },
      } = await worker.recognize(files[i].path);
      // console.log(text);
      await worker.terminate();

      const { name, phone, email, skills, experience, cursus, raw } =
        await processText(text);
      // Create a new instance of wink-tokenizer and use it to tokenize a sentence
      const tokenizer = winkTokenizer();
      const tokens = tokenizer.tokenize(text);

      // Use recognize() to identify entities in the sentence based on the training data
      const entities = myNER.recognize(tokens);

      // console.log(entities);
      const urls = [];
      const emails = [];
      const tag = trainingData
        .filter((data) => {
          return entities.find((entity) => {
            return (
              entity.entityType === data.entityType &&
              entity.value === data.text
            );
          });
        })
        .map((data) => {
          return data.uid;
        });

      const relevantEmail = entities
        .filter((entity) => entity.tag === "email")
        .map((entity) => {
          entity.value;
        });

      const relevantUrl = entities
        .filter((entity) => entity.tag === "url")
        .map((entity) => entity.value);
      // Print the relevant data

      if (relevantEmail.length > 0) {
        relevantUrl.forEach((url) => {
          emails.push(url);
        });
      }
      if (relevantUrl.length > 0) {
        relevantUrl.forEach((url) => {
          urls.push(url);
        });
      }

      results.push({
        name,
        phone,
        email,
        skills,
        experience,
        cursus,
        raw,
        tag,
        urls,
        emails,
      });

      if (results.length === files.length) {
        res.status(200).json(results);
      }
    }
  }
});
function isPdfMimeType(mimeType) {
  return mimeType === "application/pdf";
}

function isImageMimeType(mimeType) {
  return mimeType === "image/jpeg" || mimeType === "image/png";
}

function extractPhone(text) {
  // Remove all dots and commas from input
  text = text.replace(/[.,]/g, "");
  const regex = /\+?([\d|\(][\h|\(\d{3}\)|\.|\,|\-|\d]{4,}\d)/;
  return text.match(regex);
}

function extractEmail(text) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(regex);
}
function extractName(text) {
  const regex = /^([A-Z][a-z]+\s){2}/g;
  return text.match(regex);
}

function extractSkills(text) {
  const regex = /([A-Z][a-z]+)(?:, )/g;
  return text.match(regex);
}

function extractExperience(text) {
  const regex = /([A-Z][a-z]+)(?:, )/g;
  return text.match(regex);
}

function extractCursus(text) {
  const regex = /([A-Z][a-z]+)(?:, )/g;
  return text.match(regex);
}

// Process extracted text
async function processText(text) {
  let highlight = {};
  // Process text from image
  const doc = nlp(text);
  let str = doc.people();
  console.log("str :", str);
  myTokenizer.tokenize(text);
  // console.log(myTokenizer.tokenize(text));
  highlight = {
    nouns: doc.match("#Noun"),
    name: doc.people(),
    verbs: doc.match("#Verb"),
    adj: doc.match("#Adjective"),
    adv: doc.match("#Adverb"),
    det: doc.match("#Determiner"),
    conj: doc.match("#Conjunction"),
    num: doc.match("#Value"),
    penn: doc.compute("penn"),
    surname: doc.match("#Person"),
  };
  highlight = Object.keys(highlight).reduce((acc, key) => {
    acc[key] = highlight[key].out("array");
    // console.log(key, acc[key]);
    return acc;
  }, {});
  let raw = highlight.penn.map((element) => {
    // Remove unwanted characters
    element = element.replace(/[^\w\s\p{L}]/gu, "");
    // Remove leading/trailing white space
    element = element.trim();
    return element;
  });
  console.log("highlight: ", highlight);

  const name = extractName(text) ?? "No name found";
  const phone = extractPhone(text) ?? "No phone number found";
  const email = extractEmail(text) ?? "No email found";
  const skills = extractSkills(text) ?? "No skills found";
  const experience = extractExperience(text) ?? "No experience found";
  const cursus = extractCursus(text) ?? "No cursus found";

  return { name, phone, email, skills, experience, cursus, raw };
}
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error occurred while processing the image.");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
