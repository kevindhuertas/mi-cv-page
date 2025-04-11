"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Importa motion
import Hero from "./Hero"; // Asumiendo que este es tu componente de imagen
import Button from "./Button"; // Importa tu componente Button
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useLang } from "../context/LanguageProvider";

interface HeroSectionProps {
  onAboutMeClick: () => void;
  isAboutMeOpen: boolean;
}

const EXPANDED_PADDING_TOP = "pt-10 md:pt-8"; // Padding superior normal
const EXPANDED_PADDING_BOTTOM = "pb-6 md:pb-24"; // Padding inferior normal
const SHRUNK_PADDING_TOP = "pt-4 md:pt-4"; // Padding superior reducido
const SHRUNK_PADDING_BOTTOM = "pb-4 md:pb-6"; // Padding inferior reducido
const SCROLL_THRESHOLD = 50; // Píxeles de scroll para activar el encogimiento

const GITHUB_HOVER_COLOR = "text-black dark:text-white";
const LINKEDIN_HOVER_COLOR = "text-blue-600 dark:text-blue-500";
const EMAIL_HOVER_COLOR = "text-teal-600 dark:text-teal-400";
const ICON_DEFAULT_COLOR = "text-gray-500 dark:text-gray-400";

const HeroSection: React.FC<HeroSectionProps> = ({
  onAboutMeClick,
  isAboutMeOpen,
}) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);
  const { text } = useLang();
  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > SCROLL_THRESHOLD;
      if ((shouldShrink && !isAboutMeOpen) || isAboutMeOpen) {
        setIsShrunk(true);
      } else if (!shouldShrink && !isAboutMeOpen) {
        setIsShrunk(false);
      }
    };

    // Llama una vez al montar para establecer el estado inicial basado en el scroll actual
    // y en si la sección About Me ya está abierta al cargar
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAboutMeOpen]);
  const handleAboutButtonClick = () => {
    setIsShrunk(true);
    onAboutMeClick();
  };

  const elementVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15, // Retraso escalonado
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const githubGradient =
    "bg-gradient-to-br from-gray-700 via-gray-800 to-black hover:from-gray-600 hover:to-black";
  const linkedinGradient =
    "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 hover:from-blue-500 hover:to-blue-800";
  const emailGradient =
    "bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 hover:from-teal-400 hover:to-blue-600";

  return (
    <motion.section
      className={`w-full max-w-3xl mx-auto px-4 transition-all duration-300 ease-out ${isShrunk ? SHRUNK_PADDING_TOP : EXPANDED_PADDING_TOP} ${isShrunk ? SHRUNK_PADDING_BOTTOM : EXPANDED_PADDING_BOTTOM}`}
    >
      <div>
        <motion.div
          custom={0} // Índice para el retraso
          initial="hidden"
          animate="visible"
          variants={elementVariants}
          className="inline-flex items-center bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full mb-6 md:mb-8 shadow-sm" // Ajustado mb
        >
          <span>{text.hero.availability}</span>
          <span className="ml-2 text-lg">+</span>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={elementVariants}
          className="mb-6 md:mb-8" // Ajustado mb
        >
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight md:leading-tight flex flex-wrap items-center gap-x-4 gap-y-2 transition-all duration-300 ease-out ${isShrunk ? "lg:text-6xl md:text-5xl sm:text-4xl text-3xl" : ""}`}
          >
            <span>{text.hero.iAm}</span>
            <span className="font-medium">Kevin H.</span>
            <motion.span
              className="inline-block align-middle transition-transform duration-300 ease-out"
              animate={{ scale: isShrunk ? 0.75 : 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Hero />
            </motion.span>
          </h1>
        </motion.div>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={elementVariants}
          className="flex gap-2 w-full justify-between items-center"
        >
          <div className="flex gap-1">
            {" "}
            <Button
              onClick={() =>
                window.open("https://github.com/kevindhuertas", "_blank")
              }
              className="p-2 group"
              transparent
            >
              <FaGithub
                className={`h-6 w-6 ${ICON_DEFAULT_COLOR} group-hover:${GITHUB_HOVER_COLOR} transition-colors duration-200`}
              />
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kevindanielop/",
                  "_blank"
                )
              }
              className="p-2 group"
              transparent
            >
              <FaLinkedin
                className={`h-6 w-6 ${ICON_DEFAULT_COLOR} group-hover:${LINKEDIN_HOVER_COLOR} transition-colors duration-200`}
              />
            </Button>
            <Button
              onClick={() =>
                (window.location.href = "mailto:kevindhuertas@gmail.com")
              }
              className="p-2 group"
              transparent
            >
              <FaEnvelope
                className={`h-6 w-6 ${ICON_DEFAULT_COLOR} group-hover:${EMAIL_HOVER_COLOR} transition-colors duration-200`}
              />
            </Button>
          </div>
          <div>
            <Button
              onClick={handleAboutButtonClick}
              withBorder
              className={`px-4 py-2 transition-transform duration-300 ease-out ${isShrunk ? "scale-90" : "scale-100"}`} // Encoge un poco el botón
            >
              {isAboutMeOpen ? text.hero.viewProjects : text.hero.aboutMe}
            </Button>
          </div>
        </motion.div>

        {/* --- Elemento Decorativo Sutil (Opcional) --- */}
        {/* <motion.div
          custom={3} // Último en animar
          initial="hidden"
          animate="visible"
          variants={elementVariants}
          className="mt-8 md:mt-12 h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-gray-600 dark:via-gray-400 to-transparent" // Línea sutil
        ></motion.div> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
