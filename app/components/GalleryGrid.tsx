'use client'

import React from 'react';
import Masonry from 'react-masonry-css';
import CardItem from './CardItem';

const LESS_HEIGHT_CLASS = 'h-[400px]';
const DEFAULT_HEIGHT_CLASS = 'h-[440px]'; 
const EXTRA_HEIGHT_CLASS = 'h-[480px]';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,    // 3 columnas >= 1100px
  700: 1,     // 2 columnas >= 700px
  500: 1      // 1 columna < 500px
};


const GalleryGrid = ({ cardData = [], onCardClick = () => {} }) => {

  if (!cardData || cardData.length === 0) {
    return <p className="text-center text-neutral-400 ">No items to display.</p>;
  }

  const getHeightClass = (card) => {
    if (card.isExtraHeight) return EXTRA_HEIGHT_CLASS;
    if (card.isLessHeight) return LESS_HEIGHT_CLASS;
    return DEFAULT_HEIGHT_CLASS;
  };

  return (
    // Usar el componente Masonry
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid flex w-auto" // Clase para el contenedor Flexbox
      columnClassName="my-masonry-grid_column mx-2" // Clase para las columnas (añade margen/padding aquí)
                                                    // Ajusta mx-2 o usa pl/pr según prefieras para el gap
    >
      {cardData.map((card, index) => {
        const heightClass = getHeightClass(card);
        return (
          // Wrapper para cada item, aplica altura y margen inferior si es necesario
          <div key={card.id || index} className={`mb-4 ${heightClass} w-full`}> {/* mb-4 para espaciado vertical */}
            <CardItem
              title={card.title}
              text={card.text}
              imageUrl={card.imageUrl || '/azuloscuro.jpg'}
              onClick={() => onCardClick(card.id || card)}
              disableHoverAnimation={true}
              borderRadiusClass={card.borderRadiusClass}
              cardClassName={`${card.cardClassName || ''} h-full`} // h-full para que llene el div
              imageStyle = {card.imageStyle}
            />
          </div>
        );
      })}
    </Masonry>
  );
};


export default GalleryGrid;