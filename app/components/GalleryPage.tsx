import React from 'react';
import GalleryGrid from './GalleryGrid';

interface ShowcasePageProps {
}


const galleryItemsData = [
  {
    id: 'item-6',
    title: 'XURBIA Page',
    // text: 'Fin de la demostración.',
    tecnologies: 'Wordpress Page',
    year:'2024',
    categorie:'work',
    imageUrl: '/projects/xurbia.gif',
    imageStyle: 'object-cover',
    isLessHeight: true,
    // isExtraHeight: true,
  },
  {
    id: 'item-9',
    title: ' Desarrollo en Unity',
    text: 'Primeros pasos de desarrollo de juegos',
    tecnologies: 'Unity',
    year:'2021',
    categorie:'play',
    imageUrl: '/projects/desarrollogame.gif',
    cardClassName: ' ',
    imageStyle: 'object-cover',
    // isLessHeight: true,
    // isExtraHeight: true,
  },
  {
    id: 'item-8',
    title: 'Desarrollador web en Legal badger',
    text: '',
    tecnologies: 'ReactJS | AngularJs | Tailwind | AWS ',
    year:'2021 - 2023',
    categorie:'work',
    imageUrl: '/projects/legalbadger2.png',
    isExtraHeight: true,
  },
    {
      id: 'item-1',
      title: 'Taski. ',
      text: 'Gestor de tareas hecha',
      tecnologies: 'ReactJS | Redux | Tailwind',
      appUrl:'https://kevindhuertas.github.io/Taski_manager/',
      gitUrl:'https://github.com/kevindhuertas/Taski_manager',
      year:'2022',
      categorie:'work',
      imageUrl: '/projects/taskiapp.png',
      isExtraHeight: true,
      // Altura por defecto
    },
    {
      id: 'item-4',
      title: 'Pickup Jobs',
      text: 'Desarrollador flutter para colaborar en el desarrollo de app admin y cliente',
      tecnologies: 'Flutter | Firebase | Android & Ios',
      year:'2025',
      categorie:'work',
      imageUrl: '/projects/pickupjobs.jpg',
      isExtraHeight:true,
    },
    {
      id: 'item-3',
      title: 'SlackBot with SpreadSheets',
      text: 'Bot de Slack que automatiza la solicitud de pedidos de comida y guarda en google sheet',
      tecnologies: 'Html | JavaScript',
      year:'2021',
      categorie:'work',
      gitUrl: 'https://github.com/kevindhuertas/SlackBot_connected_with_spreadsheets_and_Web_page',
      imageUrl: '/projects/lunch4.png', 
      isExtraHeight: true, 
    },
    {
      id: 'item-12',
      title: 'Skin para Brawl Stars',
      text: 'Concurso de skin para brawl stars',
      tecnologies: 'Blender',
      year:'2020',
      categorie:'play',
      imageUrl: '/projects/skin.JPG',
      cardClassName: ' ',
      imageStyle: 'object-cover',
      // isLessHeight: true,
    },
    {
      id: 'item-2',
      title: 'Network Latency and Bandwidth | Google-Cloud vs Azure', // Título opcional
      text: 'Analyze network latency and bandwidth using servers hosted on Google Cloud and Azure',
      tecnologies: 'ReactJS | MUI',
      year:'2023',
      categorie:'work',
      AppUrl: 'https://kevindhuertas.github.io/Network-Latency-and-Bandwidth-Analysis-using-Google-Cloud-and-Azure/',
      gitUrl: 'https://github.com/kevindhuertas/Network-Latency-and-Bandwidth-Analysis-using-Google-Cloud-and-Azure',
      imageUrl: '/projects/rutes.png', // Puede ser GIF
      isLessHeight: true,
    },
    {
      id: 'item-5',
      title: 'Minería de Criptomonedas',
      text: '+20 000$ in varios rigs de mineria',
      year:'2021',
      categorie:'work',
      imageUrl: '/me/mineria2.JPG',
      isLessHeight: true,
    },

    {
      id: 'item-10',
      title: 'Creatie brand',
      text: 'Colabore en el desarrollo de la marca CREATIE',
      year:'2021',
      categorie:'play',
      imageUrl: '/projects/creatielogo.png',
      // isLessHeight: true,
     
    },
    
   
  ];

  const aboutMe = [
    {
      id: 'item-13',
      title: 'Skate y yo',
      // text: 'Concurso de skin navideña por 10$ mil dolares',
      // tecnologies: 'Blender',
      year:'2022',
      categorie:'play',
      imageUrl: '/me/patineta.gif',
      cardClassName: ' ',
      imageStyle: 'object-cover',
      // isLessHeight: true,
    },
    {
      id: 'item-11',
      title: 'Primeros pasos en el desarrollo web',
      // text: 'Colabore en el desarrollo de la marca CREATIE',
      tecnologies: 'Html | Css',
      year:'2020',
      categorie:'play',
      imageUrl: '/projects/primercomponent.JPG',
      // isLessHeight: true,
    },
    {
      id: 'item-14',
      title: 'Love coffe and ser barista',
      // text: '',
      year:'2023',
      categorie:'play',
      imageUrl: '/me/cafe.jpg',
      imageStyle: 'object-cover',
      isExtraHeight: true,
    },
  ]

const GalleryPage: React.FC<ShowcasePageProps> = (props) => {
  const handleCardClick = (cardIdentifier:string) => {
    console.log('Card clicked:', cardIdentifier);
    };
  return (
    <main className="w-full relative z-10 mb-0">
            <div className="rounded-t-2xl rounded-b-3xl">
                {/* Usa el componente GalleryGrid */}
                <GalleryGrid cardData={galleryItemsData} onCardClick={handleCardClick} />
            </div>
         </main>
  );
};

// Exporta ShowcasePage como default para poder importarlo sin llaves {}
export default GalleryPage;