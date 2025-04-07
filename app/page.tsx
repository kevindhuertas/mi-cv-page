"use client";
// pages/index.js (o donde esté tu Home)
import React, { ReactNode, useState } from "react";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import { useLang } from "./context/LanguageProvider";
import { useTheme } from "./context/ThemeContext";
import Modal from "./components/Model";
import GalleryPage from "./components/GalleryPage";

const Home = () => {
  const { translations } = useLang();
  const { darkMode, toggleDarkMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalPage, setModalPage] = useState<ReactNode>(null);

  const openModal = (title: string, PageComponent: React.FunctionComponent) => {
    setModalTitle(title);
    console.log("abriendo modal");
    setModalPage(<PageComponent />);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalPage(null);
  };

  const cardData = [
    {
      id: "experience",
      title: "Experience",
      text: "My professional journey.",
      imageUrl: "/me/yo.jpg",
      onClick: () =>
        openModal(translations.cards.aboutMe.modalTitle, GalleryPage),
    },
    {
      id: "about",
      title: "About Me",
      text: "Get to know me better.",
      imageUrls: ["/azulSimple.jpeg"],
      imageUrl: "/projects/derrollogame.gif",
      onClick: () =>
        openModal(translations.cards.aboutMe.modalTitle, GalleryPage),
    },
    {
      id: "projects",
      title: "Projects",
      text: "See my work in action.",
      imageUrl: "/projects/xurbia.gif",
    },
    // {
    //   id: 'photos',
    //   title: 'Photos',
    //   text: 'Moments I captured.',
    //   imageUrls: ['/azulSimple.jpeg', '/images/photo_gallery.jpg']
    // },
    //  { // -- ¡Quinto elemento añadido! --
    //   id: 'skills',
    //   title: 'Skills',
    //   text: 'What I work with.',
    //   imageUrls: ['/azulSimple.jpeg', '/images/skills_1.png', '/images/skills_2.svg'] // Añade tus imágenes
    // },
  ];

  return (
    <div className=" bg-white  dark:bg-gray-800 text-gray-900 dark:text-gray-100  min-h-screen flex flex-col items-center">
      <Header />
      <HeroSection />
      <main className="w-full  px-4 sm:px-6 lg:px-8 relative z-10 mb-0 ">
        {/* El div que tendrá fondo y bordes redondeados abajo */}
        {/* Rejilla de 3 columnas */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2 lg:gap-3">
                    {cardData.slice(0, 5).map((card, index) => ( // Aseguramos procesar solo 5 para este layout específico
                      <div
                        key={card.id}
                        className={`
                            ${index === 0 ? 'md:row-span-2' : ''}   // Tarjeta 1 ocupa 2 filas en MD+
                            ${index === 0 ? 'md:col-span-1' : ''}   // Tarjeta 1 en columna 1
                            // Las demás tarjetas ocupan 1 columna por defecto y se colocan automáticamente
                         `}
                       >
                          <CardItem
                              title={card.title}
                              text={card.text}
                              imageUrl={card.imageUrl}
                              onClick={card.onClick}
                              borderRadiusClass = 'rounded-[40px]'
                           />
                      </div>
                    ))}
                    {cardData.length > 5 && cardData.slice(5).map((card) => (
                        <div key={card.id} className="md:col-span-1"> 
                             <CardItem
                              title={card.title}
                              text={card.text}
                              imageUrl={card.imageUrl}
                              onClick={card.onClick}
                              borderRadiusClass = 'rounded-[3xl]'
                           />
                        </div>
                    ))} 
                 </div> */}

        <GalleryPage />
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalTitle}>
        modalPage ahora contiene el JSX de ShowcasePage y es renderizable
        {modalPage}
      </Modal>
      <div className=" bg-white  dark:bg-gray-800 h-40 flex w-full rounded-b-3xl z-10">
        {" "}
      </div>
      {/* Sección Footer (ahora parecerá estar 'detrás') */}
      {/* Añadimos un padding-top mayor para que no quede pegado al borde redondeado */}
      <div className=" dark:bg-gray-100 dark:text-black bg-slate-900 w-full -mt-10 pt-20 relative z-0 ">
        {" "}
        {/* Empuja el footer hacia arriba y le da padding top */}
        <FooterSection />
      </div>
    </div> // Fin del contenedor principal de página
  );
};

export default Home;
