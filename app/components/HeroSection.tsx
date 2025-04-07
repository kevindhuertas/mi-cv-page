'use client'
// components/HeroSection.jsx
import React from 'react';
import Link from 'next/link'; // Para enlaces
import Hero from './Hero';
import Button from './Button';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


const HeroSection = () => {
  return (
    <section className="w-full max-w-3xl mx-auto  pt-10 md:pt-8 pb-6 md:pb-24 px-4">
    {/* <section className="w-full max-w-3xl mx-auto  pt-28 md:pt-36 pb-16 md:pb-24 px-4"> */}

        {/* <div className="inline-flex items-center bg-neutral-800 text-neutral-300 text-xs px-3 py-1 rounded-full mb-8 shadow-sm">
            <span>Status: Disponible para nuevos proyectos</span>
            <span className="ml-2 text-lg">+</span>
       </div> */}
        <div className=' flex flex-1 w-full'>

        </div>

      {/* Título principal */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light  leading-tight md:leading-tight mb-8 flex items-center gap-4">
      Soy
        <span className="font-medium"> Kevin H.</span>
        <span className=' inline-block'> <Hero/> </span>
        {/* <span className="inline-block align-middle bg-neutral-700 rounded-full px-3 py-1 mx-1 text-base md:text-lg relative -top-1">
            <IconPlaceholder className="inline-block mr-1 !w-3 !h-3 !bg-white" />
            🚀
        </span>
        who seek to <span className="font-medium">blend insights</span> & <span className="font-medium">unlock potential.</span>
      </h1> */}
      </h1>

      {/* Íconos de redes sociales */}
      <div className='flex gap-2 w-full justify-between items-center'>
        <div className='flex gap-2'>

        <Button onClick={() => window.open("https://github.com", "_blank")} withBorder>
            <FaGithub className="h-6 w-6" />
        </Button>

        <Button onClick={() => window.open("https://linkedin.com", "_blank")} withBorder>
            <FaLinkedin className="h-6 w-6" />
        </Button>

        <Button onClick={() => window.location.href = "mailto:correo@example.com"} withBorder>
            <FaEnvelope className="h-6 w-6" />
        </Button>
        </div>
        <div>
            <Button withBorder>Sobre Mi</Button>
        </div>
      </div>

     

    </section>
  );
};

export default HeroSection;