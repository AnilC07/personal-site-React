export const competences = [
  {
    id: 1,
    competence: "Tous les projets",
  },
  {
    id: 2,
    competence: "Bootstrap",
  },
  {
    id:3,
    competence:"Sass"
  },
  {
    id: 4,
    competence: "NodeJS",
  },

  {
    id: 5,
    competence: "ReactJS",
  },
  {
    id: 6,
    competence: "NextJS",
  },
  {
    id: 7,
    competence: "TypeScript",
  },

];

export const projets = [
  {
    id: 1,
    image: "/images/projets/dictionnary.png",
    titre: "Dico (US)",
    desc: "Application Dico realiser avec la librairie React et l'API \"dictionaryapi\"  qui donne une liste de definition pour tous les mots (anglais) ainsi que leur synonymes. Si disponible, on a également accès à la prononciation du mot. Ce projet est un challenge du site frontendmentor.io",
    lien: "https://anils-dictionnary-app.netlify.app",
    tags: [ "ReactJS"]
  },
  {
    id: 2,
    image: "/images/projets/composant-resultat.png",
    titre: "Résumé de résultats",
    desc: "Composant HTML/CSS qui résume les résultats obtenue à un test. Le composant n'utilise pas de données dynamique car ma volonté ici etait de m'exercer au CSS avec Sass. Ce projet est un challenge du site frontendmentor.io.",
    lien: "https://anils-result-resume-component.netlify.app/",
    tags: ["HTML / CSS", "Sass"],
  },
  {
    id: 3,
    image: "/images/projets/Natours.png",
    titre: "Natours",
    desc: "Le projet \"Natours\" à pour objectif la pratique du CSS (plus particulierement des colonnes de BootStrap) et du preprocesseur Sass. Il fait parti de la formation \"Advanced CSS and Sass\" dispenser pas Jonas Schmeldtmann sur Udemy.",
    lien: "https://anilcelik-natours.netlify.app/",
    tags: ["HTML / CSS", "Bootstrap", "Sass"],
  },
  {
    id: 4,
    image: "/images/projets/Trillo.png",
    titre: "Trillo",
    desc: "Le projet \"Trillo\" à pour objectif la pratique du CSS et plus particulierement de Flexbox et du preprocesseur Sass. Il fait parti de la formation \"Advanced CSS and Sass\" dispenser pas Jonas Schmeldtmann sur Udemy.",
    lien: "https://anilcelik-trillo.netlify.app/",
    tags: ["HTML / CSS", "Sass"],
  },
  {
    id: 5,
    image: "/images/projets/Nexter.png",
    titre: "Nexter",
    desc: "Le projet \"Nexter\" à pour objectif la pratique du CSS et plus particulierement du système de \"grid\" et du preprocesseur Sass. Il fait parti de la formation \"Advanced CSS and Sass\" dispenser pas Jonas Schmeldtmann sur Udemy.",
    lien: "https://anilcelik-nexter.netlify.app",
    tags: ["HTML/CSS", "Sass"],
  },
  {
    id: 6,
    image: "/images/audi.jpg",
    titre: "Lorem Ipsum 6",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    lien: "www.lorem.com",
    tags: ["TypeScript", "ReactJS"],
  },
];

export const jobs = [
  {
    id: 1,
    company: "gaea21",
    poste: "Développeur PHP/React",
    logo: "/images/gaea21.png",
    debut: "2022",
    end: "",
    presentation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tasks: [
      "Responsable de l'intégrations des pages statiques suivantes : Toutes les pages de la section 'Projets', toutes les pages liéà la section 'Organigramme', 'Historique' et 'Alumni'",
      "Responsable du développement des composants React",
      "Participation active au 'Daily meeting'",
    ],
  },
  {
    id: 2,
    company: "La Passerelle",
    poste: "Développeur web et web mobile",
    logo: "/images/laPasserelle.jpg",
    debut: "2022",
    end: "",
    presentation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tasks: [
      "Lead dev dans la réalisation d’une app web en collaboration avec des UX/UI Designers",
      "Réalisation d'un quizz en React afin de connaitre les preferences du visiteur et l'orienté dans son choix vers la destination qui lui correspondrait le mieux",
      "Pratique intensive de BootStrap, Javascript (librairie React pour le front et Nodejs avec le framework express pour le back)",
    ],
  },
];

export const commentaires = [
  {
    id: 1,
    utilisateur: "David",
    genre: "homme",
    email: "david@gmail.com",
    pro: false,
    fonction: "",
    entreprise: "",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam corporis ipsam alias quisquam, debitis accusantium, placeat numquam adipisci dolor neque ea sapiente non quod maxime cupiditate! Culpa, beatae fugiat? ",
  },
  {
    id: 2,
    utilisateur: "Eleonore",
    genre: "femme",
    email: "eleonore@gmail.com",
    pro: true,
    fonction: "talent acquisition",
    entreprise: "ESN Media",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam corporis ipsam alias quisquam, debitis accusantium, placeat numquam adipisci dolor neque ea sapiente non quod maxime cupiditate! Culpa, beatae fugiat? ",
  },
  {
    id: 3,
    utilisateur: "Connor",
    genre: "homme",
    email: "connor@gmail.com",
    pro: false,
    fonction: "",
    entreprise: "",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam corporis ipsam alias quisquam, debitis accusantium, placeat numquam adipisci dolor neque ea sapiente non quod maxime cupiditate! Culpa, beatae fugiat? beatae fugiat? beatae fugiat? beatae fu",
  },
  {
    id: 4,
    utilisateur: "Damien",
    genre: "homme",
    email: "connor@gmail.com",
    pro: false,
    fonction: "",
    entreprise: "",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, magnam corporis ipsam alias quisquam, debitis accusantium, placeat numquam adipisci dolor neque ea sapiente non quod maxime cupiditate! Culpa, beatae fugiat? ",
  },
];
