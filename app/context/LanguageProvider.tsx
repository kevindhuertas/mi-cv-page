'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

const TRANSLATIONS = {
  en: {
    contact: 'Contact me',
    heroTitle: 'Design like a pro',
    heroSubtitle: 'Welcome! This is my portfolio page.',
    cards: {
      aboutMe: {
        title: 'About me',
        modalTitle: 'About me',
      },
      experience: {
        title: 'Experience',
        modalTitle: 'My Experience',
      },
      education: {
        title: 'Education',
        modalTitle: 'My Education',
      },
      personalProjects: {
        title: 'Projects',
        modalTitle: 'My Personal Projects',
      }
    }
  },
  es: {
    contact: 'Contáctame',
    heroTitle: 'Diseña como un profesional',
    heroSubtitle: '¡Bienvenido! Esta es mi página de portafolio.',
    cards: {
      aboutMe: {
        title: 'Sobre mí',
        modalTitle: 'Sobre mí',
      },
      experience: {
        title: 'Experiencia',
        modalTitle: 'Mi Experiencia',
      },
      education: {
        title: 'Educación',
        modalTitle: 'Mi Educación',
      },
      personalProjects: {
        title: 'Proyectos',
        modalTitle: 'Mis Proyectos Personales',
      }
    }
  }
}

interface LangContextType {
  currentLanguage: 'en' | 'es';
  setCurrentLanguage: React.Dispatch<React.SetStateAction<'en' | 'es'>>;
  translations: typeof TRANSLATIONS['en'];
}

const LangContext = createContext<LangContextType>({
  currentLanguage: 'en',
  setCurrentLanguage: () => {},
  translations: TRANSLATIONS.en,
})

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es'>('en')
  const translations = currentLanguage === 'en' ? TRANSLATIONS.en : TRANSLATIONS.es

  return (
    <LangContext.Provider value={{ currentLanguage, setCurrentLanguage, translations }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
