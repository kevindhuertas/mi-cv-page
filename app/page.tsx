'use client'
import React, { FunctionComponent, useState, ReactNode } from 'react';
import type { NextPage } from 'next';
import { useLang } from './context/LanguageProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';
import { useTheme } from './context/ThemeContext';
import Modal from './components/Model';
import ShowcasePage from './components/articleCases/ShowcasePage';

interface HomeProps {
}
type PageComponentType = FunctionComponent<any>; // O sé más específico si ShowcasePage tiene props

const Home: NextPage<HomeProps> = ({}) => {
  const { translations } = useLang();
  const { darkMode, toggleDarkMode } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalPage, setModalPage] = useState<ReactNode>(null);

  const openModal = (title: string, PageComponent: React.FunctionComponent) => {
    setModalTitle(title);
    setModalPage(<PageComponent />);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalPage(null);
  };

  const cardsData = [
    {
      title: translations.cards.experience.title,
      onClick: () => openModal(
        translations.cards.experience.modalTitle,
        ShowcasePage
      ),
      backgroundColor: 'bg-lime-500 dark:bg-lime-600'
    },
    {
      title: translations.cards.aboutMe.title,
      onClick: () => openModal(
        translations.cards.aboutMe.modalTitle,
        ShowcasePage,
      ),
      backgroundColor: 'bg-lime-200 bg-slate-400 dark:bg-slate-600 bg-fuchsia-300 bg-orange-300 '
    },
    // {
    //   title: translations.cards.education.title,
    //   onClick: () => openModal(
    //     translations.cards.education.modalTitle,
    //     ShowcasePage,
    //   ),
    //   backgroundColor: 'bg-lime-200 bg-slate-500 bg-fuchsia-300 bg-orange-300'
    // },
    {
      title: translations.cards.personalProjects.title,
      onClick: () => openModal(
        translations.cards.personalProjects.modalTitle,
        ShowcasePage 
      ),
      backgroundColor: 'bg-orange-400 dark:bg-orange-500'
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white  dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className='flex flex-wrap  justify-center items-center pt-8 md:pt-16 gap-8 md:gap-16'>
          <Hero />
          <CardsSection cardsData={cardsData} />
        </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
      >
        modalPage ahora contiene el JSX de ShowcasePage y es renderizable
        {modalPage}
      </Modal>
    </div>
  );
};

export default Home;