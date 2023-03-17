![CI/CD](https://github.com/MathisZerbib/CV-extract/workflows/CI/CD/badge.svg)

# App Readme

This app performs OCR (Optical Character Recognition) on an image and extracts useful information such as name, phone number, and email address. It also performs NLP (Natural Language Processing) to highlight different parts of the extracted text such as nouns, verbs, adjectives, etc. The app is built using Node.js, Express, React, and Tesseract.js.

## Getting started

- Clone the repository
- Run `npm install` to install dependencies
- Run `npm start` to start the server and the React app.

## How to use

- Drag and drop an image onto the app or click on the "Choose file" button to select an image.
- Wait for the OCR to process the image. The extracted information will be displayed on the screen.
- If the OCR is not able to extract any information, an error message will be displayed.

## Dependencies

- express: a Node.js web application framework
- Tesseract.js: an OCR engine
- multer: a middleware for handling multipart/form-data
- fr-compromise: a library for French NLP
- compromise-numbers: an extension for handling numbers in natural language
- react: a JavaScript library for building user interfaces
- react-dropzone: an easy and simple drag-and-drop file uploader for React
- axios: a promise-based HTTP client for the browser and Node.js
- @mui/material: a popular React UI framework

## License

This app is released under the MIT License. Feel free to use, modify, and distribute it as you wish.
