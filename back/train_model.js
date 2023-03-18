const winkNer = require("wink-ner");
const winkTokenizer = require("wink-tokenizer");

// Define training data for the entities you want to recognize
const trainingData = [
  /// TYPE ETABLISSMENT
  { text: "restaurant", entityType: "type", uid: "restaurant" },
  { text: "hotel", entityType: "type", uid: "hotel" },
  { text: "cafe", entityType: "type", uid: "cafe" },
  { text: "bar", entityType: "type", uid: "bar" },
  { text: "brasserie", entityType: "type", uid: "brasserie" },
  { text: "traiteur", entityType: "type", uid: "traiteur" },
  { text: "buffet", entityType: "type", uid: "buffet" },
  { text: "plats à emporter", entityType: "type", uid: "takeaway" },
  { text: "cuisine asiatique", entityType: "cuisine", uid: "asian_cuisine" },
  { text: "cuisine italienne", entityType: "cuisine", uid: "italian_cuisine" },
  { text: "service à table", entityType: "service_type", uid: "table_service" },
  { text: "self-service", entityType: "service_type", uid: "self_service" },
  {
    text: "buffet à volonté",
    entityType: "service_type",
    uid: "all_you_can_eat_buffet",
  },
  { text: "cuisine française", entityType: "cuisine", uid: "french_cuisine" },
  { text: "cuisine italienne", entityType: "cuisine", uid: "italian_cuisine" },
  { text: "cuisine japonaise", entityType: "cuisine", uid: "japanese_cuisine" },
  { text: "cuisine chinoise", entityType: "cuisine", uid: "chinese_cuisine" },
  { text: "cuisine indienne", entityType: "cuisine", uid: "indian_cuisine" },
  { text: "cuisine thaïlandaise", entityType: "cuisine", uid: "thai_cuisine" },
  {
    text: "cuisine vietnamienne",
    entityType: "cuisine",
    uid: "vietnamese_cuisine",
  },
  { text: "cuisine coréenne", entityType: "cuisine", uid: "korean_cuisine" },
  { text: "cuisine mexicaine", entityType: "cuisine", uid: "mexican_cuisine" },
  { text: "cuisine espagnole", entityType: "cuisine", uid: "spanish_cuisine" },

  {
    text: "cuisine américaine",
    entityType: "cuisine",
    uid: "american_cuisine",
  },
  { text: "cuisine libanaise", entityType: "cuisine", uid: "lebanese_cuisine" },
  { text: "cuisine grecque", entityType: "cuisine", uid: "greek_cuisine" },
  { text: "cuisine turque", entityType: "cuisine", uid: "turkish_cuisine" },
  {
    text: "cuisine portugaise",
    entityType: "cuisine",
    uid: "portuguese_cuisine",
  },
  {
    text: "cuisine brésilienne",
    entityType: "cuisine",
    uid: "brazilian_cuisine",
  },
  { text: "cuisine africaine", entityType: "cuisine", uid: "african_cuisine" },
  {
    text: "cuisine australienne",
    entityType: "cuisine",
    uid: "australian_cuisine",
  },
  {
    text: "cuisine canadienne",
    entityType: "cuisine",
    uid: "canadian_cuisine",
  },

  /// JOB TYPES
  { text: "chef", entityType: "job", uid: "chef" },
  { text: "sommelier", entityType: "job", uid: "sommelier" },
  { text: "maître d'hôtel", entityType: "job", uid: "maître_d_hôtel" },
  { text: "barman", entityType: "job", uid: "bartender" },
  { text: "barmaid", entityType: "job", uid: "barmaid" },
  { text: "serveur", entityType: "job", uid: "waiter" },
  { text: "serveuse", entityType: "job", uid: "waitress" },
  { text: "cuisinier", entityType: "job", uid: "cook" },
  { text: "chef de cuisine", entityType: "job", uid: "head_chef" },
  { text: "chef de partie", entityType: "job", uid: "chef_de_partie" },
  { text: "commis de cuisine", entityType: "job", uid: "commis_de_cuisine" },
  { text: "chef de rang", entityType: "job", uid: "chef_de_rang" },
  { text: "chef de salle", entityType: "job", uid: "chef_de_salle" },
  { text: "chef de restaurant", entityType: "job", uid: "chef_de_restaurant" },
  { text: "commis de salle", entityType: "job", uid: "commis_de_salle" },
  { text: "commis de rang", entityType: "job", uid: "commis_de_rang" },
  { text: "commis", entityType: "job", uid: "commis" },
  {
    text: "cuisinier de collectivité",
    entityType: "job_title",
    uid: "collective_cook",
  },
  { text: "pâtissier", entityType: "job_title", uid: "pastry_chef" },
  { text: "plongeur", entityType: "job_title", uid: "dishwasher" },
  { text: "chef de rang", entityType: "job_title", uid: "head_waiter" },
  { text: "commis de cuisine", entityType: "job_title", uid: "commis_chef" },
  { text: "chef de partie", entityType: "job_title", uid: "station_chef" },
  {
    text: "équipier polyvalent",
    entityType: "job_title",
    uid: "multiskilled_teammate",
  },
  { text: "sous-chef", entityType: "job_title", uid: "sous_chef" },
  { text: "chef de bar", entityType: "job_title", uid: "head_bartender" },
  {
    text: "directeur de restaurant",
    entityType: "job_title",
    uid: "restaurant_manager",
  },
  {
    text: "assistant de direction",
    entityType: "job_title",
    uid: "assistant_manager",
  },
  {
    text: "maitre d'hôtel adjoint",
    entityType: "job_title",
    uid: "assistant_maître_d_hôtel",
  },
  {
    text: "responsable de salle",
    entityType: "job_title",
    uid: "dining_room_manager",
  },
  {
    text: "responsable de cuisine",
    entityType: "job_title",
    uid: "kitchen_manager",
  },
  {
    text: "directeur de salle",
    entityType: "job_title",
    uid: "dining_room_director",
  },
  {
    text: "directeur de cuisine",
    entityType: "job_title",
    uid: "kitchen_director",
  },
  { text: "chef sommelier", entityType: "job_title", uid: "head_sommelier" },
  {
    text: "maitre d'hôtel sommelier",
    entityType: "job_title",
    uid: "maître_d_hôtel_sommelier",
  },
  {
    text: "animateur commercial",
    entityType: "job_title",
    uid: "sales_promoter",
  },
  {
    text: "chef de production culinaire",
    entityType: "job_title",
    uid: "culinary_production_chef",
  },
  { text: "chef de salle", entityType: "job_title", uid: "dining_room_chef" },
  {
    text: "maitre d'hôtel chef de rang",
    entityType: "job_title",
    uid: "maître_d_hôtel_head_waiter",
  },
  {
    text: "animateur de vente",
    entityType: "job_title",
    uid: "sales_animator",
  },
  { text: "responsable de bar", entityType: "job_title", uid: "bar_manager" },
  { text: "chef boulanger", entityType: "job_title", uid: "head_baker" },
  {
    text: "traiteur événementiel",
    entityType: "job_title",
    uid: "event_caterer",
  },
  {
    text: "chef de rayon traiteur",
    entityType: "job_title",
    uid: "catering_department_head",
  },
  {
    text: "responsable événementiel",
    entityType: "job_title",
    uid: "event_manager",
  },

  { text: "cuisson", entityType: "skill", uid: "cooking" },
  {
    text: "préparation culinaire",
    entityType: "skill",
    uid: "food_preparation",
  },
  {
    text: "préparation de boissons",
    entityType: "skill",
    uid: "beverage_preparation",
  },

  /// JOB SKILLS
  { text: "polyvalent", entityType: "skill", uid: "polyvalent" },
  { text: "autonome", entityType: "skill", uid: "autonome" },
  { text: "rigoureux", entityType: "skill", uid: "rigoureux" },
  { text: "sérieux", entityType: "skill", uid: "sérieux" },
  { text: "souriant", entityType: "skill", uid: "souriant" },
  { text: "souriante", entityType: "skill", uid: "souriant" },
  { text: "sourire", entityType: "skill", uid: "souriant" },
  { text: "sourires", entityType: "skill", uid: "souriant" },
  { text: "service client", entityType: "skill", uid: "customer_service" },
  { text: "Accueil", entityType: "skill", uid: "customer_service" },
  { text: "accueil", entityType: "skill", uid: "customer_service" },
  { text: "accueillant", entityType: "skill", uid: "customer_service" },
  { text: "accueillante", entityType: "skill", uid: "customer_service" },
  {
    text: "Accueil de la clientèle",
    entityType: "skill",
    uid: "customer_service",
  },
  { text: "Accueil des clients", entityType: "skill", uid: "customer_service" },
  {
    text: "presentation du menu",
    entityType: "skill",
    uid: "menu_présentation",
  },

  {
    text: "préparation de commandes",
    entityType: "skill",
    uid: "order_preparation",
  },
  {
    text: "préparation de la salle",
    entityType: "skill",
    uid: "room_preparation",
  },
  { text: "mise en place", entityType: "skill", uid: "mise_en_place" },
  { text: "dressage de tables", entityType: "skill", uid: "table_dressing" },
  {
    text: "dressage de couverts",
    entityType: "skill",
    uid: "cutlery_dressing",
  },
  { text: "service de table", entityType: "skill", uid: "table_service" },
  { text: "service de bar", entityType: "skill", uid: "bar_service" },
  { text: "service de salle", entityType: "skill", uid: "room_service" },
  {
    text: "service de salle à manger",
    entityType: "skill",
    uid: "dining_room_service",
  },
  {
    text: "service de salle de restaurant",
    entityType: "skill",
    uid: "restaurant_room_service",
  },

  {
    text: "gestion des stocks",
    entityType: "skill",
    uid: "inventory_management",
  },
  { text: "gestion de la caisse", entityType: "skill", uid: "cash_management" },
  {
    text: "gestion des horaires",
    entityType: "skill",
    uid: "schedule_management",
  },
  {
    text: "formation de nouveaux employés",
    entityType: "skill",
    uid: "new_employee_training",
  },
  { text: "planification de menu", entityType: "skill", uid: "menu_planning" },
  {
    text: "vente de produits alimentaires",
    entityType: "skill",
    uid: "food_sales",
  },
  {
    text: "gestion des commandes",
    entityType: "skill",
    uid: "order_management",
  },
  {
    text: "systèmes de point de vente",
    entityType: "skill",
    uid: "point_of_sale_systems",
  },
  {
    text: "entretien des équipements de cuisine",
    entityType: "skill",
    uid: "kitchen_equipment_maintenance",
  },
  { text: "hygiène alimentaire", entityType: "skill", uid: "food_hygiene" },
  {
    text: "gestion de la qualité",
    entityType: "skill",
    uid: "quality_management",
  },
  {
    text: "organisation d'événements",
    entityType: "skill",
    uid: "event_planning",
  },
  { text: "gestion d'équipe", entityType: "skill", uid: "team_management" },
  {
    text: "communication avec les clients",
    entityType: "skill",
    uid: "customer_communication",
  },
  {
    text: "résolution de problèmes",
    entityType: "skill",
    uid: "problem_solving",
  },
  {
    text: "travail sous pression",
    entityType: "skill",
    uid: "working_under_pressure",
  },
  { text: "travail d'équipe", entityType: "skill", uid: "teamwork" },
  { text: "adaptabilité", entityType: "skill", uid: "adaptability" },
  {
    text: "créativité culinaire",
    entityType: "skill",
    uid: "culinary_creativity",
  },
  { text: "gestion du temps", entityType: "skill", uid: "time_management" },
  { text: "connaissance des vins", entityType: "skill", uid: "wine_knowledge" },
  {
    text: "gestion de la salle",
    entityType: "skill",
    uid: "dining_room_management",
  },
  {
    text: "gestion des réservations",
    entityType: "skill",
    uid: "reservation_management",
  },
  {
    text: "gestion des plaintes",
    entityType: "skill",
    uid: "complaint_management",
  },
  {
    text: "gestion des événements",
    entityType: "skill",
    uid: "event_management",
  },
  { text: "techniques de vente", entityType: "skill", uid: "sales_techniques" },
  {
    text: "relation clientèle",
    entityType: "skill",
    uid: "client_relationship",
  },
  { text: "analyse des coûts", entityType: "skill", uid: "cost_analysis" },
  {
    text: "gestion de la sécurité alimentaire",
    entityType: "skill",
    uid: "food_safety_management",
  },
  { text: "Service de repas", entityType: "skill", uid: "meal_service" },
  { text: "Service de boissons", entityType: "skill", uid: "drink_service" },
  { text: "Service de dessert", entityType: "skill", uid: "dessert_service" },
  { text: "Service de café", entityType: "skill", uid: "coffee_service" },
  { text: "Service de thé", entityType: "skill", uid: "tea_service" },
  { text: "Service de vin", entityType: "skill", uid: "wine_service" },
  { text: "Service de bière", entityType: "skill", uid: "beer_service" },
  {
    text: "Service de cocktails",
    entityType: "skill",
    uid: "cocktail_service",
  },
  {
    text: "Service de champagne",
    entityType: "skill",
    uid: "champagne_service",
  },
  { text: "Service de liqueur", entityType: "skill", uid: "liqueur_service" },
  { text: "Service de digestif", entityType: "skill", uid: "digestif_service" },

  {
    text: "Contole propreté des couverts et des tables",
    entityType: "skill",
    uid: "utensil_and_table_cleanliness_control",
  },
  { text: "Contôle hygiène", entityType: "skill", uid: "hygiene_control" },
  {
    text: "Contôle hygiène des locaux",
    entityType: "skill",
    uid: "room_hygiene_control",
  },
  {
    text: "Contôle hygiène des ustensiles",
    entityType: "skill",
    uid: "utensil_hygiene_control",
  },
  {
    text: "Contôle hygiène des mains",
    entityType: "skill",
    uid: "hand_hygiene_control",
  },
  {
    text: "Controle de la température",
    entityType: "skill",
    uid: "temperature_control",
  },
  {
    text: "Controle de la température des aliments",
    entityType: "skill",
    uid: "food_temperature_control",
  },
  {
    text: "Controle de la température des boissons",
    entityType: "skill",
    uid: "drink_temperature_control",
  },
  {
    text: "Controle de la température des ustensiles",
    entityType: "skill",
    uid: "utensil_temperature_control",
  },
  {
    text: "Controle de la température des locaux",
    entityType: "skill",
    uid: "room_temperature_control",
  },
  {
    text: "Controle de la température des équipements",
    entityType: "skill",
    uid: "equipment_temperature_control",
  },
  {
    text: "Controle de la température des produits",
    entityType: "skill",
    uid: "product_temperature_control",
  },
  {
    text: "Controle de la température des surfaces",
    entityType: "skill",
    uid: "surface_temperature_control",
  },

  /// DATA SETS RAW

  //   { text: "restauration rapide", entityType: "service", uid: "fast-food" },
  //   { text: "cuisine française", entityType: "cuisine", uid: "french-cuisine" },
  //   { text: "serveur", entityType: "job_title", uid: "waiter" },
  //   { text: "serveuse", entityType: "job_title", uid: "waitress" },
  //   { text: "cuisinier", entityType: "job_title", uid: "cook" },
  //   { text: "chef de cuisine", entityType: "job_title", uid: "head_chef" },
  //   { text: "sommelier", entityType: "job_title", uid: "sommelier" },
  //   { text: "maître d'hôtel", entityType: "job_title", uid: "maître_d_hôtel" },
  //   { text: "barman", entityType: "job_title", uid: "bartender" },
  //   { text: "barmaid", entityType: "job_title", uid: "barmaid" },
  //   { text: "hôtel", entityType: "service", uid: "hotel" },
  //   { text: "restaurant", entityType: "service", uid: "restaurant" },
  //   { text: "café", entityType: "service", uid: "cafe" },
  //   { text: "brasserie", entityType: "service", uid: "brasserie" },
  //   { text: "traiteur", entityType: "service", uid: "caterer" },
  //   { text: "buffet", entityType: "service", uid: "buffet" },
  //   { text: "plats à emporter", entityType: "service", uid: "takeaway" },
  //   { text: "cuisine asiatique", entityType: "cuisine", uid: "asian_cuisine" },
  //   { text: "cuisine italienne", entityType: "cuisine", uid: "italian_cuisine" },
  //   { text: "service à table", entityType: "service_type", uid: "table_service" },
  //   { text: "self-service", entityType: "service_type", uid: "self_service" },
  //   {
  //     text: "buffet à volonté",
  //     entityType: "service_type",
  //     uid: "all_you_can_eat_buffet",
  //   },

  //   {
  //     text: "cuisine végétarienne",
  //     entityType: "cuisine",
  //     uid: "vegetarian_cuisine",
  //   },
  //   {
  //     text: "cuisine sans gluten",
  //     entityType: "cuisine",
  //     uid: "gluten_free_cuisine",
  //   },
  //   {
  //     text: "service en terrasse",
  //     entityType: "service_type",
  //     uid: "terrace_service",
  //   },
  //   { text: "salle de banquet", entityType: "service_type", uid: "banquet_hall" },

  // Add more training data as needed
];

