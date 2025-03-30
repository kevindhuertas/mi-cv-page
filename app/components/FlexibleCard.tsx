import React from 'react'
import Image from 'next/image'

interface FlexibleCardProps {
  imageSrc?: string
  imageAlt?: string
  children?: React.ReactNode
  onClick?: () => void
}

const FlexibleCard: React.FC<FlexibleCardProps> = ({
  imageSrc,
  imageAlt,
  children,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md
        m-2 p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow
      `}
    >
      {/* Si hay contenido (children), lo mostramos en la parte superior */}
      {children && (
        <div className="mb-4">
          {children}
        </div>
      )}

      {/* Si hay una imagen, la mostramos al final (abajo) */}
      {imageSrc && (
        <div className="mt-auto flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt ?? 'Card image'}
            width={120}
            height={80}
            className="object-contain"
          />
        </div>
      )}
    </div>
  )
}

export default FlexibleCard
