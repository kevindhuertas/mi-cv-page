// components/showcase/FeatureSection.tsx
import Image from 'next/image';

interface FeatureSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="relative w-full h-64 md:h-96 mb-6 md:mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
        {/* Overlay opcional con elementos de UI como en la imagen */}
        {/* Esta parte es compleja y específica, la omito para simplificar, */}
        {/* pero aquí podrías añadir elementos posicionados absolutamente */}
        {/* Ejemplo muy básico de un elemento UI simulado: */}
         {/* <div className="absolute top-4 right-4 bg-white p-2 rounded shadow text-xs">Mock UI Element</div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;