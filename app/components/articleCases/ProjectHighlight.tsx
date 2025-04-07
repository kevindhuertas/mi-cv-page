// components/showcase/ProjectInfoCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // O tu icono preferido

interface ProjectInfoCardProps {
  imageUrl: string;
  imageAlt: string;
  icon?: React.ReactNode; // Icono opcional antes del título
  title: string;
  description: string;
  client: string;
  role: string;
  date: string;
  previewLink: string;
}

// Un icono placeholder simple (reemplázalo con tu SVG si tienes uno específico)
const DefaultIcon = () => (
  <svg className="h-5 w-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a8 8 0 11-14.856 0M12 21v-5.143m0 0A8.005 8.005 0 0119.428 15.428M12 15.857a8.005 8.005 0 00-7.428-.429m7.428.429V21m0-5.143a8.005 8.005 0 007.428-.429M4.572 15.428A8.005 8.005 0 0112 15.857" />
    {/* Cambia este path por el de tu icono "Kalo" si lo tienes */}
  </svg>
);


const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({
  imageUrl,
  imageAlt,
  icon = <DefaultIcon />, // Usa el icono por defecto si no se proporciona uno
  title,
  description,
  client,
  role,
  date,
  previewLink,
}) => {
  return (
    // Contenedor principal con borde redondeado y sombra
    <div className="bg-white dark:bg-gray-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

      {/* Columna de Imagen (ocupa toda la altura en desktop, arriba en mobile) */}
      <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill" // O 'responsive' si prefieres ajustar width/height manualmente
          objectFit="cover" // Asegura que la imagen cubra el espacio sin distorsionarse
          className="rounded-t-[40px] lg:rounded-l-[40px] lg:rounded-tr-none" // Aplica bordes redondeados correctos
        />
      </div>

      {/* Columna de Información */}
      <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
        <div> {/* Contenedor para agrupar contenido superior */}
          {/* Título con icono */}
          <div className="flex items-center gap-2 mb-3">
            {icon}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>

          {/* Descripción */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Metadatos */}
          <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="text-gray-500 dark:text-gray-400">Client</span>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-right">{client}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="text-gray-500 dark:text-gray-400">Role</span>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-right">{role}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-700 pb-2">
              <span className="text-gray-500 dark:text-gray-400">Date</span>
              <span className="font-medium text-gray-800 dark:text-gray-100 text-right">{date}</span>
            </div>
          </div>
        </div>

        {/* Enlace de Preview (empujado hacia abajo si hay espacio) */}
        <div className="mt-6 lg:mt-8">
          <Link href={previewLink} target="_blank" rel="noopener noreferrer">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white group inline-flex items-center gap-1 tracking-wider">
              [ PREVIEW <ArrowRightIcon className="h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" /> ]
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ProjectInfoCard;