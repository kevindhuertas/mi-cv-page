import React from "react";
import GalleryGrid from "./GalleryGrid";

interface ShowcasePageProps {}

export type GalleryItem = {
  id: string;
  title: string;
  text?: string;
  info?: string;
  tecnologies?: string;
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
};

const galleryItemsData: GalleryItem[] = [
  {
    id: "item-6",
    title: "XURBIA Page",
    tecnologies: "Wordpress",
    year: "2024",
    categorie: "work",
    imageUrl: "/projects/xurbia.gif",
    imageStyle: "object-cover",
    isLessHeight: true,
  },
  {
    id: "item-9",
    title: "Desarrollo en Unity",
    text: "",
    tecnologies: "Unity | C#",
    year: "2021",
    categorie: "play",
    imageUrl: "/projects/desarrollogame.gif",
    cardClassName: " ",
    imageStyle: "object-cover",
  },
  {
    id: "item-8",
    title: "Ing. Software Web | Legal Badger",
    text: "Frontend (Angular/React) y Backend (NodeJs/Java)",
    info: "Desarrollo frontend inicial (AngularJS, RxJs, Tailwind) y MVP funcional.\n• Colaboración backend (Java, Spring Boot, RabbitMQ, PostgreSQL).\n• Implementación de nueva fase frontend (React, NextJS, Redux, MUI) con servicios AWS (Lambda, Cognito).\n• Integración con PostgreSQL, RxJs, DynamoDB.\n• Soporte backend (Node.js, Typescript) para endpoints y servicios AWS.\n• Trabajo con Scrum, Jira, Figma, Git y Slack.",
    tecnologies: "React | NextJS | Angular | Node | Java | AWS | SQL/NoSQL",
    year: "2021 - 2023",
    categorie: "work",
    imageUrl: "/projects/legalbadger2.png",
    isExtraHeight: true,
  },
  {
    id: "item-1",
    title: "Taski | Gestor de Tareas",
    text: "Gestor de tareas simple",
    info: "Gestor de tareas desarrollado utilizando React para la interfaz, Redux para el manejo global del estado y Tailwind CSS para los estilos.",
    tecnologies: "React | Redux | Tailwind",
    appUrl: "https://kevindhuertas.github.io/Taski_manager/",
    gitUrl: "https://github.com/kevindhuertas/Taski_manager",
    year: "2022",
    categorie: "work",
    imageUrl: "/projects/taskiapp.png",
    isExtraHeight: true,
  },
  {
    id: "item-4",
    title: "Ing. Software Móvil | Pickup Jobs",
    text: "Desarrollo App Flutter (Cliente/Admin)",
    info: "• Desarrollo de apps cliente y administrador en Flutter (Android/iOS) desde MVP hasta versión funcional.\n• Implementación de Firebase (Storage, Notificaciones, Auth con Google/Apple).\n• Integración de Stripe para pagos.\n• Uso de Trello, GitHub, Figma y herramientas de Apple Development.",
    tecnologies: "Flutter | Firebase | Stripe | Dart",
    year: "2024 - 2025",
    categorie: "work",
    imageUrl: "/projects/pickupjobs.jpg",
    isExtraHeight: true,
  },
  {
    id: "item-3",
    title: "SlackBot <-> Google Sheets",
    text: "Automatiza pedidos de comida",
    info: "Bot para Slack que automatiza la solicitud de pedidos de comida y registra la información directamente en una hoja de cálculo de Google Sheets.",
    tecnologies: "HTML | JavaScript | Google Apps Script",
    year: "2021",
    categorie: "work",
    gitUrl:
      "https://github.com/kevindhuertas/SlackBot_connected_with_spreadsheets_and_Web_page",
    imageUrl: "/projects/lunch4.png",
    isExtraHeight: true,
  },
  {
    id: "item-12",
    title: "Skin para Brawl Stars",
    text: "Concepto de skin para concurso",
    tecnologies: "Blender",
    year: "2020",
    categorie: "play",
    imageUrl: "/projects/skin.JPG",
    cardClassName: " ",
    imageStyle: "object-cover",
  },
  {
    id: "item-2",
    title: "Análisis Latencia/Ancho de Banda Cloud",
    text: "Google Cloud vs Azure Performance",
    info: "Análisis comparativo de latencia de red y ancho de banda utilizando servidores hosteados en Google Cloud y Azure, con interfaz en React.",
    tecnologies: "React | MUI",
    year: "2023",
    categorie: "work",
    appUrl:
      "https://kevindhuertas.github.io/Network-Latency-and-Bandwidth-Analysis-using-Google-Cloud-and-Azure/",
    gitUrl:
      "https://github.com/kevindhuertas/Network-Latency-and-Bandwidth-Analysis-using-Google-Cloud-and-Azure",
    imageUrl: "/projects/rutes.png",
    isLessHeight: true,
  },
  {
    id: "item-5",
    title: "Proyecto Minería Cripto",
    text: "Diseño y gestión de rigs",
    info: "Proyecto personal de minería de criptomonedas con inversión aproximada de $20k. Incluyó diseño, configuración, selección de hardware y mantenimiento para optimizar el minado.",
    tecnologies: "Hardware | Minería",
    year: "Desde 2021",
    categorie: "work",
    imageUrl: "/me/mineria2.JPG",
    isLessHeight: true,
  },
  {
    id: "item-10",
    title: "Creatie Brand",
    text: "Colaboración en desarrollo de marca",
    tecnologies: "Diseño Gráfico?",
    year: "2021",
    categorie: "play",
    imageUrl: "/projects/creatielogo.png",
  },
  // --- Nuevos Items Potenciales del CV (si tienes imágenes/URLs) ---
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
];

const aboutMe: GalleryItem[] = [
  {
    id: "item-13",
    title: "Skate y yo",
    // text: 'Concurso de skin navideña por 10$ mil dolares',
    // tecnologies: 'Blender',
    year: "2022",
    categorie: "play",
    imageUrl: "/me/patineta.gif",
    cardClassName: " ",
    imageStyle: "object-cover",
    // isLessHeight: true,
  },
  {
    id: "item-11",
    title: "Primeros pasos en el desarrollo web",
    // text: 'Colabore en el desarrollo de la marca CREATIE',
    tecnologies: "Html | Css",
    year: "2020",
    categorie: "play",
    imageUrl: "/projects/primercomponent.JPG",
    // isLessHeight: true,
  },
  {
    id: "item-14",
    title: "Love coffe and ser barista",
    // text: '',
    year: "2023",
    categorie: "play",
    imageUrl: "/me/cafe.jpg",
    imageStyle: "object-cover",
    isExtraHeight: true,
  },
];

const GalleryPage: React.FC<ShowcasePageProps> = (props) => {
  const handleCardClick = (cardIdentifier: string) => {
    console.log("Card clicked:", cardIdentifier);
  };
  return (
    <main className="w-full relative pt-3 z-10 mb-0">
      <div className="rounded-t-2xl rounded-b-3xl">
        {/* Usa el componente GalleryGrid */}
        <GalleryGrid
          cardData={galleryItemsData}
          onCardClick={handleCardClick}
        />
      </div>
    </main>
  );
};

// Exporta ShowcasePage como default para poder importarlo sin llaves {}
export default GalleryPage;
