// components/showcase/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon, MapPinIcon, BuildingOfficeIcon, CalendarDaysIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'; // Asegúrate de tener @heroicons/react

interface ProjectCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string; // Podría ser el nombre del proyecto como "Zypher"
  description: string;
  location: string;
  type: string; // Ej: Villas, apartments
  date: string; // Ej: Oct 2028
  startingPrice: string; // Ej: $980,000
  detailsUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  location,
  type,
  date,
  startingPrice,
  detailsUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xl mx-auto">
      <div className="relative h-64 w-full">
         {/* Título superpuesto si es necesario */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 p-4 flex items-end">
            {/* <h3 className="text-white text-2xl font-semibold">{title}</h3> */}
            {/* O el logo como en el ejemplo */}
             <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm p-2 rounded">
                {/* Reemplaza con el logo real de Zypher o un placeholder */}
                <svg className="h-6 w-auto text-white" /* Placeholder logo */ xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                <span className="text-white font-semibold ml-2">{title}</span>
             </div>
         </div>
         <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4 md:p-6">
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1"><MapPinIcon className="h-4 w-4" /> {location}</span>
          <span className="flex items-center gap-1"><BuildingOfficeIcon className="h-4 w-4" /> {type}</span>
          <span className="flex items-center gap-1"><CalendarDaysIcon className="h-4 w-4" /> {date}</span>
          <span className="flex items-center gap-1"><CurrencyDollarIcon className="h-4 w-4" /> Starting: {startingPrice}</span>
        </div>
        <div className="text-right">
          <Link href={detailsUrl}>
            <span className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-semibold py-2 px-4 rounded transition-colors cursor-pointer">
              VIEW PROPERTIES <ArrowUpRightIcon className="h-4 w-4 ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;