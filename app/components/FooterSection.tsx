'use client'
import React, { useState } from 'react';
import Button from './Button';
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from 'react-icons/fa';
import { useLang } from '../context/LanguageProvider';

const FooterSection = () => {
  const { currentLanguage, setCurrentLanguage, translations } = useLang()
  const [copied, setCopied] = useState(false);
  const email = "kevindhuertas@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar el correo:", err);
    }
  };

  return (
    <footer className="w-full py-16 md:py-24 px-4 dark:bg-gray-100 dark:text-black bg-slate-900 text-white text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 md:mb-10">
      {translations.contact}!
      </h2>
      <div className="flex gap-4 justify-center items-center flex-wrap">
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2">
          <span className="text-sm">{email}</span>
          <button onClick={handleCopy} className="ml-4">
            <FaCopy className="h-5 w-5" />
          </button>
          {copied && <span className="ml-2 text-green-700 text-sm">Copied!</span>}
        </div>

        <div className="flex gap-2">
          <Button onClick={() => window.open("https://github.com", "_blank")} withBorder>
            <FaGithub className="h-6 w-6" />
          </Button>
          <Button onClick={() => window.open("https://linkedin.com", "_blank")} withBorder>
            <FaLinkedin className="h-6 w-6" />
          </Button>
          <Button onClick={() => window.location.href = "mailto:kevindhuertas@gmail.com"} withBorder>
            <FaEnvelope className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400">
        <p>Made with <span role="img" aria-label="heart">❤️</span> & Next.js</p>
        <p>&copy; {new Date().getFullYear()} Kevin D huertas.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
