const trainingData = [
  /// ETABLISHMENT NAME
  {
    text: "le petit bouchon",
    entityType: "establishment_name",
    uid: "le_petit_bouchon",
  },
  {
    text: "quick",
    entityType: "establishment_name",
    uid: "quick",
  },
  {
    text: "macdo",
    entityType: "establishment_name",
    uid: "macdo",
  },
  {
    text: "mcdo",
    entityType: "establishment_name",
    uid: "mcdo",
  },
  {
    text: "burger king",
    entityType: "establishment_name",
    uid: "burger_king",
  },
  {
    text: "bk",
    entityType: "establishment_name",
    uid: "bk",
  },
  {
    text: "kfc",
    entityType: "establishment_name",
    uid: "kfc",
  },
  {
    text: "pizza hut",
    entityType: "establishment_name",
    uid: "pizza_hut",
  },
  {
    text: "domino's",
    entityType: "establishment_name",
    uid: "domino's",
  },
  {
    text: "domino",
    entityType: "establishment_name",
    uid: "domino",
  },
  /// ESTABLSHMENT TYPE
  {
    text: "restaurant",
    entityType: "type",
    uid: "restaurant",
  },
  {
    text: "bistrot",
    entityType: "type",
    uid: "bistrot",
  },
  {
    text: "pizzeria",
    entityType: "type",
    uid: "pizzeria",
  },
  {
    text: "fast-food",
    entityType: "type",
    uid: "fast_food",
  },
  {
    text: "snack",
    entityType: "type",
    uid: "snack",
  },
  {
    text: "crêperie",
    entityType: "type",
    uid: "creperie",
  },
  {
    text: "glacier",
    entityType: "type",
    uid: "glacier",
  },
  {
    text: "auberge",
    entityType: "type",
    uid: "auberge",
  },
  {
    text: "hotel",
    entityType: "type",
    uid: "hotel",
  },
  {
    text: "cafe",
    entityType: "type",
    uid: "cafe",
  },
  {
    text: "bar",
    entityType: "type",
    uid: "bar",
  },
  {
    text: "brasserie",
    entityType: "type",
    uid: "brasserie",
  },
  {
    text: "traiteur",
    entityType: "type",
    uid: "traiteur",
  },
  {
    text: "buffet",
    entityType: "type",
    uid: "buffet",
  },
  {
    text: "plats à emporter",
    entityType: "type",
    uid: "takeaway",
  },

  /// CUISINE TYPE
  {
    text: "cuisine asiatique",
    entityType: "cuisine",
    uid: "asian_cuisine",
  },
  {
    text: "cuisine italienne",
    entityType: "cuisine",
    uid: "italian_cuisine",
  },
  {
    text: "service à table",
    entityType: "service_type",
    uid: "table_service",
  },
  {
    text: "self-service",
    entityType: "service_type",
    uid: "self_service",
  },
  {
    text: "buffet à volonté",
    entityType: "service_type",
    uid: "all_you_can_eat_buffet",
  },
  {
    text: "cuisine française",
    entityType: "cuisine",
    uid: "french_cuisine",
  },
  {
    text: "cuisine italienne",
    entityType: "cuisine",
    uid: "italian_cuisine",
  },
  {
    text: "cuisine japonaise",
    entityType: "cuisine",
    uid: "japanese_cuisine",
  },
  {
    text: "cuisine chinoise",
    entityType: "cuisine",
    uid: "chinese_cuisine",
  },
  {
    text: "cuisine indienne",
    entityType: "cuisine",
    uid: "indian_cuisine",
  },
  {
    text: "cuisine thaïlandaise",
    entityType: "cuisine",
    uid: "thai_cuisine",
  },
  {
    text: "cuisine vietnamienne",
    entityType: "cuisine",
    uid: "vietnamese_cuisine",
  },
  {
    text: "cuisine coréenne",
    entityType: "cuisine",
    uid: "korean_cuisine",
  },
  {
    text: "cuisine mexicaine",
    entityType: "cuisine",
    uid: "mexican_cuisine",
  },
  {
    text: "cuisine espagnole",
    entityType: "cuisine",
    uid: "spanish_cuisine",
  },
  {
    text: "cuisine américaine",
    entityType: "cuisine",
    uid: "american_cuisine",
  },
  {
    text: "cuisine libanaise",
    entityType: "cuisine",
    uid: "lebanese_cuisine",
  },
  {
    text: "cuisine grecque",
    entityType: "cuisine",
    uid: "greek_cuisine",
  },
  {
    text: "cuisine turque",
    entityType: "cuisine",
    uid: "turkish_cuisine",
  },
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
  {
    text: "cuisine africaine",
    entityType: "cuisine",
    uid: "african_cuisine",
  },
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

  /// JOB TYPE
  {
    text: "chef",
    entityType: "job_title",
    uid: "chef",
  },
  {
    text: "sommelier",
    entityType: "job_title",
    uid: "sommelier",
  },
  {
    text: "maître d'hôtel",
    entityType: "job_title",
    uid: "maître_d_hôtel",
  },
  {
    text: "barman",
    entityType: "job_title",
    uid: "bartender",
  },
  {
    text: "barmaid",
    entityType: "job_title",
    uid: "barmaid",
  },
  {
    text: "serveur",
    entityType: "job_title",
    uid: "waiter",
  },
  {
    text: "serveuse",
    entityType: "job_title",
    uid: "waitress",
  },
  {
    text: "cuisinier",
    entityType: "job_title",
    uid: "cook",
  },
  {
    text: "chef de cuisine",
    entityType: "job_title",
    uid: "head_chef",
  },
  {
    text: "chef de partie",
    entityType: "job_title",
    uid: "chef_de_partie",
  },
  {
    text: "commis de cuisine",
    entityType: "job_title",
    uid: "commis_de_cuisine",
  },
  {
    text: "chef de rang",
    entityType: "job_title",
    uid: "chef_de_rang",
  },
  {
    text: "chef de salle",
    entityType: "job_title",
    uid: "chef_de_salle",
  },
  {
    text: "chef de restaurant",
    entityType: "job_title",
    uid: "chef_de_restaurant",
  },
  {
    text: "commis de salle",
    entityType: "job_title",
    uid: "commis_de_salle",
  },
  {
    text: "commis de rang",
    entityType: "job_title",
    uid: "commis_de_rang",
  },
  {
    text: "commis",
    entityType: "job_title",
    uid: "commis",
  },
  {
    text: "cuisinier de collectivité",
    entityType: "job_title",
    uid: "collective_cook",
  },
  {
    text: "pâtissier",
    entityType: "job_title",
    uid: "pastry_chef",
  },
  {
    text: "plongeur",
    entityType: "job_title",
    uid: "dishwasher",
  },
  {
    text: "chef de rang",
    entityType: "job_title",
    uid: "head_waiter",
  },
  {
    text: "commis de cuisine",
    entityType: "job_title",
    uid: "commis_chef",
  },
  {
    text: "chef de partie",
    entityType: "job_title",
    uid: "station_chef",
  },
  {
    text: "équipier polyvalent",
    entityType: "job_title",
    uid: "multiskillsed_teammate",
  },
  {
    text: "agent polyvalent",
    entityType: "job_title",
    uid: "multiskillsed_agent",
  },
  {
    text: "sous-chef",
    entityType: "job_title",
    uid: "sous_chef",
  },
  {
    text: "chef de bar",
    entityType: "job_title",
    uid: "head_bartender",
  },
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
  {
    text: "chef sommelier",
    entityType: "job_title",
    uid: "head_sommelier",
  },
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
  {
    text: "chef de salle",
    entityType: "job_title",
    uid: "dining_room_chef",
  },
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
  {
    text: "responsable de bar",
    entityType: "job_title",
    uid: "bar_manager",
  },
  {
    text: "chef boulanger",
    entityType: "job_title",
    uid: "head_baker",
  },
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
  {
    text: "pizzaiolo",
    entityType: "job_title",
    uid: "pizzaiolo",
  },
  {
    text: "traiteur",
    entityType: "job_title",
    uid: "traiteur",
  },
  {
    text: "chef de banquet",
    entityType: "job_title",
    uid: "chef_de_banquet",
  },
  {
    text: "chef de partie froid",
    entityType: "job_title",
    uid: "chef_de_partie_froid",
  },
  {
    text: "chef de partie chaud",
    entityType: "job_title",
    uid: "chef_de_partie_chaud",
  },
  {
    text: "chef de partie pâtisserie",
    entityType: "job_title",
    uid: "chef_de_partie_patisserie",
  },
  {
    text: "chef de partie rôtisserie",
    entityType: "job_title",
    uid: "chef_de_partie_rotisserie",
  },
  {
    text: "chef de partie saucier",
    entityType: "job_title",
    uid: "chef_de_partie_saucier",
  },
  {
    text: "chef de partie garde manger",
    entityType: "job_title",
    uid: "chef_de_partie_garde_manger",
  },
  {
    text: "chef de rang junior",
    entityType: "job_title",
    uid: "chef_de_rang_junior",
  },
  {
    text: "chef de rang senior",
    entityType: "job_title",
    uid: "chef_de_rang_senior",
  },
  {
    text: "commis de bar",
    entityType: "job_title",
    uid: "commis_de_bar",
  },
  {
    text: "commis de plonge",
    entityType: "job_title",
    uid: "commis_de_plonge",
  },
  {
    text: "économe de cuisine",
    entityType: "job_title",
    uid: "econome_de_cuisine",
  },
  {
    text: "écailler",
    entityType: "job_title",
    uid: "ecailler",
  },
  {
    text: "garçon de café",
    entityType: "job_title",
    uid: "garçon_de_café",
  },
  {
    text: "limonadier",
    entityType: "job_title",
    uid: "limonadier",
  },
  {
    text: "marmiton",
    entityType: "job_title",
    uid: "marmiton",
  },
  {
    text: "œnologue",
    entityType: "job_title",
    uid: "oenologue",
  },
  {
    text: "réceptionniste",
    entityType: "job_title",
    uid: "receptionniste",
  },
  {
    text: "runner",
    entityType: "job_title",
    uid: "runner",
  },
  {
    text: "sous-chef pâtissier",
    entityType: "job_title",
    uid: "sous_chef_pâtissier",
  },
  {
    text: "chef de rang",
    entityType: "job_title",
    uid: "head_waiter",
  },
  {
    text: "commis de cuisine",
    entityType: "job_title",
    uid: "commis_chef",
  },
  {
    text: "chef de partie",
    entityType: "job_title",
    uid: "station_chef",
  },
  {
    text: "équipier polyvalent",
    entityType: "job_title",
    uid: "multiskillsed_teammate",
  },
  {
    text: "agent polyvalent",
    entityType: "job_title",
    uid: "multiskillsed_agent",
  },
  {
    text: "sous-chef",
    entityType: "job_title",
    uid: "sous_chef",
  },
  {
    text: "chef de bar",
    entityType: "job_title",
    uid: "head_bartender",
  },
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

  /// SKILLsS
  {
    text: "cuisson",
    entityType: "skills",
    uid: "cooking",
  },
  {
    text: "préparation culinaire",
    entityType: "skills",
    uid: "food_preparation",
  },
  {
    text: "préparation de boissons",
    entityType: "skills",
    uid: "beverage_preparation",
  },
  {
    text: "polyvalent",
    entityType: "skills",
    uid: "polyvalent",
  },
  {
    text: "autonome",
    entityType: "skills",
    uid: "autonome",
  },
  {
    text: "rigoureux",
    entityType: "skills",
    uid: "rigoureux",
  },
  {
    text: "sérieux",
    entityType: "skills",
    uid: "sérieux",
  },
  {
    text: "souriant",
    entityType: "skills",
    uid: "souriant",
  },
  {
    text: "souriante",
    entityType: "skills",
    uid: "souriant",
  },
  {
    text: "sourire",
    entityType: "skills",
    uid: "souriant",
  },
  {
    text: "sourires",
    entityType: "skills",
    uid: "souriant",
  },
  {
    text: "service client",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "Accueil",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "accueil",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "accueillant",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "accueillante",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "Accueil de la clientèle",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "Accueil des clients",
    entityType: "skills",
    uid: "customer_service",
  },
  {
    text: "presentation du menu",
    entityType: "skills",
    uid: "menu_présentation",
  },
  {
    text: "préparation de commandes",
    entityType: "skills",
    uid: "order_preparation",
  },
  {
    text: "préparation de la salle",
    entityType: "skills",
    uid: "room_preparation",
  },
  {
    text: "mise en place",
    entityType: "skills",
    uid: "mise_en_place",
  },
  {
    text: "dressage de tables",
    entityType: "skills",
    uid: "table_dressing",
  },
  {
    text: "dressage de couverts",
    entityType: "skills",
    uid: "cutlery_dressing",
  },
  {
    text: "service de table",
    entityType: "skills",
    uid: "table_service",
  },
  {
    text: "service de bar",
    entityType: "skills",
    uid: "bar_service",
  },
  {
    text: "service de salle",
    entityType: "skills",
    uid: "room_service",
  },
  {
    text: "service de salle à manger",
    entityType: "skills",
    uid: "dining_room_service",
  },
  {
    text: "service de salle de restaurant",
    entityType: "skills",
    uid: "restaurant_room_service",
  },
  {
    text: "gestion des stocks",
    entityType: "skills",
    uid: "inventory_management",
  },
  {
    text: "gestion de la caisse",
    entityType: "skills",
    uid: "cash_management",
  },
  {
    text: "gestion des horaires",
    entityType: "skills",
    uid: "schedule_management",
  },
  {
    text: "formation de nouveaux employés",
    entityType: "skills",
    uid: "new_employee_training",
  },
  {
    text: "planification de menu",
    entityType: "skills",
    uid: "menu_planning",
  },
  {
    text: "vente de produits alimentaires",
    entityType: "skills",
    uid: "food_sales",
  },
  {
    text: "gestion des commandes",
    entityType: "skills",
    uid: "order_management",
  },
  {
    text: "systèmes de point de vente",
    entityType: "skills",
    uid: "point_of_sale_systems",
  },
  {
    text: "entretien des équipements de cuisine",
    entityType: "skills",
    uid: "kitchen_equipment_maintenance",
  },
  {
    text: "hygiène alimentaire",
    entityType: "skills",
    uid: "food_hygiene",
  },
  {
    text: "gestion de la qualité",
    entityType: "skills",
    uid: "quality_management",
  },
  {
    text: "organisation d'événements",
    entityType: "skills",
    uid: "event_planning",
  },
  {
    text: "gestion d'équipe",
    entityType: "skills",
    uid: "team_management",
  },
  {
    text: "communication avec les clients",
    entityType: "skills",
    uid: "customer_communication",
  },
  {
    text: "résolution de problèmes",
    entityType: "skills",
    uid: "problem_solving",
  },
  {
    text: "travail sous pression",
    entityType: "skills",
    uid: "working_under_pressure",
  },
  {
    text: "travail d'équipe",
    entityType: "skills",
    uid: "teamwork",
  },
  {
    text: "adaptabilité",
    entityType: "skills",
    uid: "adaptability",
  },
  {
    text: "créativité culinaire",
    entityType: "skills",
    uid: "culinary_creativity",
  },
  {
    text: "gestion du temps",
    entityType: "skills",
    uid: "time_management",
  },
  {
    text: "connaissance des vins",
    entityType: "skills",
    uid: "wine_knowledge",
  },
  {
    text: "gestion de la salle",
    entityType: "skills",
    uid: "dining_room_management",
  },
  {
    text: "gestion des réservations",
    entityType: "skills",
    uid: "reservation_management",
  },
  {
    text: "gestion des plaintes",
    entityType: "skills",
    uid: "complaint_management",
  },
  {
    text: "gestion des événements",
    entityType: "skills",
    uid: "event_management",
  },
  {
    text: "techniques de vente",
    entityType: "skills",
    uid: "sales_techniques",
  },
  {
    text: "relation clientèle",
    entityType: "skills",
    uid: "client_relationship",
  },
  {
    text: "analyse des coûts",
    entityType: "skills",
    uid: "cost_analysis",
  },
  {
    text: "gestion de la sécurité alimentaire",
    entityType: "skills",
    uid: "food_safety_management",
  },
  {
    text: "Service de repas",
    entityType: "skills",
    uid: "meal_service",
  },
  {
    text: "Service de boissons",
    entityType: "skills",
    uid: "drink_service",
  },
  {
    text: "Service de dessert",
    entityType: "skills",
    uid: "dessert_service",
  },
  {
    text: "Service de café",
    entityType: "skills",
    uid: "coffee_service",
  },
  {
    text: "Service de thé",
    entityType: "skills",
    uid: "tea_service",
  },
  {
    text: "Service de vin",
    entityType: "skills",
    uid: "wine_service",
  },
  {
    text: "Service de bière",
    entityType: "skills",
    uid: "beer_service",
  },
  {
    text: "Service de cocktails",
    entityType: "skills",
    uid: "cocktail_service",
  },
  {
    text: "Service de champagne",
    entityType: "skills",
    uid: "champagne_service",
  },
  {
    text: "Service de liqueur",
    entityType: "skills",
    uid: "liqueur_service",
  },
  {
    text: "Service de digestif",
    entityType: "skills",
    uid: "digestif_service",
  },
  {
    text: "Contole propreté des couverts et des tables",
    entityType: "skills",
    uid: "utensil_and_table_cleanliness_control",
  },
  {
    text: "Contôle hygiène",
    entityType: "skills",
    uid: "hygiene_control",
  },
  {
    text: "Contôle hygiène des locaux",
    entityType: "skills",
    uid: "room_hygiene_control",
  },
  {
    text: "Contôle hygiène des ustensiles",
    entityType: "skills",
    uid: "utensil_hygiene_control",
  },
  {
    text: "Contôle hygiène des mains",
    entityType: "skills",
    uid: "hand_hygiene_control",
  },
  {
    text: "Controle de la température",
    entityType: "skills",
    uid: "temperature_control",
  },
  {
    text: "Controle de la température des aliments",
    entityType: "skills",
    uid: "food_temperature_control",
  },
  {
    text: "Controle de la température des boissons",
    entityType: "skills",
    uid: "drink_temperature_control",
  },
  {
    text: "Controle de la température des ustensiles",
    entityType: "skills",
    uid: "utensil_temperature_control",
  },
  {
    text: "Controle de la température des locaux",
    entityType: "skills",
    uid: "room_temperature_control",
  },
  {
    text: "Controle de la température des équipements",
    entityType: "skills",
    uid: "equipment_temperature_control",
  },
  {
    text: "Controle de la température des produits",
    entityType: "skills",
    uid: "product_temperature_control",
  },
  {
    text: "Controle de la température des surfaces",
    entityType: "skills",
    uid: "surface_temperature_control",
  },
  {
    text: "Gestion des stocks",
    entityType: "skills",
    uid: "stock_management",
  },
];

export default trainingData;
