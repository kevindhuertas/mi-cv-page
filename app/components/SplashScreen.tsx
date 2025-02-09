import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  loading: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ loading }) => {
  const [shouldRender, setShouldRender] = useState(loading);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 230); // 500ms es la duración de la animación de salida
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f0f0f0',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
    opacity: loading ? 1 : 0,
    transform: isExiting ? 'translateY(-100vh)' : 'translateY(0)',
    zIndex: 100,
  };

  const loadingIconStyle: React.CSSProperties = {
    border: '5px solid #f3f3f3',
    borderTop: '5px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 2s linear infinite',
  };


  const textStyle: React.CSSProperties = {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    fontSize: '2rem',
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div style={containerStyle}>
      <div style={loadingIconStyle}></div>
    </div>
  );
};

export default SplashScreen;
