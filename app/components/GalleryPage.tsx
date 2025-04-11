import React from "react";
import GalleryGrid from "./GalleryGrid";

interface ShowcasePageProps {}

export type GalleryItem = {
  id: string;

  year: string;
  categorie: "work" | "play";
  imageUrl: string;
  appUrl?: string;
  gitUrl?: string;
  cardClassName?: string;
  imageStyle?: string;
  borderRadiusClass?: string;
  isLessHeight?: boolean;
  isExtraHeight?: boolean;
  disableHoverAnimation?: boolean;
  onClick?: (id: string) => void;
  translations: {
    [key in "en" | "es"]: {
      title: string;
      text?: string;
      info?: string;
      tecnologies?: string;
    };
  };
};

const galleryItemsData: GalleryItem[] = [
  {
    id: "item-6",
    year: "2024",
    categorie: "work",
    imageUrl: "/projects/xurbia.gif",
    imageStyle: "object-contain p-2 md:p-6",
    isLessHeight: true,
    translations: {
      es: {
        title: "Página XURBIA",
        tecnologies: "Wordpress",
      },
      en: {
        title: "XURBIA Page",
        tecnologies: "Wordpress",
      },
    },
  },
  {
    id: "item-9",
    year: "2021",
    categorie: "play",
    imageUrl: "/projects/desarrollogame.gif",
    cardClassName: " ",
    imageStyle: "object-cover",
    translations: {
      es: {
        title: "Desarrollo con Unity",
        text: "",
        tecnologies: "Unity | C#",
      },
      en: {
        title: "Development with Unity",
        text: "",
        tecnologies: "Unity | C#",
      },
    },
  },
  {
    id: "item-8",
    year: "2021 - 2023",
    categorie: "work",
    imageUrl: "/projects/legalbadger2.png",
    imageStyle: "object-contain p-2 md:p-8 shadow-lg rounded-sm",
    isExtraHeight: true,
    translations: {
      es: {
        title: "Ing. Software Web | Legal Badger",
        text: "Frontend (Angular/React) y Backend (NodeJs/Java)",
        info: "Desarrollo frontend inicial (AngularJS, RxJs, Tailwind) y MVP funcional.\n• Colaboración backend (Java, Spring Boot, RabbitMQ, PostgreSQL).\n• Implementación de nueva fase frontend (React, NextJS, Redux, MUI) con servicios AWS (Lambda, Cognito).\n• Integración con PostgreSQL, RxJs, DynamoDB.\n• Soporte backend (Node.js, Typescript) para endpoints y servicios AWS.\n• Trabajo con Scrum, Jira, Figma, Git y Slack.",
        tecnologies: "React | NextJS | Angular | Node | Java | AWS | SQL/NoSQL",
      },
      en: {
        title: "Web Software Eng. | Legal Badger",
        text: "Frontend (Angular/React) and Backend (NodeJs/Java)",
        info: "Initial frontend development (AngularJS, RxJs, Tailwind) and functional MVP.\n• Backend collaboration (Java, Spring Boot, RabbitMQ, PostgreSQL).\n• Implementation of new frontend phase (React, NextJS, Redux, MUI) with AWS services (Lambda, Cognito).\n• Integration with PostgreSQL, RxJs, DynamoDB.\n• Backend support (Node.js, Typescript) for endpoints and AWS services.\n• Worked with Scrum, Jira, Figma, Git, and Slack.",
        tecnologies: "React | NextJS | Angular | Node | Java | AWS | SQL/NoSQL",
      },
    },
  },
  {
    id: "item-1",
    appUrl: "https://kevindhuertas.github.io/Taski_manager/",
    gitUrl: "https://github.com/kevindhuertas/Taski_manager",
    year: "2022",
    categorie: "work",
    imageStyle: "object-contain p-2 md:p-8 shadow-lg rounded-sm",
    imageUrl: "/projects/taskiapp.png",
    isExtraHeight: true,
    translations: {
      es: {
        title: "Taski | Gestor de Tareas",
        text: "Gestor de tareas simple",
        info: "Gestor de tareas desarrollado utilizando React para la interfaz, Redux para el manejo global del estado y Tailwind CSS para los estilos.",
        tecnologies: "React | Redux | Tailwind",
      },
      en: {
        title: "Taski | Task Manager",
        text: "Simple task manager",
        info: "Task manager developed using React for the interface, Redux for global state management, and Tailwind CSS for styling.",
        tecnologies: "React | Redux | Tailwind",
      },
    },
  },
  {
    id: "item-4",
    year: "2024 - 2025",
    categorie: "work",
    imageUrl: "/projects/pickupjobs.jpg",
    imageStyle: "object-contain p-1 md:p-6 rounded-sm",
    isExtraHeight: true,
    translations: {
      es: {
        title: "Ing. Software Móvil | Pickup Jobs",
        text: "Desarrollo de App Flutter (Cliente/Admin)",
        info: "• Desarrollo de apps cliente y administrador en Flutter (Android/iOS) desde MVP hasta versión funcional.\n• Implementación de Firebase (Storage, Notificaciones, Auth con Google/Apple).\n• Integración de Stripe para pagos.\n• Uso de Trello, GitHub, Figma y herramientas de Apple Development.",
        tecnologies: "Flutter | Firebase | Stripe | Dart",
      },
      en: {
        title: "Mobile Software Eng. | Pickup Jobs",
        text: "Flutter App Development (Client/Admin)",
        info: "• Development of client and administrator apps in Flutter (Android/iOS) from MVP to functional version.\n• Implementation of Firebase (Storage, Notifications, Auth with Google/Apple).\n• Integration of Stripe for payments.\n• Use of Trello, GitHub, Figma, and Apple Development tools.",
        tecnologies: "Flutter | Firebase | Stripe | Dart",
      },
    },
  },
  {
    id: "item-3",
    year: "2021",
    categorie: "work",
    gitUrl:
      "https://github.com/kevindhuertas/SlackBot_connected_with_spreadsheets_and_Web_page",
    imageUrl: "/projects/lunch4.png",
    imageStyle: "object-contain p-2 md:p-8 rounded-sm",
    isExtraHeight: true,
    translations: {
      es: {
        title: "SlackBot <-> Google Sheets",
        text: "Automatiza pedidos de comida",
        info: "Bot para Slack que automatiza la solicitud de pedidos de comida y registra la información directamente en una hoja de cálculo de Google Sheets.",
        tecnologies: "HTML | JavaScript | Google Apps Script",
      },
      en: {
        title: "SlackBot <-> Google Sheets",
        text: "Automates food orders",
        info: "Slack bot that automates food order requests and records the information directly into a Google Sheets spreadsheet.",
        tecnologies: "HTML | JavaScript | Google Apps Script",
      },
    },
  },
  {
    id: "item-12",
    year: "2020",
    categorie: "play",
    imageUrl: "/projects/skin.JPG",
    cardClassName: " ",
    imageStyle: "object-cover",
    translations: {
      es: {
        title: "Skin para Brawl Stars",
        text: "Concepto de skin para concurso",
        tecnologies: "Blender",
      },
      en: {
        title: "Skin for Brawl Stars",
        text: "Skin concept for contest",
        tecnologies: "Blender",
      },
    },
  },
  {
    id: "item-10",
    year: "2021",
    categorie: "play",
    imageStyle: "object-contain p-2 md:p-8 rounded-sm",
    imageUrl: "/projects/creatielogo.jpg",
    translations: {
      es: {
        title: "Creatie Brand",
        text: "Colaboración en desarrollo de marca",
        tecnologies: "Diseño Gráfico",
      },
      en: {
        title: "Creatie Brand",
        text: "Collaboration in brand development",
        tecnologies: "Graphic Design?",
      },
    },
  },
  {
    id: "item-5",
    year: "Desde 2021",
    categorie: "work",
    imageUrl: "/me/mineria2.JPG",
    imageStyle: "object-cover",
    isLessHeight: true,
    translations: {
      es: {
        title: "Proyecto Minería Cripto",
        text: "Diseño y gestión de rigs",
        info: "Proyecto personal de minería de criptomonedas con inversión aproximada de $20k. Incluyó diseño, configuración, selección de hardware y mantenimiento para optimizar la minería.",
        tecnologies: "Hardware | Minería",
      },
      en: {
        title: "Crypto Mining Project",
        text: "Rig design and management",
        info: "Personal cryptocurrency mining project with an approximate investment of $20k. Included design, configuration, hardware selection, and maintenance to optimize mining.",
        tecnologies: "Hardware | Mining",
      },
    },
  },
  {
    id: "item-2",
    appUrl:
      "https://kevindhuertas.github.io/Network-Latency-and-Bandwidth-Analysis-using-Google-Cloud-and-Azure/",
    gitUrl:
      "https://github.com/kevindhuertas/Network-Latency-and-Bandwidth-Analysis-using-Google-Cloud-and-Azure",
    year: "2023",
    categorie: "work",
    imageUrl: "/projects/rutes.png",
    imageStyle: "object-contain p-2 md:p-8 rounded-sm",
    isLessHeight: true,
    translations: {
      es: {
        title: "Análisis de Latencia/Ancho de Banda Cloud",
        text: "Rendimiento Google Cloud vs Azure",
        info: "Análisis comparativo de latencia de red y ancho de banda utilizando servidores alojados en Google Cloud y Azure, con interfaz en React.",
        tecnologies: "React | MUI",
      },
      en: {
        title: "Cloud Latency/Bandwidth Analysis",
        text: "Google Cloud vs Azure Performance",
        info: "Comparative analysis of network latency and bandwidth using servers hosted on Google Cloud and Azure, with a React interface.",
        tecnologies: "React | MUI",
      },
    },
  },
];

