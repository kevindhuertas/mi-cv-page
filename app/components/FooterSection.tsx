"use client";
import React, { useState, useEffect, memo, useMemo } from "react";
import Button from "./Button";
import { FaEnvelope, FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { useLang } from "../context/LanguageProvider";

interface BubbleBackgroundProps {
  count: number;
  speedControl: number;
  minSize: number;
  maxSize: number;
  isBursting: boolean;
}

const BubbleBackground = memo<BubbleBackgroundProps>(
  ({ count, speedControl, minSize, maxSize, isBursting }) => {
    const bubblesData = useMemo(() => {
      return Array.from({ length: count }, (_, i) => ({
        key: i,
        width: `${Math.random() * (maxSize - minSize) + minSize}px`,
        height: `${Math.random() * (maxSize - minSize) + minSize}px`,
        backgroundColor: `hsl(${Math.random() * 360}, 90%, 40%)`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDurationBase: (Math.random() * 10 + 15) / speedControl,
      }));
    }, [count, speedControl, minSize, maxSize]);

    return (
      <>
        {/* Estilos para acelerar la animación float existente */}
        <style jsx global>{`
          /* Asegúrate que @keyframes float esté definido en tu CSS global */
          .bubble-bursting span {
            /* Sobreescribe SÓLO la duración cuando la clase está activa */
            animation-duration: 0.8s !important; /* Duración rápida temporal */
          }
        `}</style>
        <div
          className={`absolute inset-0 z-0 opacity-70 ${isBursting ? "bubble-bursting" : ""}`}
          aria-hidden="true"
        >
          {bubblesData.map((bubble) => (
            <span
              key={bubble.key}
              className="absolute rounded-full opacity-inherit blur-2xl animate-float"
              style={{
                width: bubble.width,
                height: bubble.height,
                backgroundColor: bubble.backgroundColor,
                top: bubble.top,
                left: bubble.left,
                willChange: "transform, opacity",
                animationDelay: bubble.animationDelay,
                animationDuration: `${bubble.animationDurationBase}s`,
              }}
            />
          ))}
        </div>
      </>
    );
  }
);

BubbleBackground.displayName = "BubbleBackground";

const FooterSection = () => {
  const { translations } = useLang();
  const [copied, setCopied] = useState(false);
  const [isBursting, setIsBursting] = useState(false);
  const email = "kevindhuertas@gmail.com";

  const bubbleCount = 10;
  const speedControl = 12;
  const bubbleMinSize = 270;
  const bubbleMaxSize = 400;

  const handleCopy = async () => {
    if (copied || isBursting) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setIsBursting(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setIsBursting(false), 1000);
    } catch (err) {
      console.error("Error al copiar el correo:", err);
      setCopied(false);
      setIsBursting(false);
    }
  };

  const bubbleProps = useMemo(
    () => ({
      count: bubbleCount,
      speedControl: speedControl,
      minSize: bubbleMinSize,
      maxSize: bubbleMaxSize,
    }),
    [bubbleCount, speedControl, bubbleMinSize, bubbleMaxSize]
  );

  return (
    <footer className="relative overflow-hidden w-full py-44 md:py-52 pt-72 md:pt-80 px-4 bg-slate-900 text-white text-center isolation-isolate">
      <BubbleBackground {...bubbleProps} isBursting={isBursting} />

      {/* Contenido del Footer */}
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-8 md:mb-10">
          {translations.contact}!
        </h2>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          {/* Email y Copiar */}
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 bg-slate-800/50 backdrop-blur-md">
            <span className="text-sm">{email}</span>
            <button
              onClick={handleCopy}
              className="ml-4 text-gray-300 hover:text-white disabled:opacity-50 transition-opacity"
              disabled={copied || isBursting}
              aria-label="Copiar correo"
            >
              <FaCopy className="h-5 w-5" />
            </button>
            {copied && (
              <span className="ml-2 text-green-400 text-sm animate-pulse">
                Copied!
              </span>
            )}
          </div>
          {/* Sociales */}
          <div className="flex gap-2">
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/kevindhuertas",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              withBorder
            >
              {" "}
              <FaGithub className="h-6 w-6" />{" "}
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kevindanielop/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              withBorder
            >
              {" "}
              <FaLinkedin className="h-6 w-6" />{" "}
            </Button>
            <Button
              onClick={() => (window.location.href = `mailto:${email}`)}
              withBorder
            >
              {" "}
              <FaEnvelope className="h-6 w-6" />{" "}
            </Button>
          </div>
        </div>
        {/* Créditos */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            & Next.js
          </p>
          <p>© {new Date().getFullYear()} Kevin D Huertas.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
