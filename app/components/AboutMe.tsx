import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJava,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaFigma,
  FaSlack,
  FaStripe,
  FaFire,
  FaLanguage,
  FaUniversity,
  FaUserGraduate,
  FaBullseye,
  FaChartLine,
  FaVideo,
  FaDownload,
  FaMountain, // Changed FaSkating to FaMountain
  FaCode,
  FaPaintBrush,
  FaCoffee,
  FaRocket,
  FaSearch, // Added FaRocket, FaSearch
} from "react-icons/fa";
import {
  SiFlutter,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiPostgresql,
  SiRabbitmq,
  SiAmazoncognito,
  SiAmazondynamodb,
} from "react-icons/si";
import { IoLanguage, IoEllipsisVertical } from "react-icons/io5";
import { useLang } from "../context/LanguageProvider";

interface SkillBadgeProps {
  icon: React.ElementType;
  label: string;
  iconColor?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  icon: Icon,
  label,
  iconColor = "text-sky-600 dark:text-sky-400",
}) => (
  <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-sky-300 dark:hover:border-sky-600 transition-all duration-200 transform hover:scale-105 cursor-default">
    <Icon className={`h-5 w-5 ${iconColor}`} />
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </span>
  </div>
);

const AboutMe = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { text } = useLang();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const profileImageUrl = `${basePath}/me/kevinfoto.jpg`;
  const graduationImageUrl = `${basePath}/me/graduacion.jpg`;
  const skateImageUrl = `${basePath}/me/Patineta.gif`;
  const coffeeImageUrl = `${basePath}/me/cafe.jpg`;

  const coreSkills = [
    { icon: FaReact, label: "React" },
    { icon: FaAngular, label: "AngularJS" },
    { icon: SiFlutter, label: "Flutter", iconColor: "text-blue-500" },
    { icon: FaNodeJs, label: "Node.js", iconColor: "text-green-600" },
    { icon: SiTypescript, label: "TypeScript", iconColor: "text-blue-600" },
    { icon: FaJsSquare, label: "JavaScript", iconColor: "text-yellow-500" },
    { icon: FaJava, label: "Java", iconColor: "text-red-600" },
  ];

  const familiarSkills = [
    { icon: SiRedux, label: "Redux", iconColor: "text-purple-600" },
    { icon: SiTailwindcss, label: "Tailwind CSS", iconColor: "text-teal-500" },
    { icon: SiMui, label: "MUI", iconColor: "text-blue-700" },
    {
      icon: FaAws,
      label: "AWS (Lambda, Cognito)",
      iconColor: "text-orange-500",
    },
    { icon: SiPostgresql, label: "PostgreSQL", iconColor: "text-blue-700" },
    { icon: SiAmazondynamodb, label: "DynamoDB", iconColor: "text-blue-600" },
    { icon: FaFire, label: "Firebase", iconColor: "text-yellow-500" },
    { icon: FaStripe, label: "Stripe", iconColor: "text-purple-500" },
    { icon: SiRabbitmq, label: "RabbitMQ", iconColor: "text-orange-600" },
    { icon: FaGitAlt, label: "Git", iconColor: "text-orange-700" },
    { icon: FaWordpress, label: "Wordpress", iconColor: "text-blue-800" },
    { icon: FaFigma, label: "Figma", iconColor: "text-pink-500" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <section
      id="about-story-final"
      className="relative py-20 md:py-28 text-gray-800 dark:text-gray-100 overflow-hidden"
    >
      <div
        ref={dropdownRef}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-30"
      >
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
        >
          <FaDownload />
          <span>{text.about.cvButton}</span>
          <IoEllipsisVertical className="ml-1" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-md shadow-xl py-1 border border-gray-200 dark:border-gray-700">
            <a
              href={`${basePath}/me/KevinH_CV_ES.pdf`}
              download={`KevinH_CV.pdf`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              onClick={() => setIsDropdownOpen(false)}
            >
              <IoLanguage /> {text.about.cvDownloadEs}
            </a>
            <a
              href={`${basePath}/me/KevinH_CV_EN.pdf`}
              download={`KevinH_CV.pdf`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
              onClick={() => setIsDropdownOpen(false)}
            >
              <IoLanguage /> {text.about.cvDownloadEn}
            </a>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-12 mb-20 md:mb-28">
          <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-start order-1 lg:order-2">
            <div className="relative mt-10 lg:mt-0">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-sky-400 dark:border-sky-500 transform transition-transform duration-500 hover:scale-103 z-10">
                <Image
                  src={profileImageUrl}
                  alt={text.about.altProfile}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-24 sm:-bottom-10 sm:-right-16 w-40 h-auto sm:w-44 z-20 transform rotate-12 transition-transform duration-300 hover:scale-110">
                <Image
                  src={skateImageUrl}
                  alt={text.about.altActivity}
                  width={126}
                  height={52}
                  className="rounded-lg shadow-xl border-2 border-white dark:border-gray-800"
                  unoptimized={true}
                />
              </div>
              <div className="absolute top-0 -left-12 sm:-left-20 w-24 h-32 sm:w-28 sm:h-36 rounded-lg overflow-hidden shadow-xl transform -rotate-12 border-2 border-white dark:border-gray-800 z-0 hover:z-40 transition-transform duration-300 hover:scale-110">
                <Image
                  src={coffeeImageUrl}
                  alt={text.about.altInterests}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight tracking-tight">
              Kevin Huertas
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 mb-8">
              {text.about.title}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 italic my-8 px-4 max-w-xl mx-auto lg:mx-0 border-l-4 border-sky-200 dark:border-sky-800">
              {text.about.quote}
            </p>
            <div className="flex justify-center lg:justify-start space-x-6 mt-10">
              <a
                href="https://github.com/kevindhuertas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                {" "}
                <FaGithub className="h-7 w-7" />{" "}
              </a>
              <a
                href="https://linkedin.com/in/kevindanielop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 dark:text-gray-500 hover:text-sky-600 dark:hover:text-sky-500 transition-colors transform hover:scale-110"
              >
                {" "}
                <FaLinkedin className="h-7 w-7" />{" "}
              </a>
              <a
                href="mailto:kevindhuertas@gmail.com"
                aria-label="Email"
                className="text-gray-400 dark:text-gray-500 hover:text-red-600 dark:hover:text-red-500 transition-colors transform hover:scale-110"
              >
                {" "}
                <FaEnvelope className="h-7 w-7" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="mb-20 md:mb-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 inline-block relative pb-2">
            {text.about.toolboxTitle}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            {text.about.toolboxIntroCore}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 px-2">
            {coreSkills.map((skill) => (
              <SkillBadge key={skill.label} {...skill} />
            ))}
          </div>
          <p className="text-md text-gray-500 dark:text-gray-400 mb-6">
            {text.about.toolboxIntroFamiliar}
          </p>
          <div className="flex flex-wrap justify-center gap-3 px-2 opacity-80">
            {familiarSkills.map((skill) => (
              <SkillBadge key={skill.label} {...skill} />
            ))}
          </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 mb-20 md:mb-28 bg-gradient-to-r from-sky-50 dark:from-sky-900/20 via-transparent to-indigo-50 dark:to-indigo-900/20 px-6 py-12 md:p-12 rounded-3xl">
          <div className="relative aspect-video md:aspect-[4/5] lg:aspect-square rounded-xl overflow-hidden shadow-xl order-2 md:order-1 group">
            <Image
              src={graduationImageUrl}
              alt={text.about.altGraduation}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white p-2 rounded bg-black/20 backdrop-blur-sm">
              <p className="font-semibold text-md lg:text-lg">
                {" "}
                {text.about.educationDegree}{" "}
              </p>
              <p className="text-xs lg:text-sm opacity-90">
                {" "}
                {text.about.educationUniversity}{" "}
              </p>
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-5">
              {text.about.educationTitle}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {text.about.educationDescription}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <SkillBadge
                icon={FaUserGraduate}
                label={text.about.skillAutodidact}
                iconColor="text-green-600 dark:text-green-400"
              />
              <SkillBadge
                icon={FaRocket}
                label={text.about.skillInitiative}
                iconColor="text-blue-500 dark:text-blue-400"
              />
              <SkillBadge
                icon={FaSearch}
                label={text.about.skillCuriosity}
                iconColor="text-yellow-600 dark:text-yellow-500"
              />
              <SkillBadge
                icon={FaCode}
                label={text.about.skillProblemSolving}
                iconColor="text-orange-500 dark:text-orange-400"
              />
              <SkillBadge
                icon={FaPaintBrush}
                label={text.about.skillDetailOriented}
                iconColor="text-purple-500 dark:text-purple-400"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
            {text.about.interestsTitle}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-4 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-default">
              <IoLanguage className="h-6 w-6" />
              <span>{text.about.langSpanish}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors cursor-default">
              <IoLanguage className="h-6 w-6" />
              <span>{text.about.langEnglish}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-default">
              <FaVideo className="h-5 w-5" />
              <span>{text.about.interestAudiovisual}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-500 transition-colors cursor-default">
              <FaChartLine className="h-5 w-5" />
              <span>{text.about.interestCrypto}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-default">
              <FaMountain className="h-6 w-6" />
              <span>{text.about.interestMountain}</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors cursor-default">
              <FaCoffee className="h-5 w-5" />
              <span>{text.about.interestCoffee}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
