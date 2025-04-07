'use client'

import React, { useState, useRef, useEffect } from 'react';

const BUTTON_ROTATION_FACTOR = 4; // Puede ser menor que en la tarjeta
const BUTTON_SCALE_AMOUNT = 1.08;  // Puede ser mayor para un efecto más notorio
const BUTTON_LIFT_AMOUNT_PX = -3;  // Menos levantamiento
const BUTTON_FOLLOW_FACTOR_PX = 4;   // Factor de seguimiento del cursor
const BUTTON_CLICK_RESET_DURATION_MS = 150; // Duración para el reset al hacer click (debe ser similar o menor a la transición)
const BUTTON_TRANSITION_DURATION = '0.15s'; // Duración de la transición CSS
// ------------------------------------------------------------------

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  withBorder?: boolean;
  transparent?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
  disableHoverAnimation?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {}, 
  className = '',
  withBorder = false,
  transparent = false,
  iconLeft,
  iconRight,
  bgColor,
  textColor,
  hoverBgColor,
  borderColor,
  disableHoverAnimation = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false); 
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disableHoverAnimation || !buttonRef.current || isClicked) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    if (!disableHoverAnimation) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disableHoverAnimation) {
      onClick(event);
      return;
    }
    setIsClicked(true);
    setIsHovered(false); 

    const timer = setTimeout(() => {
      setIsClicked(false);
      onClick(event);
      if (buttonRef.current && buttonRef.current.matches(':hover')) {
          setIsHovered(true);
      }

    }, BUTTON_CLICK_RESET_DURATION_MS);
    return () => clearTimeout(timer);
  };


  const buttonTransform =
    isClicked 
      ? 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)'
    : isHovered && !disableHoverAnimation 
      ? `translate3d(${mousePos.x * BUTTON_FOLLOW_FACTOR_PX}px, ${ mousePos.y * BUTTON_FOLLOW_FACTOR_PX}px, 0) scale3d(${BUTTON_SCALE_AMOUNT}, ${BUTTON_SCALE_AMOUNT}, 1) rotateX(${-mousePos.y * BUTTON_ROTATION_FACTOR}deg) rotateY(${mousePos.x * BUTTON_ROTATION_FACTOR}deg)`
    : 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)';

  const buttonStyle: React.CSSProperties = disableHoverAnimation
    ? {} 
    : {
        transform: buttonTransform,
        transition: `transform ${BUTTON_TRANSITION_DURATION} cubic-bezier(0.23, 1, 0.32, 1)`,
        perspective: '800px', 
        willChange: 'transform', 
      };

  const defaultBg = transparent
    ? 'bg-transparent'
    : bgColor || 'bg-white dark:bg-gray-800';
  const defaultText = textColor || 'text-gray-800 dark:text-gray-200';

  const defaultHoverBg = disableHoverAnimation
    ? hoverBgColor || 'hover:bg-gray-200 dark:hover:bg-gray-700'
    : ''; // Sin hover de color si la animación 3D está activa? O mantenlo 
  const defaultBorder = withBorder
    ? (borderColor || 'border border-gray-300 dark:border-gray-600')
    : '';
  const baseClasses = `inline-block rounded-full px-4 py-2 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-offset-2 `;

  const combinedClasses = `${baseClasses} ${defaultBg} ${defaultText} ${defaultHoverBg} ${defaultBorder} ${className}`.trim();

  return (
    <button
      ref={buttonRef}
      onClick={handleClick} 
      className={combinedClasses}
      style={buttonStyle} 
      onMouseEnter={!disableHoverAnimation ? handleMouseEnter : undefined}
      onMouseLeave={!disableHoverAnimation ? handleMouseLeave : undefined}
      onMouseMove={!disableHoverAnimation ? handleMouseMove : undefined}
      disabled={isClicked}
    >
      <div className="flex items-center justify-center gap-2">
        {iconLeft && <span>{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span>{iconRight}</span>}
      </div>
    </button>
  );
};

export default Button;