// Create a new instance of wink-ner and train it with the training data
const myNER = winkNer();
myNER.learn(trainingData);

// Create a new instance of wink-tokenizer and use it to tokenize a sentence
const tokenizer = winkTokenizer();
const tokens = tokenizer.tokenize(
  "l SERVEUSE EN RESTAURANT i Diplômé en Cerificat détude professionnell e suis expérimenté dansle N monde de la restauation Ja travallé dansle domaine depus 7 ans J traval me passionne Je cherche actullement un emploi durable et stableJe dispose dun oraire floible tj suis isponible de site PROFIL Aéresse EXPÉRIENCES PROFESSIONNELLES Paris Email 2016 SERVEUSE RESPONSABLE ÉQUIPE RESTAURANT ssenolopaman com 2019 L BON COIN PARIS SE Préparation salle dressage de tables dressage de Téléphone couveris vérifiation hygiène érification des 06 01 02 03 04 matérios t accessoires Préparation d sal Date de naissance Contôle hygiène 24051995 Contole propreté des couverts et des tables K Accue des clents se Service de repas pésentation de menu etde carte Desserte detable COMPÉTENCES Gérance de cavejouralièr élection du vin Organisationde a sallede Séconse éavpe restauration 2016 SERVEUSE LE GLACIER PARIS 9E Moïtise de toutes les 2016 Préparaton sall nettoyage contrôle hygièneet techniques de restauration proprté dressage detable dressage de couvert présentation d table ccl des ls ucl reciotne Aerunide ts eqn résentation crteet ment Ls Gérance commande Gérance équipe Desserte d table Gérance commande Gérance de cave LoIsIRs FORMATIONS Curiosté culnaire éccumentarecuisine vre de psrripipaiheqeté 2010 CERTIFICAT DAPTITUDE PROFESSIONNELLE AGENT POLYVALENT DE RESTAURATION Lecture äÉTABLISSEMENT DE FORMATION ER Sport Basket Foot 2010 CERTIFICAT ANGLAIS PROFESSIONNEL ÉCOLE XX00X PARIS"
);

// Use recognize() to identify entities in the sentence based on the training data
const entities = myNER.recognize(tokens);

// Print the resulting array of tokens with entity information added
// console.log(entities);

const relevantData = trainingData
  .filter((data) => {
    return entities.find((entity) => {
      return (
        entity.entityType === data.entityType && entity.value === data.text
      );
    });
  })
  .map((data) => {
    return data.uid;
  });

// Print the relevant data
console.log(relevantData);
