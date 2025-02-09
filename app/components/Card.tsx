import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, imageAlt, className, children }) => {
  return (
    <div className={`bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}>
      {imageUrl && <img src={imageUrl} alt={imageAlt || title} className="w-full object-cover rounded-t-xl" />}
      <div className="p-4">
        {title && <h5 className="text-lg font-semibold">{title}</h5>}
        {description && <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;