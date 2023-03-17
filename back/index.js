// Import dependencies
const express = require("express");
const Tesseract = require("tesseract.js");
const multer = require("multer");
const nlp = require("fr-compromise");
const path = require("path");
const PDFImage = require("pdf-image").PDFImage;

// Initialize Express
const app = express();
const port = 3000; // Or any other port

// Setting up multer middleware to receive images.
const upload = multer({ dest: "uploads/" });

// Initialize results array
let results = [];

// Define a route for image recognition
app.post("/recognize", upload.array("files[]"), async (req, res, next) => {
  try {
    let files = req.files;
    if (!files || !files.length)
      return res.status(400).json({ message: "No files were uploaded." });

    // Loop through all uploaded files
    for (let i = 0; i < files.length; i++) {
      const {
        data: { text },
      } = await Tesseract.recognize(files[i].path, "fra");

      const { name, phone, email, skills, experience, cursus, raw } =
        await processText(text, req);

      console.log(name, phone, email, skills, experience, cursus, raw);

      results.push({ name, phone, email, skills, experience, cursus, raw });
    }

    res.status(200).json(results);
    results = []; // Reset the results array
  } catch (error) {
    console.error(error); // Log the error
    next(error);
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
  const regex = /^([A-Z][a-z]+\s){2}/;
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
async function processText(text, req) {
  let highlight = {};
  const phones = extractPhone(text);
  const emails = extractEmail(text);
  const names = extractName(text);
  const skills = extractSkills(text);
  const experience = extractExperience(text);
  const cursus = extractCursus(text);

  if (isImageMimeType(req.files[0].mimetype)) {
    // Process text from image
    const doc = nlp(text);
    highlight = {
      nouns: doc.match("#Noun"),
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
      console.log(key, acc[key]);
      return acc;
    }, {});
    let raw = highlight.penn.map((element) => {
      // Remove unwanted characters
      element = element.replace(/[^\w\s\p{L}]/gu, "");
      // Remove leading/trailing white space
      element = element.trim();
      return element;
    });
    const name = names && names.length ? names[0] : "";
    const phone = phones && phones.length ? phones[0] : "";
    const email = emails && emails.length ? emails[0] : "";

    return { name, phone, email, skills, experience, cursus, raw };
  }
  const doc = nlp(text);

  // Extract text from PDF
  highlight = {
    nouns: doc.match("#Noun"),
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
    console.log(`${key}: ${highlight[key].out("array")}`);
    return acc;
  }, {});

  let raw = highlight.penn.map((element) => {
    // Remove unwanted characters
    element = element.replace(/[^\w\s\p{L}]/gu, "");
    // Remove leading/trailing white space
    element = element.trim();
    return element;
  });
  const name = names && names.length ? names[0] : "";
  const phone = phones && phones.length ? phones[0] : "";
  const email = emails && emails.length ? emails[0] : "";

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
