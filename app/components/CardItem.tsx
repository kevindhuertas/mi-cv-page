"use client";

// components/CardItem.jsx
import React, { useState, useRef } from "react";
import Image from "next/image";

// --- Parámetros de Animación (ajusta estos valores) ---
const IMAGE_ROTATION_FACTOR = 5;
const IMAGE_SCALE_AMOUNT = 1.03;
const CARD_LIFT_AMOUNT_PX = -8;
const CARD_FOLLOW_FACTOR_PX = 5;
const CARD_HOVER_SCALE = 1.02;
// ---------------------------------------------------------

type CardItemProps = {
  title: string;
  text?: string;
  imageUrl?: string;
  onClick?: () => void;
  disableHoverAnimation?: boolean;
  borderRadiusClass?: string;
  cardClassName?: string;
  imageStyle?: string;
};

const CardItem: React.FC<CardItemProps> = ({
  title,
  text,
  imageUrl,
  onClick = () => {},
  disableHoverAnimation = false, // <-- Nuevo prop, default false
  borderRadiusClass = "rounded-lg",
  cardClassName = "bg-slate-100",
  imageStyle = "object-contain",
}) => {
  // Estado para saber si el cursor está sobre la tarjeta
  const [isHovered, setIsHovered] = useState(false);
  // Estado para la posición relativa del mouse dentro de la tarjeta
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Ref para acceder al elemento DOM de la tarjeta
  const cardRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    if (disableHoverAnimation || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };
  const handleMouseEnter = () => {
    // Solo activa el estado hover si la animación no está deshabilitada
    if (!disableHoverAnimation) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    // Siempre desactiva el estado hover al salir (incluso si la animación estaba deshabilitada)
    setIsHovered(false);
    // Podríamos resetear mousePos aquí, pero no es estrictamente necesario
    // setMousePos({ x: 0, y: 0 });
  };

  // --- Determinar URL y si es GIF ---
  const currentImageUrl = imageUrl || "/azuloscuro.jpg"; // Usa prop o fallback
  const isGif =
    typeof currentImageUrl === "string" &&
    currentImageUrl.toLowerCase().endsWith(".gif");

  // Calcula la transformación de la tarjeta completa (solo si hover está activo y no deshabilitado)
  const cardTransform = isHovered
    ? `translate3d(${mousePos.x * CARD_FOLLOW_FACTOR_PX}px, ${CARD_LIFT_AMOUNT_PX + mousePos.y * CARD_FOLLOW_FACTOR_PX}px, 0) scale3d(${CARD_HOVER_SCALE}, ${CARD_HOVER_SCALE}, 1)`
    : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)";

  const cardStyle = {
    transform: cardTransform,
    transition: "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
  };

  // Calcula la transformación de la imagen interna (solo si hover está activo y no deshabilitado)
  const imageWrapperTransform = isHovered // Igual que arriba
    ? `scale3d(${IMAGE_SCALE_AMOUNT}, ${IMAGE_SCALE_AMOUNT}, ${IMAGE_SCALE_AMOUNT}) rotateX(${-mousePos.y * IMAGE_ROTATION_FACTOR}deg) rotateY(${mousePos.x * IMAGE_ROTATION_FACTOR}deg)`
    : "scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)";

  const imageWrapperStyle = {
    transform: imageWrapperTransform,
    transition: "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
    width: "100%",
    height: "100%",
  };

  // Clases para el contenedor de la imagen interna. Añadimos el redondeo aquí también
  // para asegurar que la imagen se recorte correctamente si el padre tiene overflow hidden.
  const imageContainerClasses = `w-full h-full relative overflow-hidden ${borderRadiusClass} aspect-video`; // Usa el mismo redondeo

  return (
    // Contenedor Principal de la Tarjeta
    // Usa la prop borderRadiusClass
    <div
      ref={cardRef}
      className={`relative border border-slate-100 dark:border-slate-600 
         group h-full flex flex-col overflow-hidden ${cardClassName} ${borderRadiusClass} ${!disableHoverAnimation ? "cursor-pointer" : ""}`} // Aplica clase de redondeo y cursor solo si hay animación
      style={{ perspective: "1000px", ...cardStyle }}
      // Solo adjunta listeners de mouse si la animación está habilitada
      onMouseEnter={!disableHoverAnimation ? handleMouseEnter : undefined}
      onMouseLeave={!disableHoverAnimation ? handleMouseLeave : undefined}
      onMouseMove={!disableHoverAnimation ? handleMouseMove : undefined}
      onClick={onClick} // onClick siempre funciona
    >
      {/* Contenedor de la Imagen */}
      <div className={`${imageContainerClasses} flex-grow`}>
        {/* Wrapper para transformación 3D de imagen */}
        <div style={imageWrapperStyle} className="absolute inset-0">
          <Image
            src={currentImageUrl}
            alt={title || text || "Portfolio Item"}
            fill
            // La imagen en sí no necesita la clase de redondeo si los contenedores la tienen y overflow:hidden
            className={`transition-opacity duration-300 ease-in-out ${imageStyle}`}
            unoptimized={isGif}
            priority={!isHovered && !isGif}
          />
        </div>
      </div>

      {/* --- Contenido de Texto Superpuesto --- */}

      {/* Overlay oscuro (Aparece en hover incluso si la animación está desactivada) */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none ${borderRadiusClass} ${
          // Usamos un estado local simple para el hover del overlay, independiente de la animación principal
          // O podemos seguir usando isHovered principal si queremos que aparezca solo si la animacion está ON.
          // Vamos a mantenerlo simple: el overlay aparece al hacer hover físico.
          "group-hover:opacity-40 opacity-0" // Usamos group-hover de Tailwind
        } z-[1]`}
      ></div>

      {/* Título (Aparece en hover físico) */}
      {title && (
        <h3
          className={`absolute top-4 right-4 text-white text-xl md:text-2xl font-bold transition-all duration-300 ease-in-out pointer-events-none ${
            "group-hover:opacity-100 group-hover:translate-y-0 opacity-0 -translate-y-2" // Usa group-hover
          } z-[2]`}
          style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}
        >
          {title}
        </h3>
      )}

      {/* Mini tarjeta de texto (Aparece en hover físico) */}
      {text && (
        <div
          className={`absolute bottom-4 left-4 transition-all duration-300 ease-in-out pointer-events-none ${
            "group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-3" // Usa group-hover
          } z-[2]`}
        >
          <div
            className={`bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-md shadow-md`}
          >
            <p className="text-black dark:text-white text-xs md:text-sm">
              {text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardItem;
