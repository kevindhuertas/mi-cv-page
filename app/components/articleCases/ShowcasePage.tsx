// /components/articleCases/ShowcasePage.tsx o donde lo tengas
// Asegúrate que la RUTA de este archivo sea correcta cuando lo importes en Home.tsx

import React from 'react';
import ProjectCard from './ProjectCard';
import CaseStudyHeader from './CaseStudyHeader';
import ArticleLayout from './ArticleLayout';
import FeatureSection from './FeatureSection';
import ProjectInfoCard from './ProjectHighlight';

// Define props si ShowcasePage las necesita. Si no, usa {}
interface ShowcasePageProps {
  // Podrías pasar datos aquí si quisieras hacerlo más reutilizable
  // Por ejemplo: initialData?: any;
}

// Datos de ejemplo (pueden venir de props o definirse aquí)
const metaDataEjemplo = [
    { label: 'Servicio', value: 'UI.UX' },
    { label: 'Rol', value: 'Branding, Diseño Web' },
    { label: 'Fecha', value: 'Nov 2023' },
];

const parrafosArticulo = [
    "A medida que internet continúa desarrollándose...", // Contenido acortado
    "Ya sea que busques un empleo asalariado..."
];

const parrafosSubtitulo = [
    "Una carrera en diseño de sitios web puede implicar..."
];


// Define ShowcasePage usando React.FC
const ShowcasePage: React.FC<ShowcasePageProps> = (props) => {
  // Aquí puedes usar props si las defines y pasas

  return (
    // Quitamos el div contenedor extra (bg-gray-50, etc.)
    // porque este componente ahora se usará DENTRO de otro (el Modal).
    // El contenedor principal estará en Home.tsx o en el Modal.
    <div className="container mx-auto py-16 px-4 space-y-20"> {/* Estilos para el contenido interno */}

      {/* ----- 1. Componente ProjectHighlight ----- */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">1. Ejemplo Project Highlight</h2>
      <ProjectInfoCard
        imageUrl="/azulSimple.jpeg" // Usa tu imagen placeholder o la específica
        imageAlt="Abstract purple shapes"
        title="Kalo"
        // icon={<TuIconoKalo />} // Opcional: Pasa tu icono SVG específico si lo tienes
        description="We helped a rising AI food startup create a brand identity that aligns with their eco-conscious mission. From logo design and packaging to a full-scale digital launch strategy."
        client="Kalo"
        role="UI.UX / Branding"
        date="12.5.2088" // Fecha de ejemplo
        previewLink="#"
      />

      {/* ----- 2. Componente ProjectCard ----- */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 mt-16">2. Ejemplo Project Card</h2>
      <ProjectCard
        imageUrl="/Imagen.png"
        imageAlt="Edificio moderno Zypher"
        title="Residencial Zypher"
        description="Zypher: una comunidad residencial audaz..."
        location="Distrito Central"
        type="Villas, Apartamentos"
        date="Oct 2028"
        startingPrice="$980,000"
        detailsUrl="#"
      />

      {/* ----- 3. Componente FeatureSection ----- */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 mt-16">3. Ejemplo Feature Section</h2>
      <FeatureSection
        imageUrl="/Imagen.png"
        imageAlt="Interfaz de plataforma IA Kozmo"
        title="Diseñando una experiencia de usuario fluida..."
        description="Ut nunc, dui sit nisl, cras velit lorem..."
      />

      {/* ----- 4. Componente CaseStudyHeader ----- */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 mt-16">4. Ejemplo Case Study Header</h2>
      <CaseStudyHeader
        backLinkUrl="/" // O podrías hacer que esto sea una prop
        backLinkText="Volver a todos los casos"
        title="Kozmo"
        description="Ut nunc, dui sit nisl, cras velit lorem..."
        metaData={metaDataEjemplo} // Usando los datos definidos arriba
        previewUrl="https://framer.com"
      />

      {/* ----- 5. Componente ArticleLayout ----- */}
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 mt-16">5. Ejemplo Article Layout</h2>
      <ArticleLayout
        title="20 principios psicológicos aplicados..."
        imageUrl="/Imagen.png"
        imageAlt="Concepto abstracto de diseño y psicología"
        paragraphs={parrafosArticulo} // Usando los datos definidos arriba
        subheading="¿Qué implica una carrera en diseño web?"
        subheadingParagraphs={parrafosSubtitulo} // Usando los datos definidos arriba
      />

    </div>
  );
};

// Exporta ShowcasePage como default para poder importarlo sin llaves {}
export default ShowcasePage;