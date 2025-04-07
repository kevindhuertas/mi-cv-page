// components/showcase/CaseStudyHeader.tsx
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

interface MetaItem {
  label: string;
  value: string;
}

interface CaseStudyHeaderProps {
  backLinkUrl: string;
  backLinkText?: string;
  title: string;
  description: string;
  metaData: MetaItem[];
  previewUrl?: string; // URL para el enlace de preview (opcional)
}

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({
  backLinkUrl,
  backLinkText = 'All case studies',
  title,
  description,
  metaData,
  previewUrl,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="mb-6 md:mb-8">
        <Link href={backLinkUrl}>
          <span className="inline-flex items-center text-sm text-gray-600 hover:text-black cursor-pointer">
            <ArrowLeftIcon className="h-4 w-4 mr-1" /> {backLinkText}
          </span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Columna Izquierda - Título y Descripción */}
        <div className="md:w-2/3">
          <h1 className="text-5xl md:text-7xl font-bold text-black leading-none mb-4">
            {title}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Columna Derecha - Metadatos */}
        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
          <div className="space-y-3 border-t border-gray-200 md:border-t-0 pt-4 md:pt-0">
            {metaData.map((item) => (
              <div key={item.label} className="flex justify-between text-sm border-b border-gray-200 pb-3">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-800 text-right">{item.value}</span>
              </div>
            ))}
            {previewUrl && (
                 <div className="flex justify-between text-sm pt-1">
                    <span className="text-gray-500">Preview</span>
                    <Link href={previewUrl} target="_blank" rel="noopener noreferrer">
                         <span className="font-medium text-blue-600 hover:underline truncate max-w-[150px] inline-block text-right">{previewUrl.replace(/^https?:\/\//, '')}</span>
                    </Link>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHeader;