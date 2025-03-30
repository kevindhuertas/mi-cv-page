import React from 'react'
import Image from 'next/image'

interface CardProps {
  title: string;
  onClick: () => void;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ title, onClick, backgroundColor = 'bg-white dark:bg-gray-800'}) => {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 w-48 md:w-64 h-96 md:h-80  rounded-[40px]
                 cursor-pointer transition-all duration-300 ease-in-out
                 flex flex-col items-center justify-between m-2 p-4
                 hover:-translate-y-2 hover:shadow-lg
                 shadow-none ${backgroundColor}`}
    >
      {/* Título */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
        {title}
      </h2>

      {/* Imagen en la parte de abajo */}
      <div className="mt-auto w-full flex justify-center">
        <Image
          src="/Imagen.png"
          alt="Imagen"
          width={120}
          height={80}
          className="object-contain max-h-[80px]"
        />
      </div>
    </div>
  )
}

export default Card