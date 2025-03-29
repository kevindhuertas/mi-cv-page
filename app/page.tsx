'use client'
import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useLang } from './context/LanguageProvider';
import Header from './components/Header';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';
import { useTheme } from './context/ThemeContext';
import Modal from './components/Model';

interface HomeProps {
}

const Home: NextPage<HomeProps> = ({}) => {
  const { translations } = useLang()
  const { darkMode, toggleDarkMode } = useTheme()


  // Estado para el modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  // Función para abrir modal con la info de la tarjeta
  const openModal = (title: string,) => {
    setModalTitle(title)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Definimos los datos de cada tarjeta usando las traducciones
  const cardsData = [
    {
      title: translations.cards.aboutMe.title,
      onClick: () => openModal(
        translations.cards.aboutMe.modalTitle,
      ),
    },
    {
      title: translations.cards.experience.title,
      onClick: () => openModal(
        translations.cards.experience.modalTitle,
      ),
    },
    {
      title: translations.cards.education.title,
      onClick: () => openModal(
        translations.cards.education.modalTitle,

      ),
    },
    {
      title: translations.cards.personalProjects.title,
      onClick: () => openModal(
        translations.cards.personalProjects.modalTitle,
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      {/* <CardsSection cardsData={cardsData} /> */}


      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
      >{<></>}</Modal>
    </div>
  )
}

export default Home
