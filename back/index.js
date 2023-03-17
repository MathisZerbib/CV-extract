// Import dependencies
const express = require("express");
const Tesseract = require("tesseract.js");
const multer = require("multer");
const nlp = require("fr-compromise");
nlp.extend(require("compromise-numbers"));

// Initialize Express
const app = express();
const port = 3000; // Or any other port

// Setting up multer middleware to receive images.
const upload = multer({ dest: "uploads/" });

// Initialize results array
const results = [];

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

      const { name, phone, email, raw } = processText(text);

      results.push({ name, phone, email, raw });
    }

    res.json(results);
  } catch (error) {
    // Handle the error appropriately
    console.error(error); // Log the error
    next(error);
  }
});

// Process extracted text
function processText(text) {
  const doc = nlp(text);

  let highlight = {
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
    return acc;
  }, {});

  const phones = extractPhone(text);
  const emails = extractEmail(text);
  const names = extractName(text);

  // Clean phone number
  if (phones) {
    phones[0] = phones[0].replace(/[\s\(\)\-\,\.]/g, "");
  }

  let raw = highlight.penn.map((element) => {
    // Remove unwanted characters
    element = element.replace(/[^\w\s\p{L}]/gu, "");

    // Remove leading/trailing white space
    element = element.trim();

    return element;
  });

  const name = names ? names[0] : "";
  const phone = phones ? phones[0] : "";
  const email = emails ? emails[0] : "";

  return { name, phone, email, raw };
}

// Extract phone number from text
function extractPhone(text) {
  const phoneRegex = /\+?([\d|\(][\h|\(\d{3}\)|\.|\,|\-|\d]{4,}\d)/;
  return text.match(phoneRegex);
}

//Extract email from text
function extractEmail(text) {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  return text.match(emailRegex);
}

// Extract name from text
function extractName(text) {
  const nameRegex = /^([A-Z][a-z]+\s){2}/;
  return text.match(nameRegex);
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
