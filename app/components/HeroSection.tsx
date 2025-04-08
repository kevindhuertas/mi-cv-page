"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Importa motion
import Hero from "./Hero"; // Asumiendo que este es tu componente de imagen
import Button from "./Button"; // Importa tu componente Button
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// Define las props que recibirá el componente
interface HeroSectionProps {
  onAboutMeClick: () => void; // Función a ejecutar al hacer clic en "Sobre Mí"
  isAboutMeOpen: boolean;
}

// Constantes para los valores de padding (ajusta según tu diseño)
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
  // Estado para controlar si la sección está encogida
  const [isShrunk, setIsShrunk] = useState(false);
  // Estado para controlar si la animación inicial ya ocurrió (opcional, para evitar que se repita)
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > SCROLL_THRESHOLD;
      // Encoge si se supera el umbral Y la sección "Sobre Mí" NO está abierta
      // O si la sección "Sobre Mí" ESTÁ abierta (prioridad)
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

    // Limpieza al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAboutMeOpen]); // Re-ejecuta el efecto si cambia el estado de isAboutMeOpen

  // Manejador para el botón "Sobre Mí"
  const handleAboutButtonClick = () => {
    setIsShrunk(true); // Encoge inmediatamente al hacer clic
    onAboutMeClick(); // Llama a la función pasada por props
  };

  // Variantes para la animación de entrada de los elementos
  const elementVariants = {
    hidden: { y: 30, opacity: 0 }, // Empieza abajo y transparente
    visible: (i: number) => ({
      // 'i' es el índice personalizado para el retraso
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15, // Retraso escalonado
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Define los estilos de gradiente para los botones sociales (ajusta colores)
  const githubGradient =
    "bg-gradient-to-br from-gray-700 via-gray-800 to-black hover:from-gray-600 hover:to-black";
  const linkedinGradient =
    "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 hover:from-blue-500 hover:to-blue-800";
  const emailGradient =
    "bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700 hover:from-teal-400 hover:to-blue-600"; // Ejemplo

  return (
    // Sección principal con animación de padding
    <motion.section
      className={`w-full max-w-3xl mx-auto px-4 transition-all duration-300 ease-out ${isShrunk ? SHRUNK_PADDING_TOP : EXPANDED_PADDING_TOP} ${isShrunk ? SHRUNK_PADDING_BOTTOM : EXPANDED_PADDING_BOTTOM}`}
      // No necesitamos animate de framer-motion para el padding si usamos transiciones CSS
    >
      {/* Contenedor para aplicar stagger a los hijos */}
      <div>
        {/* --- Elemento 1: Status Bar --- */}
        <motion.div
          custom={0} // Índice para el retraso
          initial="hidden"
          animate="visible"
          variants={elementVariants}
          className="inline-flex items-center bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full mb-6 md:mb-8 shadow-sm" // Ajustado mb
        >
          <span>Todavia disponible para nuevos proyectos</span>
          <span className="ml-2 text-lg">+</span>
        </motion.div>

        {/* --- Elemento 2: Título e Imagen --- */}
        {/* Usamos un div wrapper para animar todo el H1 junto */}
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
            {" "}
            {/* Reduce tamaño de fuente al encoger */}
            <span>Soy</span>
            <span className="font-medium">Kevin H.</span>
            {/* Imagen de Hero con animación de escala al encoger */}
            <motion.span
              className="inline-block align-middle transition-transform duration-300 ease-out"
              animate={{ scale: isShrunk ? 0.75 : 1 }} // Encoge la imagen
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Hero /> {/* Tu componente de imagen */}
            </motion.span>
          </h1>
        </motion.div>

        {/* --- Elemento 3: Botones --- */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={elementVariants}
          className="flex gap-2 w-full justify-between items-center"
        >
          {/* Botones Sociales */}
          <div className="flex gap-1">
            {" "}
            {/* Reducido gap */}
            <Button
              onClick={() =>
                window.open("https://github.com/kevindhuertas", "_blank")
              }
              className="p-2 group" // Añadido 'group' para group-hover en el icono, padding ajustado
              transparent // Asume que tu botón tiene esta prop o se vuelve transparente por defecto
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
          {/* Botón Sobre Mí */}
          <div>
            <Button
              onClick={handleAboutButtonClick}
              withBorder
              className={`px-4 py-2 transition-transform duration-300 ease-out ${isShrunk ? "scale-90" : "scale-100"}`} // Encoge un poco el botón
            >
              {isAboutMeOpen ? "Ver Proyectos" : "Sobre Mí"}
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
