// components/Button.tsx
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  withBorder?: boolean
  transparent?: boolean
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  // Opciones para sobrescribir los colores (usa clases de Tailwind)
  bgColor?: string
  textColor?: string
  hoverBgColor?: string
  borderColor?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  withBorder = false,
  transparent = false,
  iconLeft,
  iconRight,
  bgColor,
  textColor,
  hoverBgColor,
  borderColor,
}) => {
  // Por defecto en light: fondo blanco (o transparente si se indica) y texto oscuro,
  // en dark: fondo gris oscuro y texto claro.
  const defaultBg = transparent
    ? 'bg-transparent'
    : bgColor || 'bg-white dark:bg-gray-800'
  const defaultText = textColor || 'text-gray-800 dark:text-gray-200'
  const defaultHoverBg = hoverBgColor || 'hover:bg-gray-200 dark:hover:bg-gray-700'
  const defaultBorder = withBorder
    ? (borderColor || 'border border-gray-300 dark:border-gray-600')
    : ''

  const classes = `rounded-full px-4 py-2 ${defaultBg} ${defaultText} ${defaultHoverBg} ${defaultBorder} transition-colors ${className}`.trim()

  return (
    <button onClick={onClick} className={classes}>
      <div className="flex items-center gap-2">
        {iconLeft && <span>{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span>{iconRight}</span>}
      </div>
    </button>
  )
}

export default Button
