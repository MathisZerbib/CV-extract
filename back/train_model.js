const winkNer = require("wink-ner");
const winkTokenizer = require("wink-tokenizer");
var trainingData = require("./training_data.json");

// Define training data for the entities you want to recognize
// Create a new instance of wink-ner and train it with the training data
const myNER = winkNer();
myNER.learn(trainingData);

// Create a new instance of wink-tokenizer and use it to tokenize a sentence
const tokenizer = winkTokenizer();
const tokens = tokenizer.tokenize(
  "l SERVEUSE EN RESTAURANT i Diplômé en Cerificat détude professionnell e suis expérimenté dansle N monde de la restauation Ja travallé dansle domaine depus 7 ans J traval me passionne Je cherche actullement un emploi durable et stableJe dispose dun oraire floible tj suis isponible de site PROFIL Aéresse EXPÉRIENCES PROFESSIONNELLES Paris Email 2016 SERVEUSE RESPONSABLE ÉQUIPE RESTAURANT ssenolopaman com 2019 L BON COIN PARIS SE Préparation salle dressage de tables dressage de Téléphone couveris vérifiation hygiène érification des 06 01 02 03 04 matérios t accessoires Préparation d sal Date de naissance Contôle hygiène 24051995 Contole propreté des couverts et des tables K Accue des clents se Service de repas pésentation de menu etde carte Desserte detable COMPÉTENCES Gérance de cavejouralièr élection du vin Organisationde a salle de Séconse éavpe restauration 2016 SERVEUSE LE GLACIER PARIS 9E Moïtise de toutes les 2016 Préparaton sall nettoyage contrôle hygièneet techniques de restauration proprté dressage detable dressage de couvert présentation d table ccl des ls ucl reciotne Aerunide ts eqn résentation crteet ment Ls Gérance commande Gérance équipe Desserte d table Gérance commande Gérance de cave LoIsIRs FORMATIONS Curiosté culnaire éccumentarecuisine vre de psrripipaiheqeté 2010 CERTIFICAT DAPTITUDE PROFESSIONNELLE AGENT POLYVALENT DE RESTAURATION Lecture äÉTABLISSEMENT DE FORMATION ER Sport Basket Foot 2010 CERTIFICAT ANGLAIS PROFESSIONNEL ÉCOLE XX00X PARIS"
);

// Use recognize() to identify entities in the sentence based on the training data
const entities = myNER.recognize(tokens);

// Print the resulting array of tokens with entity information added
// console.log(entities);

const tag = trainingData
  .filter((data) => {
    return entities.find((entity) => {
      console.log(
        "COUCOU",
        entity.entityType,
        data.entityType,
        entity.value,
        data.text
      );
      return (
        (entity.entityType === data.entityType && entity.value === data.text) ||
        (entity.entityType === data.entityType &&
          entity.value === data.text.toLowerCase()) ||
        (entity.entityType === data.entityType &&
          entity.value === data.text.toUpperCase())
      );
    });
  })
  .map((data) => {
    return data.uid;
  });

// Print the relevant data
console.log(tag);
