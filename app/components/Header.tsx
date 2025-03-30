import React from 'react'
import Button from './Button'
import { MoonIcon, SunIcon, UserIcon } from '@heroicons/react/16/solid'
import { useLang } from '../context/LanguageProvider'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const { currentLanguage, setCurrentLanguage, translations } = useLang()

  const handleLanguageChange = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en')
  }

  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <UserIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        {/* <span
          // style={{ fontFamily: 'Papyrus, cursive' }}
          className="text-xl font-semibold text-gray-700 dark:text-gray-200"
        >
          KEVIN H.
        </span> */}
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <Button
          onClick={() => {}}
          bgColor="bg-gray-200 dark:bg-gray-700"
          hoverBgColor="hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          {translations.contact}
        </Button>
        <Button onClick={toggleDarkMode} withBorder>
          {darkMode ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
        </Button>
        <Button onClick={handleLanguageChange} withBorder>
          {currentLanguage === 'en' ? 'EN' : 'ES'}
        </Button>
      </div>
    </header>
  )
}

export default Header
