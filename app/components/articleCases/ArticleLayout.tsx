// components/showcase/ArticleLayout.tsx
import Image from 'next/image';

interface ArticleLayoutProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  paragraphs: string[];
  subheading?: string;
  subheadingParagraphs?: string[];
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  imageUrl,
  imageAlt,
  paragraphs,
  subheading,
  subheadingParagraphs = [],
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight">
        {title}
      </h1>
      <div className="relative w-full h-64 md:h-80 mb-6 md:mb-8 rounded-lg overflow-hidden shadow-md">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {paragraphs.map((p, index) => (
          <p key={`main-p-${index}`}>{p}</p>
        ))}

        {subheading && (
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-gray-800">{subheading}</h2>
        )}
        {subheadingParagraphs.map((p, index) => (
          <p key={`sub-p-${index}`}>{p}</p>
        ))}
      </div>
       {/* Nota: Tailwind Typography plugin (prose) es útil aquí */}
      {/* Asegúrate de instalar y configurar @tailwindcss/typography */}
      {/* npm install -D @tailwindcss/typography */}
      {/* En tailwind.config.js: plugins: [require('@tailwindcss/typography')], */}
    </div>
  );
};

export default ArticleLayout;