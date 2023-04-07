// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const nlp = require("compromise");
// const nlpFrench = require("fr-compromise");
// const spacy = require("node-spacy");
// const PDFExtract = require("pdf.js-extract").PDFExtract;

// nlp.extend(nlpFrench);
// const pdfExtract = new PDFExtract();

// // Initialize Express
// const app = express();
// const port = 3000; // Or any other port

// // Setting up multer middleware to receive files.
// const upload = multer({ dest: "uploads/" });

// // Initialize results array
// let results = [];

// // Initialize node-spacy
// let nlpSpacy;
// (async () => {
//   nlpSpacy = await spacy.load("fr_core_news_sm");
// })();

// // Define a route for file recognition
// app.post("/recognize", upload.array("files[]"), async (req, res, next) => {
//   let files = req.files;
//   if (!files || !files.length) {
//     return res.status(400).json({ message: "No files were uploaded." });
//   }

//   // Initialize results array
//   let results = [];

//   // Loop through all uploaded files
//   for (let i = 0; i < files.length; i++) {
//     const pdfData = fs.readFileSync(files[i].path);
//     pdfExtract.extractBuffer(pdfData, {}, async (err, data) => {
//       if (err) return console.log(err);
//       let text = "";
//       if (data.pages.length) {
//         data.pages.forEach((page) => {
//           page.content.forEach((content) => {
//             text += content.str;
//           });
//         });
//       }
//       if (text.length > 0) {
//         const parsedData = await processText(text);
//         results.push(parsedData);
//       }
//       if (results.length === files.length) {
//         res.status(200).json(results);
//       }
//     });
//   }
// });

// // Process extracted text
// async function processText(text) {
//   // Extract named entities with spaCy
//   const entities = await nlpSpacy(text);

//   // Extract dates
//   const dates = nlp(text).dates().json();

//   // Extract email addresses
//   const emails = nlp(text).match("(#Email|#Hashtag)+").out("array");

//   // Extract phone numbers
//   const phones = nlp(text).match("(#Phone|#Numeric)+").out("array");

//   // Extract skills using a custom regex pattern
//   const skills = extractSkills(text);

//   // Extract education using NLP analysis
//   const education = extractEducation(text);

//   // Extract experience using NLP analysis
//   const experience = extractExperience(text);

//   // Return the extracted information
//   return {
//     entities,
//     dates,
//     emails,
//     phones,
//     skills,
//     education,
//     experience,
//   };
// }

// // Extract skills using a custom regex pattern
// function extractSkills(text) {
//   const regex = /(?:\b(?:skills|compétences)\b[:]\s*)([a-zA-ZÀ-ÿ,.\s]+)/gi;
//   const match = text.match(regex);
//   return match
//     ? match[0].replace(/(?:\b(?:skills|compétences)\b[:]\s*)/gi, "")
//     : "No skills found";
// }

// // Extract education using NLP analysis
// function extractEducation(text) {
//   const educationKeywords = [
//     "diplôme",
//     "formation",
//     "école",
//     "université",
//     "cursus",
//   ];
//   const educationSentences = nlp(text)
//     .sentences()
//     .filter((sentence) => {
//       return educationKeywords.some((keyword) => sentence.has(keyword));
//     })
//     .out("array");
//   return educationSentences.length > 0
//     ? educationSentences
//     : "No education found";
// }

// // Extract experience using NLP analysis
// function extractExperience(text) {
//   const experienceKeywords = [
//     "expérience",
//     "stage",
//     "emploi",
//     "travail",
//     "poste",
//   ];
//   const experienceSentences = nlp(text)
//     .sentences()
//     .filter((sentence) => {
//       return experienceKeywords.some((keyword) => sentence.has(keyword));
//     })
//     .out("array");
//   return experienceSentences.length > 0
//     ? experienceSentences
//     : "No experience found";
// }

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("An error occurred while processing the file.");
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}.`);
// });
