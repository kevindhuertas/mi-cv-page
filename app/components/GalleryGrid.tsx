"use client";

import React, { useState } from "react";
import Masonry from "react-masonry-css";
import CardItem from "./CardItem";
import { GalleryItem } from "./GalleryPage";
import Button from "./Button";
import { useLang } from "../context/LanguageProvider";

const LESS_HEIGHT_CLASS = "h-[480px]";
const DEFAULT_HEIGHT_CLASS = "h-[530px]";
const EXTRA_HEIGHT_CLASS = "h-[560px]";

const breakpointColumnsObj = {
  default: 3,
  1400: 3,
  700: 2,
  500: 1,
};

type GalleryGridProps = {
  cardData?: GalleryItem[];
  onCardClick?: (id: string) => void;
};

type CategoryFilter = "all" | "work";

const GalleryGrid: React.FC<GalleryGridProps> = ({
  cardData = [],
  onCardClick = (id: string) => {},
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");
  const { text, currentLanguage } = useLang();

  if (!cardData || cardData.length === 0) {
    return (
      <p className="text-center text-neutral-400 ">
        {text.gallery.noItemsOverall}
      </p>
    );
  }

  const getHeightClass = (card: GalleryItem) => {
    if (card.isExtraHeight) return EXTRA_HEIGHT_CLASS;
    if (card.isLessHeight) return LESS_HEIGHT_CLASS;
    return DEFAULT_HEIGHT_CLASS;
  };

  // Filtra los datos basados en la categoría seleccionada
  const filteredData = cardData.filter((card) => {
    if (selectedCategory === "all") {
      return true;
    }
    // Ahora también filtramos por "work" o cualquier otra categoría específica que añadas
    return card.categorie === selectedCategory;
  });

  // Función para manejar el cambio de filtro
  const handleFilterChange = (category: CategoryFilter) => {
    setSelectedCategory(category);
  };

  // Define los estilos para los botones activos e inactivos usando las props de tu Button
  const commonButtonClass = "px-8 py-2 text-sm font-medium"; // Clases comunes de tamaño/fuente
  const activeBgColor = "bg-gradient-to-r from-indigo-400 to-sky-400";

  const activeTextColor = "text-white";
  const activeHoverBgColor = "bg-blue-700"; // Opcional: hover más oscuro para activo

  const inactiveBgColor = "bg-gray-200 dark:bg-gray-700";
  const inactiveTextColor = "text-gray-700 dark:text-gray-300";
  const inactiveHoverBgColor = "bg-gray-300 dark:hover:bg-gray-600";

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <Button
          onClick={() => handleFilterChange("all")}
          className={commonButtonClass}
          bgColor={selectedCategory === "all" ? activeBgColor : inactiveBgColor}
          textColor={
            selectedCategory === "all" ? activeTextColor : inactiveTextColor
          }
          hoverBgColor={
            selectedCategory === "all"
              ? activeHoverBgColor
              : inactiveHoverBgColor
          }
          withBorder={false}
          disableHoverAnimation={false}
        >
          {text.gallery.filters.all}
        </Button>

        <Button
          onClick={() => handleFilterChange("work")}
          className={commonButtonClass}
          bgColor={
            selectedCategory === "work" ? activeBgColor : inactiveBgColor
          }
          textColor={
            selectedCategory === "work" ? activeTextColor : inactiveTextColor
          }
          hoverBgColor={
            selectedCategory === "work"
              ? activeHoverBgColor
              : inactiveHoverBgColor
          }
          withBorder={false}
          disableHoverAnimation={false}
        >
          {text.gallery.filters.work}
        </Button>
      </div>

      {/* Grid de Masonry */}
      {filteredData.length > 0 ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex w-auto"
          columnClassName="my-masonry-grid_column px-1"
        >
          {filteredData.map((card: GalleryItem, index) => {
            const heightClass = getHeightClass(card);
            const cardTexts =
              card.translations[currentLanguage] || card.translations.en;

            return (
              <div
                key={card.id || index}
                className={`mb-2 ${heightClass} w-full`}
              >
                <CardItem
                  id={card.id}
                  title={cardTexts.title}
                  text={cardTexts.text}
                  info={cardTexts.info}
                  tecnologies={cardTexts.tecnologies}
                  year={card.year}
                  categorie={card.categorie}
                  imageUrl={card.imageUrl}
                  appUrl={card.appUrl}
                  gitUrl={card.gitUrl}
                  pushBackOnHover={true}
                  borderRadiusClass={card.borderRadiusClass}
                  cardClassName={card.cardClassName}
                  imageStyle={card.imageStyle}
                />
              </div>
            );
          })}
        </Masonry>
      ) : (
        <p className="text-center text-neutral-400 mt-8">
          {text.gallery.noItemsInCategory.replace(
            "{category}",
            selectedCategory
          )}
        </p>
      )}
    </div>
  );
};

export default GalleryGrid;