/*
  {
    id: "item-11",
    title: "Prácticas | Asitecno",
    text: "Automatización y Desarrollo Web Interno",
    info: "• Contribución en desarrollo de proyectos internos de automatización.\n• Desarrollo y manejo de aplicaciones web para clientes.\n• Administración de proyecto de digitalización de documentos (planificación a ejecución).",
    tecnologies: "Web Dev | Gestión Proyectos",
    year: "2023 - 2024",
    categorie: "work",
    imageUrl: "/path/to/asitecno_image.png",
    // appUrl: "...",
    // gitUrl: "...",
  },
  {
    id: "item-13",
    title: "Prácticas | Shockoe",
    text: "Corrección y Mejoras de Diseño Web",
    info: "Asistencia en la corrección de errores y aplicación de mejoras de diseño para sitios web según diseños aprobados.",
    tecnologies: "HTML | CSS | Diseño Web",
    year: "2019",
    categorie: "work",
    imageUrl: "/path/to/shockoe_image.png",
  },
   {
    id: "item-14",
    title: "Contenido YouTube / Facebook",
    text: "Creación y Edición Multimedia",
    info: "Creación y monetización de contenido multimedia, desarrollando habilidades en edición de video e imágenes, además de marketing digital.",
    tecnologies: "Edición Video | Edición Imagen | Marketing Digital",
    year: "2015 - 2016",
    categorie: "play",
    imageUrl: "/path/to/youtube_facebook_image.png",
    appUrl: "link-a-canal-o-pagina",
  },
  */

