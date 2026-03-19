/**
 * FICHIER DE DONNÉES DES PROJETS
 * Pour ajouter un projet : copier-coller un bloc { ... } et remplir les informations.
 */

export const projects = [
  {
    // Projet 1
    id: "1",
    title: "Note To Myself",
    subtitle: "Jeu vidéo, 1er prix Daniel Sabatier, 2025",
    description: "Note To Myself est un jeu d’exploration narratif à la 1ère personne dans lequel on incarne Paule, une ancienne compositrice atteinte de démence sénile. Ce jeu se passe dans un espace clos, son appartement, qui devient le reflet de sa mémoire fragmentée. Il a été réalisé dans le cadre d’un projet de fin d’études en groupe, et il explore des thématiques liées à la résilience et à la perte de mémoire. \n En interagissant avec les objets du quotidien, le joueur déclenche des souvenirs altérés sous forme d’énigmes à recomposer. Le dictaphone est l’élément central du gameplay, il permet d’ancrer la réalité et ainsi de reconstruire la mémoire de Paule. Ainsi, le gameplay déroule une enquête intime autour d’une présence mystérieuse. \n Ce projet a été récompensé par le 1er prix de la 9ᵉ édition du prix Daniel Sabatier pour son excellence artistique et son innovation.",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Direction Artistique", "UI / UX", "Level Design","Producer","Motion Design", "Illustration"],
    
    // Liens externes
    links: [
      { label: "Itch.io", url: "https://moilaaa.itch.io/note-to-myself" },
      { label: "Youtube", url: "https://www.youtube.com/watch?v=WgCoYmO0O9Y" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src:"/Note to myself/Note to myself 2.webp",
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      
      // Exemple IMG
      
      { 
        src: "/Note to myself/Note to myself teaser.webm",     // Chemin du fichier vidéo
        type: "video",          // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-video",  // Format 16/9
        config: "autoplay"      // Lecture automatique sans son par défaut
      },

        { 
        src: "public/Note to myself/Note to myself 1.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Note to myself/Note to myself 3.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Note to myself/Note to myself 4.webp", 
        ratio: "aspect-video",    // Format 16/9
        },
        
        { 
        src: "/Note to myself/Note to myself 5.webp", 
        ratio: "aspect-video",    // Format 16/9
        },
    ]
  },

   {
    // Mascarade Macabre
    id: "8",
    title: "Une Masc-Arade Macabre",
    subtitle: "Jeu vidéo, 2026",
    description: "Une Masc-Arade Macabre est un jeu d’enquête point-and-click. « Alors que la pièce Une Masc-Arade Macabre se joue ce soir, un drame survient. Saurez-vous percer le mystère qui l’entoure ? » Plongé au cœur d’un meurtre énigmatique, vous incarnez l’enquêteur chargé de reconstituer la scène et de découvrir ce qui s’est réellement passé cette soirée-là. \n Ce projet a été réalisé en duo, avec FFenril. \n Le gameplay tourne autour d’un système d’exploration de la scène de crime, où chaque indice, objet cliquable vous apporte des informations, dans lesquelles nous pouvons récupérer des mots pour avancer notre enquête. \n Avec ces mots, vous devez reconstituer votre rapport de police grâce à un système de drag-and-drop. Le but du jeu est de le finaliser entièrement pour lever le voile sur cette enquête.",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["UI / UX", "Illustration"],
    
    // Liens externes
    links: [
      { label: "Itch.io", url: "https://ffenril.itch.io/mascarade-macabre" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src:"/Masquarade macabre/Une mascarade macabre 4.webp",
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      
      // Exemple IMG

        { 
        src: "/Masquarade macabre/Une mascarade macabre Pp 2.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Masquarade macabre/Une mascarade macabre 1.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Masquarade macabre/Une mascarade macabre 2.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Masquarade macabre/Une mascarade macabre 3.webp", 
        ratio: "aspect-video",    // Format 16/9
        }, 
         
        { 
        src: "/Masquarade macabre/Une mascarade macabre 5.webp", 
        ratio: "aspect-video",    // Format 16/9
        },
    ]
  },
  

   {
    // Le coin des barons
    id: "9",
    title: "Le Coin des Barons",
    subtitle: "Communication visuelle, design graphique et direction artistique, 2024-2026",
    description: "Pendant 2 ans, j’ai participé activement à la communication du Coin des Barons, en tant que Chargée de Communication 360°. \n J’ai participé à l’évolution de l’identité graphique de la marque et créé des contenus digitaux pour les réseaux sociaux. \n J’ai conçu différents supports visuels et print pour les boutiques, le merchandising et les événements. \n Ancrée dans une petite équipe, nous étions en échanges directs avec les responsables de boutiques afin de développer des supports efficaces et adaptés aux besoins marketing et à l’animation de chaque communauté. \n \n J’ai conçu sur Figma un design system pour les réseaux sociaux, pensé pour être facilement déclinable et utilisé encore aujourd’hui par les nouvelles équipes.",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Design graphique", "Communication", "Direction artistique", "Community management", "Print", "Merchandising", "Event","Illustration"],
    
    // Liens externes
    links: [
      { label: "Instagram", url: "https://www.instagram.com/lecoindesbaronstcg/" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src:"/Le coin des barons/Le-Coin-des-Barons-2.webp",
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      
      // Exemple IMG

        { 
        src: "/Le coin des barons/Le coin des barons Pp.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Le coin des barons/Le-Coin-des-Barons-1.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Le coin des barons/Le-Coin-des-Barons-3.webp", 
        ratio: "aspect-video",    // Format 16/9
        },

        { 
        src: "/Le coin des barons/Le coin des barons 1.webm", // Chemin du fichier vidéo
        type: "video",            // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-[9/16]",   // Format Reel vertical 9:16
        config: "autoplay"        // Lecture automatique sans son par défaut
      },   

       { 
        src: "/Le coin des barons/Le coin des barons 2.webm",     // Chemin du fichier vidéo
        type: "video",          // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-[9/16]",   // Format Reel vertical 9:16
        config: "autoplay"      // Lecture automatique sans son par défaut
      },  
        
        { 
        src: "/Le coin des barons/Le-Coin-des-Barons-4.webp", 
        ratio: "aspect-video",    // Format 16/9
        },
         
        { 
        src: "/Le coin des barons/Le-Coin-des-Barons-5.webp", 
        ratio: "aspect-video",    // Format 16/9
        },
    ]
  },

  {
    // Projet 2
    id: "2",
    title: "Ou koné ?",
    subtitle: "Jeu de société, 2024",
    description: "Ou Koné ? est mon projet de fin d’étude en direction artistique : la création complète d’une marque de jeu de société éducatif dédiée à la faune de l’île de La Réunion. Mêlant illustration et engagement pédagogique, il a pour ambition de sensibiliser les plus jeunes à la biodiversité locale. \n Ce projet est un développement de marque à 360°, construit à partir d’une analyse stratégique approfondie, puis de la conception d’une direction artistique et une charte graphique complète. Cela dans une logique de marque prête à être commercialisée. \n Le jeu comprend 30 animaux répartis en trois catégories (eau, terre, air), illustrés dans un style semi-réaliste et kawaii et, un univers végétal inspiré de la flore luxuriante réunionnaise. Les mécaniques de jeu reprennent celles du Qui est-ce ? : une approche simple de déduction qui permet aux enfants d’apprendre tout en s’amusant.",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Direction Artistique", "Branding", "Identité Visuelle", "Illustration", "Stratégie de marque", "UI / UX", "Web Design", "Packaging", "Social Media Design"],
    
    // Liens externes
    links: [
      { label: "Prototype Figma site", url: "https://www.figma.com/proto/W0zE2uZ2Ln9X4ebwxQFysq/PFE---Ou-kon%C3%A9--?page-id=0%3A1&node-id=1021-3637&viewport=-3402%2C216%2C0.21&t=gIZhmL57nzIdGHhW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1021%3A1833" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src: "/Ou kone/Ou Koné 2.webp", // Chemin de l'image dans le dossier public
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
    // Exemple IMG
      { 
        src: "/Ou kone/Ou Koné 1.webp", 
        ratio: "aspect-auto" 
      },
      { 
        src: "/Ou kone/Ou Koné 3.webp", 
        ratio: "aspect-video",    // Format 16/9
      },
      { 
        src: "/Ou kone/Ou koné Motion.webm",     // Chemin du fichier vidéo
        type: "video",          // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-video",  // Format 16/9
        config: "autoplay"      // Lecture automatique sans son par défaut
      },
      { 
        src: "/Ou kone/Ou Koné 5.webp", 
        ratio: "aspect-square"  // Format carré
      },
      { 
        src: "/Ou kone/Ou Koné 4.webp", 
        ratio: "aspect-square"  // Format carré
      },
    
    ]
  },

{
    // Projet 3
    id: "3",
    title: "Le Moulin des Grainettes",
    subtitle: "Jeu vidéo, 2024",
    // \n = espace \u00A0 = alinéa
    description: "Le Moulin des Grainettes est un jeu narratif point-and-click, inspiré du moulin de Fosseuse.  \n À travers une ambiance mêlant humour et fantastique, le jeu met en scène Jean, un cadre parisien bloqué en pleine campagne, contraint de collaborer avec de mystérieuses Grainettes pour redonner vie à un moulin abandonné. Pensé comme une aventure introspective, le jeu s’articule autour de la narration et de la notion de choix, invitant le joueur à explorer chaque pièce, rencontrer ses habitants et se questionner, le temps d’une longue nuit.  \n Ce projet semi-professionnel a été réalisé dans le cadre d’une collaboration avec Aurélie, propriétaire de Robin des Moulins, un lieu aménagé pour des séminaires au vert, des formations RSE et des retraites bien-être, ainsi qu’avec la formation IDE.",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Direction Artistique", "UI/UX", "Voice","Chara design"],
    
    // Liens externes
    links: [
      { label: "Itch.io", url: "https://moilaaa.itch.io/le-moulin-des-grainettes" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src: "/Le moulin des grainettes/Moulin 1.webp", // Chemin de l'image dans le dossier public
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      // Exemple IMG
      { 
        src: "/Le moulin des grainettes/Moulin 2.webp", 
        ratio: "aspect-video",    // Format 16/9
      },
      { 
        src: "/Le moulin des grainettes/Moulin 5.webp", 
        ratio: "aspect-video",    // Format 16/9
      },
      { 
        src: "/Le moulin des grainettes/Moulin 3 Epi.webp", 
        ratio: "aspect-video",    // Format 16/9
      },
    ]
  },

  {
    // Serigraphie
    id: "4",
    title: "Projet en sérigraphie",
    subtitle: "Illustration et print, 2020",
    description: "Projet Le Manchot Hardi – \n Création d’un magazine complet pour enfants, incluant histoire, bande dessinée, mini-jeux et articles scientifiques vulgarisés. Ce projet a été imaginé, rédigé, illustré, imprimé et relié à la main en biochromie, pour offrir un objet à la fois ludique, pédagogique et artistique. \n\n\n  Projet Loup Garou – \n Redesign du jeu de société emblématique Les Loups-Garous de Thiercelieux. Entièrement réalisé à la main, en biochromie chaque illustration et élément graphique a été repensé et stylisé, tout en respectant l’esprit du jeu original. ",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Illustration", "Print", "Narration"],
    
    // Liens externes
    links: [
      
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src: "/Serigraphie/sérigraphie-1.webp", // Chemin de l'image dans le dossier public
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      // Exemple IMG
      { 
        src: "/Serigraphie/sérigraphie-2.webp", 
        ratio: "aspect-video",    // Format 16/9
      },

      { 
        src: "/Serigraphie/sérigraphie-3.webp", 
        ratio: "aspect-video",    // Format 16/9
      },
    ]
  },

  {
    // Motion
    id: "5",
    title: "Motion Design",
    subtitle: "Quelques projets, 2024",
    description: "Ces motion designs explorent différentes techniques à travers le rythme et le mouvement. En jouant sur la vitesse, la dynamique et la synchronisation avec la musique, j’expérimente une mise en tension de fond et de forme, pensé pour procurer le sourire. Le traitement typographique, parfois lyrique, s’accorde sur la musique afin de créer des compositions immersives. ",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Motion Design","Montage"],
    
    // Liens externes
    links: [
      
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src: "/Motion/Motion pp.webp", // Chemin de l'image dans le dossier public
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      // Exemple IMG
      { 
        src: "/Motion/Motion B.webm",     // Chemin du fichier vidéo
        type: "video",          // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-video",  // Format 16/9
        config: "autoplay"      // Lecture automatique sans son par défaut
      },

      { 
        src: "/Motion/Motion A.webm",     // Chemin du fichier vidéo
        type: "video",          // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-video",  // Format 16/9
        config: "autoplay"      // Lecture automatique sans son par défaut
      },
    ]
  },
  {
    // Webdesign
    id: "6",
    title: "Web Design",
    subtitle: "Prototypage et maquettes sur Figma, 2023-2024",
    description: "J’ai réalisé ces projets de web design, du wireframe au prototypage sur Figma, pour répondre à des besoins clients au sein d’une agence d’influence. Ils concernaient des sites no code et WordPress, conçus en collaboration avec un développeur, avec une attention particulière portée à la hiérarchie de l’information et à la représentation de l’identité visuelle de chaque marque, afin de répondre au mieux aux différents briefs.",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Web Design", "UI/UX", "Wireframe"],
    
    // Liens externes
    links: [
      { label: "Site Influence", url: "https://influenceagence.com/" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src: "/Web design/Web-Design-PP.webp", // Chemin de l'image dans le dossier public
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      // Exemple IMG
      { 
        src: "/Web design/Web-design-1.webp", 
        ratio: "aspect-auto",
      },
      { 
        src: "/Web design/Web-Design-Noël.webp", 
        ratio: "aspect-video",    // Format 16/9
      },
      { 
        src: "/Web design/Web-Design-Influence.webp", 
        ratio: "aspect-auto",
      },
    ]
  },
  {
    // Stop Motion
    id: "7",
    title: "Projet artistique, La Mer",
    subtitle: "Stop motion et print, 2019",
    description: "Ce projet d’édition réalisé en duo avec Vanille Manier-Panetier, prend la forme d’un court livre retraçant le processus créatif de notre stop motion en sel. \n La mer, douce, envoûtante mais empreinte de mélancolie, se déploie avec puissance. C'est une animation réalisée en stop motion, rythmée sur la musique de Nine Inch Nails - La Mer, créant une immersion poétique où les émotions se mêlent à l’écume des vagues. ",
    
    // Liste des étiquettes (tags) affichées en bas à gauche
    tags: ["Stop Motion", "Print"],
    
    // Liens externes
    links: [
      { label: "Youtube", url: "https://www.youtube.com/watch?v=dcIOInVS7jo" }
    ],

    // Image de couverture (visible sur la page d'accueil)
    mainImage: { 
      src: "/La Mer/La mer 1.webp", // Chemin de l'image dans le dossier public
      ratio: "aspect-video",    // Format 16/9
    }, 

    // Liste des médias dans le slider
    gallery: [
      { 
        src: "/La Mer/La mer motion.webm",     // Chemin du fichier vidéo
        type: "video",          // Préciser s'il s'agit d'une vidéo
        ratio: "aspect-video",  // Format 16/9
        config: "autoplay"      // Lecture automatique sans son par défaut
      },

      // Exemple IMG
      { 
        src: "/La Mer/La mer 2.webp", 
        ratio: "aspect-auto",
      },
      { 
        src: "/La Mer/La mer 3.webp", 
        ratio: "aspect-auto",
      },
    ]
  },

 
 
];