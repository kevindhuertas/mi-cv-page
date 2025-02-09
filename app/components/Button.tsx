import React, { ReactNode, MouseEvent } from "react";

// Definición de tipos para las props del botón
interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary"; // Agrega más colores según necesites
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  color = "primary",
  onClick,
  className = "",
  disabled = false,
  loading = false,
  icon = null,
}) => {
  // Clases base
  const baseClasses =
    "rounded-full focus:outline-none transition-all inline-flex items-center justify-center";

  // Clases para el tamaño
  const sizeClasses = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  // Clases para colores
  const colorClasses = {
    primary: "bg-primary text-white dark:bg-darkMode-primary",
    secondary: "bg-secondary text-white dark:bg-darkMode-secondary",
    // Agrega más colores según necesites
  };

  // Combinación de clases
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${
    colorClasses[color]
  } ${className} ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        // Aquí puedes agregar un spinner o animación de carga
        <span>Loading...</span>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