const aboutMe: GalleryItem[] = [
  {
    id: "item-13",
    year: "2022",
    categorie: "play",
    imageUrl: "/me/patineta.gif",
    cardClassName: " ",
    imageStyle: "object-cover",
    translations: {
      es: {
        title: "Skate y yo",
      },
      en: {
        title: "Skateboarding and me",
      },
    },
  },
  {
    id: "item-11",
    year: "2020",
    categorie: "play",
    imageUrl: "/projects/primercomponent.JPG",
    translations: {
      es: {
        title: "Primeros pasos en el desarrollo web",
        tecnologies: "Html | Css",
      },
      en: {
        title: "First steps in web development",
        tecnologies: "Html | Css",
      },
    },
  },
  {
    id: "item-14",
    year: "2023",
    categorie: "play",
    imageUrl: "/me/cafe.jpg",
    imageStyle: "object-cover",
    isExtraHeight: true,
    translations: {
      es: {
        title: "Amor por el café y ser barista",
      },
      en: {
        title: "Love for coffee and being a barista",
      },
    },
  },
];

const GalleryPage: React.FC<ShowcasePageProps> = (props) => {
  const handleCardClick = (cardIdentifier: string) => {};
  return (
    <main className="w-full relative pt-3 z-10 mb-0">
      <div className="rounded-t-2xl rounded-b-3xl">
        <GalleryGrid
          cardData={galleryItemsData}
          onCardClick={handleCardClick}
        />
      </div>
    </main>
  );
};

export default GalleryPage;
